import 'reflect-metadata'
import { ApolloServer } from 'apollo-server-express'
import Express from 'express'
import { createConnection } from 'typeorm'
import { GraphQLError, GraphQLFormattedError } from 'graphql'
import path from 'path'
import session from 'express-session'
import connectRedis from 'connect-redis'
import dotenv from 'dotenv'
import cors from 'cors'
import ejs from 'ejs'

import { redis } from '~/redis'
import { buildFederatedSchema } from '../scripts/BuildFederatedSchema'
import { RegisterResolver } from './modules/register/Register'
import { LoginResolver } from './modules/login/Login'
import { UserResolver } from './modules/session/User'

dotenv.config()

const main = async () => {
  await createConnection()
  const schema = await buildFederatedSchema({
    resolvers: [UserResolver, RegisterResolver, LoginResolver],
    authChecker: ({ context: { req } }) => {
      return !!req.session.userId
    },
  })
  const apolloServer = new ApolloServer({
    schema,
    formatError: (error: GraphQLError): GraphQLFormattedError => {
      if (error && error.extensions) {
        error.extensions.code = 'GRAPHQL_VALIDATION_FAILED'
      }
      return error
    },
    context: ({ req }: any) => ({ req }),
  })
  const app = Express()
  app.use(Express.static(path.join(__dirname, '../', 'public', 'build')))

  app.engine('html', require('ejs').renderFile)
  app.set('view engine', 'html')
  // app.set('views', path.join(__dirname, '../', 'public', 'build'))

  const RedisStore = connectRedis(session)

  app.use(
    cors({
      credentials: true,
      origin: 'http://localhost:3000',
    })
  )

  // Session middleware
  app.use(
    session({
      store: new RedisStore({
        client: redis as any,
      }),
      name: process.env.REDIS_STORE_NAME,
      secret: process.env.REDIS_STORE_SECRET
        ? process.env.REDIS_STORE_SECRET
        : '',
      resave: false,
      saveUninitialized: false,
      cookie: {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        maxAge: 1000 * 60 * 60 * 24 * 7 * 365, // 7 years
      },
    })
  )

  // Express middleware
  apolloServer.applyMiddleware({ app })
  app.get('/', async (_, res) => {
    res.render(await ejs.renderFile(path.join(__dirname, '../', 'views', 'lander.ejs')))
  })
  app.get('*', (_, res) => {
    res.render('index')
  })
  app.get(':', async (_, res) => {
    res.render(await ejs.renderFile(path.join(__dirname, '../../', 'public', 'build', 'index.html')))
  })
  app.listen(5002, () => {
    console.log(
      `server started on http://localhost:5002/ \nGraphQL server -> http://localhost:5002/graphql`
    )
  })
}

main()
