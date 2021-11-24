import { Arg, Mutation, Query, Resolver, UseMiddleware } from 'type-graphql'
import bcrypt from 'bcryptjs'
import { User } from '~/loginContainer/entity/User'
import { RegisterInput } from './RegisterInput'
import { IsAuthenticated } from '../../../middlewares/IsAuthenticated'
import { SessionLogger } from '../../../middlewares/SessionLogger'

@Resolver()
export class RegisterResolver {
  /**
   * A simple query that just returns the 'Hello World' string.
   *
   * Example usage:
   * Access http://localhost:3000/graphql
   *
   * Then query 'hello
   */
  @UseMiddleware(IsAuthenticated, SessionLogger)
  @Query(() => String)
  async world() {
    return 'Hello World!'
  }

  /**
   * A simple mutation that receives a user and saves to Postgres with
   * a hashed password.
   */
  @Mutation(() => User)
  async register(
    @Arg('payload') { firstName, lastName, email, password }: RegisterInput
  ): Promise<User> {
    const hashedPassword = await bcrypt.hash(password, 12)
    const user = await User.create({
      firstName,
      lastName,
      email,
      password: hashedPassword,
    }).save()
    return user
  }
}
