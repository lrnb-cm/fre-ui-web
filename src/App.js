import {
  ApolloClient,
  ApolloProvider,
  from,
  HttpLink,
  InMemoryCache,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import { onError } from "@apollo/client/link/error";
import { CssBaseline } from "@mui/material";
import { StyledEngineProvider, ThemeProvider } from "@mui/material/styles";
import "bootstrap/dist/css/bootstrap.min.css";
import { initializeApp } from "firebase/app";
import { StrictMode, useEffect, useMemo, useState } from "react";
import { Link, useRoutes } from "react-router-dom";
import "./App.css";
import { Containers, LoginContainer } from "./components";
import AuthGuard from "./components/AuthGuard";
import LoginCallback from "./components/loginContainer/Callback";
import { uri } from "./config";
import { FirebaseContext } from "./contexts/FirebaseContext";
import { UserContext } from "./contexts/UserContext";
import GET_USER_DATA from "./queries/GET_USER_DATA";
import { theme } from "./theme";

const firebaseConfig = {
  apiKey: "AIzaSyAb2yKgDGJowDNhEugINyMyjqBry8c-nBI",
  authDomain: "freeing-returns.firebaseapp.com",
};

const httpLink = new HttpLink({
  //Todo: replace with environment variable
  uri: "http://localhost:5009/graphql",
});

const errorLink = onError(
  ({ graphQLErrors, networkError, forward, operation }) => {
    if (graphQLErrors) {
      console.log(graphQLErrors, "graphQLErrors in errorLink");
    }
    if (networkError) {
      console.log(networkError, "networkError in errorLink");
    }
    forward(operation);
  }
);

const authLink = setContext((_, { headers, ...context }) => {
  const idToken = context.idToken || localStorage.getItem("idToken");
  console.log(idToken, "idToken in authLink");
  return {
    headers: {
      ...headers,
      authorization: `Bearer ${idToken}`,
    },
    ...context,
  };
});

export default function App() {
  const [userContext, setUserContext] = useState();

  // Setup Apollo Client
  const apolloClient = new ApolloClient({
    link: from([authLink, errorLink, httpLink]),
    uri,
    cache: new InMemoryCache(),
  });

  // Define routes
  const routes = useRoutes([
    {
      path: "/",
      element: (
        <>
          Home <br /> <Link to="/secure-route">Secret sauce</Link>
        </>
      ),
    },
    {
      path: "/secure-route",
      element: (
        <AuthGuard>
          <>Lillii RNB's Secret Sauce</>
        </AuthGuard>
      ),
    },
    { path: "/transactions", element: <Containers /> },
    { path: "/login", element: <LoginContainer /> },
    { path: "/validated", element: <LoginCallback /> },
  ]);

  // Connect to Firebase
  const firebase = initializeApp(firebaseConfig);

  const [idToken, setIdToken] = useState(localStorage.getItem("idToken"));
  const [email, setEmail] = useState(localStorage.getItem("email"));
  useEffect(() => {
    const listenForLocalStorageChanges = window.addEventListener(
      "storage",
      () => {
        setIdToken(localStorage.getItem("idToken"));
        setEmail(localStorage.getItem("email"));
      },
      false
    );

    return () =>
      window.removeEventListener("storage", listenForLocalStorageChanges);
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
    // Move this to a utility function and reduce groups with it also
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

  return (
    <StrictMode>
      <StyledEngineProvider injectFirst>
        <ThemeProvider theme={theme}>
          <ApolloProvider client={apolloClient}>
            <FirebaseContext.Provider value={firebase}>
              <UserContext.Provider
                value={{ setUserContext, userContext, permissions }}
              >
                <CssBaseline />
                {routes}
              </UserContext.Provider>
            </FirebaseContext.Provider>
          </ApolloProvider>
        </ThemeProvider>
      </StyledEngineProvider>
    </StrictMode>
  );
}
