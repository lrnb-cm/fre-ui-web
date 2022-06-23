import {
  ApolloClient,
  ApolloProvider,
  from,
  HttpLink,
  InMemoryCache,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { onError } from '@apollo/client/link/error';
import { CssBaseline } from '@mui/material';
import {
  createTheme,
  StyledEngineProvider,
  ThemeProvider,
} from '@mui/material/styles';
import { deepmerge } from '@mui/utils';
import 'bootstrap/dist/css/bootstrap.min.css';
import { initializeApp } from 'firebase/app';
import { StrictMode, useEffect, useMemo, useState } from 'react';
import {
  BrowserRouter as Router,
  useRoutes,
  Route,
  Routes,
} from 'react-router-dom';
import './App.css';
import { Containers, LoginContainer } from './components';
import AuthGuard from './components/AuthGuard';
import Customer from './components/customerContainer/Customers';
import DashboardContainer from './components/dashboardContainer/DashboardContainer';
import Layout from './components/Layout';
import LoginCallback from './components/loginContainer/Callback';
import MyShopContainer from './components/myshopContainer/MyShopContainer';
import MyShopDetailsContainer from './components/myShopDetailsContainer/MyShopDetailsContainer';
import ProductsContainer from './components/productsContainer/ProductsContainer';
import ReportDetailsContainer from './components/reportDetailsContainer/ReportDetails';
import { uri } from './config';
import {
  CUSTOMERS,
  DASHBOARD,
  MY_SHOP,
  PRODUCTS,
  REPORT_DETAILS,
  SHOP_DETAILS,
  TRANSACTIONS,
  VALIDATED,
  FORGOT_PASSWORD,
} from './constants/routes';
import { FirebaseContext } from './contexts/FirebaseContext';
import { UserContext } from './contexts/UserContext';
import GET_USER_DATA from './queries/GET_USER_DATA';
import { customTheming, theme } from './theme';
import ForgotPassword from './components/forgotPasswordContainer/ForgotPasswordContainer';

const firebaseConfig = {
  apiKey: 'AIzaSyAb2yKgDGJowDNhEugINyMyjqBry8c-nBI',
  authDomain: 'freeing-returns.firebaseapp.com',
};

const httpLink = new HttpLink({
  uri,
});

const errorLink = onError(
  ({ graphQLErrors, networkError, forward, operation }) => {
    if (graphQLErrors) {
      console.log(graphQLErrors, 'graphQLErrors in errorLink');
    }
    if (networkError) {
      console.log(networkError, 'networkError in errorLink');
    }
    forward(operation);
  }
);

const authLink = setContext((_, { headers, ...context }) => {
  const idToken = context.idToken || localStorage.getItem('idToken');
  console.log(idToken, 'idToken in authLink');
  return {
    headers: {
      ...headers,
      authorization: `Bearer ${idToken}`,
    },
    ...context,
  };
});

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
  const [userContext, setUserContext] = useState();

  // Setup Apollo Client
  const apolloClient = new ApolloClient({
    link: from([authLink, errorLink, httpLink]),
    uri,
    cache: new InMemoryCache(),
  });

  //Get Firebase idToken and email from localStorage when set
  const [idToken, setIdToken] = useState(localStorage.getItem('idToken'));
  const [email, setEmail] = useState(localStorage.getItem('email'));
  useEffect(() => {
    const listenForLocalStorageChanges = window.addEventListener(
      'storage',
      () => {
        setIdToken(localStorage.getItem('idToken'));
        setEmail(localStorage.getItem('email'));
      },
      false
    );

    return () =>
      window.removeEventListener('storage', listenForLocalStorageChanges);
  }, []);

  // When userContext changes, load user data if it does not exist
  useEffect(() => {
    //Fetch user data only if email and idToken exist in localStorage
    //and if userContex has not been populated yet
    if (!idToken || !email || userContext) return;

    apolloClient
      .query({
        query: GET_USER_DATA,
        variables: {
          filters: { email },
        },
      })
      .then((res) => {
        setUserContext({ ...res.data.getUser, idToken });
      })
      .catch((err) => {
        // Todo: handle error
        console.log(err);
      });
  }, [userContext]);

  // Parse permissions from user context
  const permissions = useMemo(() => {
    if (!userContext) return {};

    // Todo: Add the ability to parse groups and add them to the permissions dictionary
    // Todo: Move this to a utility function and reduce groups with it also
    return userContext.roles.length
      ? userContext.roles.reduce((parsedPermissions, currentRole) => {
          const currentPermissions = currentRole.permissions.reduce(
            (previousPermission, currentPermission) => ({
              ...previousPermission,
              [currentPermission.name]: true,
            }),
            {}
          );
          return {
            ...parsedPermissions,
            ...currentPermissions,
          };
        }, {})
      : {};
  }, [userContext, idToken, email]);

  const mergeTheme = createTheme(deepmerge(theme, customTheming));
  return (
    <StrictMode>
      <StyledEngineProvider injectFirst>
        <ApolloProvider client={apolloClient}>
          <FirebaseContext.Provider value={firebase}>
            <UserContext.Provider
              value={{ setUserContext, userContext, permissions }}
            >
              <ThemeProvider theme={mergeTheme}>
                <CssBaseline />
                <Router>
                  <Routes>
                    <Route index element={<LoginContainer />} />
                    <Route
                      path={FORGOT_PASSWORD}
                      element={<ForgotPassword />}
                    />

                    <Route path="validated" element={<LoginCallback />} />

                    {/* <Route
                      path="/secure-route"
                      element={
                        <AuthGuard>
                          <>Lillii RNB's Secret Sauce</>
                        </AuthGuard>
                      }
                    /> */}
                    <Route path={DASHBOARD} element={<Layout />}>
                      <Route index element={<DashboardContainer />} />
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
            </UserContext.Provider>
          </FirebaseContext.Provider>
        </ApolloProvider>
      </StyledEngineProvider>
    </StrictMode>
  );
}
