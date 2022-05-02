import { StrictMode } from 'react';
import { BrowserRouter as Router, useRoutes } from 'react-router-dom';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import { uri } from './config';
import LoginCallback from './components/loginContainer/Callback';
import DashboardContainer from './components/dashboardContainer/DashboardContainer';
import { Containers, LoginContainer } from './components';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  ThemeProvider,
  StyledEngineProvider,
  Theme,
} from '@mui/material/styles';
import { CssBaseline } from '@mui/material';
import { theme, customTheming } from './theme';
import Layout from './components/Layout';
import { deepmerge } from '@mui/utils';
import { createTheme } from '@mui/material/styles';

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

  const mergeTheme = createTheme(deepmerge(theme, customTheming));
  return (
    <StrictMode>
      <StyledEngineProvider injectFirst>
        <ApolloProvider client={client}>
          <ThemeProvider theme={mergeTheme}>
            <CssBaseline />
            <Layout>
              <Router>
                <Apps />
              </Router>
            </Layout>
          </ThemeProvider>
        </ApolloProvider>
      </StyledEngineProvider>
    </StrictMode>
  );
}
