import { StrictMode } from 'react'
import { BrowserRouter as Router, useRoutes } from 'react-router-dom'
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client'
import { uri } from './config'
import LoginCallback from './components/loginContainer/Callback'
import { Containers, LoginContainer } from './components'
import Customers from './components/customerContainer/Customers'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'

export default function App() {
  // @ts-ignore
  if (module.hot) {
    // @ts-ignore
    module.hot.accept('./components', (e) => {
      const PageComponent = require('./components')
      render(main(PageComponent), appRootElement)
    })
  }
  // setup apollo
  const client = new ApolloClient({
    uri,
    cache: new InMemoryCache()
  })
  const Apps = () => {
    let routes = useRoutes([
      { path: '/transactions', element: <Containers /> },
      { path: '/', element: <LoginContainer /> },
      { path: '/validated', element: <LoginCallback /> },
      { path: '/customers', element: <Customers /> }
    ])
    return routes
  }

  return (
    <div className="App">
      <h2>Welcome to LilliiRnB's Enterprise App!</h2>
      <StrictMode>
        <ApolloProvider client={client}>
          <Router>
            <Apps />
          </Router>
        </ApolloProvider>
      </StrictMode>
    </div>
  )
}
