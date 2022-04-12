import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import { BrowserRouter as Router, useRoutes } from "react-router-dom";
import { Containers, LoginContainer } from "./components";
import LoginCallback from "./components/loginContainer/Callback";
import { StrictMode } from "react";
import { ThemeProvider, StyledEngineProvider } from "@mui/material/styles";
import { uri } from "./config";
import { theme } from "./theme";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { CssBaseline } from "@mui/material";
import { FirebaseContext } from "./contexts/FirebaseContext";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAb2yKgDGJowDNhEugINyMyjqBry8c-nBI",
  authDomain: "freeing-returns.firebaseapp.com",
};

export default function App() {
  // @ts-ignore
  if (module.hot) {
    // @ts-ignore
    module.hot.accept("./components", (e) => {
      const PageComponent = require("./components");
      // @ts-ignore
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
      { path: "/transactions", element: <Containers /> },
      { path: "/", element: <LoginContainer /> },
      { path: "/validated", element: <LoginCallback /> },
    ]);
    return routes;
  };

  const firebase = initializeApp(firebaseConfig);
  return (
    <StrictMode>
      <StyledEngineProvider injectFirst>
        <ThemeProvider theme={theme}>
          <ApolloProvider client={client}>
            <FirebaseContext.Provider value={firebase}>
              <CssBaseline />
              <Router>
                <Apps />
              </Router>
            </FirebaseContext.Provider>
          </ApolloProvider>
        </ThemeProvider>
      </StyledEngineProvider>
    </StrictMode>
  );
}
