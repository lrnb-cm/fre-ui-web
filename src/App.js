import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
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

export default function App() {
  const [userContext, setUserContext] = useState();

  // Setup Apollo Client
  const apolloClient = new ApolloClient({
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

  // When userContext changes, load user data if it does not exist
  useEffect(() => {
    const idToken = localStorage.getItem("idToken");
    const email = localStorage.getItem("email");
    if (!idToken || !email || userContext) return;

    console.log("ran userContext changed in App.js");
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

    const idToken = localStorage.getItem("idToken");
    if (idToken) {
      //Add the GCP Identity Platform / Firebase idToken on Apollo context
      setContext(() => ({
        headers: { idToken },
      }));
    }

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
  }, [userContext]);

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
