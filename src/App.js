import { StrictMode } from 'react';
import { BrowserRouter as Router, useRoutes } from 'react-router-dom';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import { uri } from './config';
import LoginCallback from './components/loginContainer/Callback';
import DashboardContainer from './components/dashboardContainer/DashboardContainer';
import { Containers, LoginContainer } from './components';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ThemeProvider, StyledEngineProvider } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';
import { theme } from './theme';
import Layout from './components/Layout';

export default function App() {
  // @ts-ignore
  if (module.hot) {
    // @ts-ignore
    module.hot.accept('./components', (e) => {
      const PageComponent = require('./components');
      render(main(PageComponent), appRootElement);
    });
  }
  // setup apollo
  const client = new ApolloClient({
    uri,
    cache: new InMemoryCache(),
  });
  const Apps = () => {
    let routes = useRoutes([
      { path: '/transactions', element: <Containers /> },
      { path: '/', element: <LoginContainer /> },
      { path: '/validated', element: <LoginCallback /> },
      { path: '/dashboard', element: <DashboardContainer /> },
    ]);
    return routes;
  };

  return (
    <StrictMode>
      <StyledEngineProvider injectFirst>
        <ThemeProvider theme={theme}>
          <ApolloProvider client={client}>
            <CssBaseline />
            <Layout>
              <Router>
                <Apps />
              </Router>
            </Layout>
          </ApolloProvider>
        </ThemeProvider>
      </StyledEngineProvider>
    </StrictMode>
  );
}
