import { StrictMode } from 'react';
import {
  BrowserRouter as Router,
  useRoutes,
  Route,
  Routes,
} from 'react-router-dom';
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
import { FirebaseContext } from './contexts/FirebaseContext';
import { initializeApp } from 'firebase/app';
import Customer from './components/customerContainer/Customers';
import ProductsContainer from './components/productsContainer/ProductsContainer';

const firebaseConfig = {
  apiKey: 'AIzaSyAb2yKgDGJowDNhEugINyMyjqBry8c-nBI',
  authDomain: 'freeing-returns.firebaseapp.com',
};

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

  const mergeTheme = createTheme(deepmerge(theme, customTheming));
  const firebase = initializeApp(firebaseConfig);
  return (
    <StrictMode>
      <StyledEngineProvider injectFirst>
        <ApolloProvider client={client}>
          <FirebaseContext.Provider value={firebase}>
            <ThemeProvider theme={mergeTheme}>
              <CssBaseline />
              <Router>
                <Routes>
                  <Route index element={<LoginContainer />} />
                  <Route path="validated" element={<LoginCallback />} />
                  <Route path="dashboard" element={<Layout />}>
                    <Route index element={<DashboardContainer />} />
                    <Route path="customers" element={<Customer />} />
                    <Route path="Products" element={<ProductsContainer />} />
                    <Route path="transactions" element={<Containers />} />

                    {/* Using path="*"" means "match anything", so this route
            acts like a catch-all for URLs that we don't have explicit
            routes for. */}
                    <Route path="*" element={<div>NO CONTENT YET</div>} />
                  </Route>
                </Routes>
              </Router>
            </ThemeProvider>
          </FirebaseContext.Provider>
        </ApolloProvider>
      </StyledEngineProvider>
    </StrictMode>
  );
}
