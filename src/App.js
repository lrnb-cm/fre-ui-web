import { ApolloProvider } from '@apollo/client';
import { CssBaseline } from '@mui/material';
import {
  createTheme,
  StyledEngineProvider,
  ThemeProvider,
} from '@mui/material/styles';
import { deepmerge } from '@mui/utils';
import 'bootstrap/dist/css/bootstrap.min.css';
import { initializeApp } from 'firebase/app';
import { StrictMode } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import { Containers, LoginContainer } from './components';
import Customer from './components/customerContainer/Customers';
import DashboardContainer from './components/dashboardContainer/DashboardContainer';
import Layout from './components/Layout';
import LoginCallback from './components/loginContainer/Callback';
import MyShopContainer from './components/myshopContainer/MyShopContainer';
import MyShopDetailsContainer from './components/myShopDetailsContainer/MyShopDetailsContainer';
import ProductsContainer from './components/productsContainer/ProductsContainer';
import ReportDetailsContainer from './components/reportDetailsContainer/ReportDetails';
import DataStudioContainer from './components/dataStudioContainer/DataStudioContainer';
import {
  CUSTOMERS,
  DASHBOARD,
  MY_SHOP,
  PRODUCTS,
  REPORT_DETAILS,
  SHOP_DETAILS,
  TRANSACTIONS,
  FORGOT_PASSWORD,
  DATA_STUDIO,
  LOGIN,
} from './constants/routes';
import { FirebaseContext } from './components/auth/firebase/FirebaseContext';
import AuthProvider from './components/auth/authProvider/AuthProvider';
import { customTheming, theme } from './theme';
import ForgotPassword from './components/forgotPasswordContainer/ForgotPasswordContainer';
import apolloClient from './ApolloClient';
import AuthGuard from './components/auth/authGuard/AuthGuard';
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
  const firebase = initializeApp(firebaseConfig);

  const mergeTheme = createTheme(deepmerge(theme, customTheming));
  return (
    <StrictMode>
      <StyledEngineProvider injectFirst>
        <ApolloProvider client={apolloClient}>
          <FirebaseContext.Provider value={firebase}>
            <AuthProvider>
              <ThemeProvider theme={mergeTheme}>
                <CssBaseline />
                <Router>
                  <Routes>
                    <Route index element={<LoginContainer />} />
                    <Route path={LOGIN} element={<LoginContainer />} />
                    <Route
                      path="/register"
                      element={() => <div>register here!!!</div>}
                    />

                    <Route
                      path={FORGOT_PASSWORD}
                      element={<ForgotPassword />}
                    />

                    <Route path="validated" element={<LoginCallback />} />

                    <Route
                      path={DASHBOARD}
                      element={
                        <AuthGuard>
                          <Layout />
                        </AuthGuard>
                      }
                    >
                      <Route index element={<DashboardContainer />} />
                      <Route
                        path={DATA_STUDIO}
                        element={<DataStudioContainer />}
                      />

                      <Route path={CUSTOMERS} element={<Customer />} />
                      <Route path={PRODUCTS} element={<ProductsContainer />} />
                      <Route
                        path={REPORT_DETAILS}
                        element={<ReportDetailsContainer />}
                      />
                      <Route path={TRANSACTIONS} element={<Containers />} />
                      <Route path={MY_SHOP} element={<MyShopContainer />} />
                      <Route
                        path={SHOP_DETAILS}
                        element={<MyShopDetailsContainer />}
                      />

                      {/* Using path="*"" means "match anything", so this route
            acts like a catch-all for URLs that we don't have explicit
            routes for. */}
                      <Route path="*" element={<div>NO CONTENT YET</div>} />
                    </Route>
                  </Routes>
                </Router>
              </ThemeProvider>
            </AuthProvider>
          </FirebaseContext.Provider>
        </ApolloProvider>
      </StyledEngineProvider>
    </StrictMode>
  );
}
