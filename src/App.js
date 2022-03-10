import { StrictMode } from "react";
import { BrowserRouter as Router, useRoutes } from 'react-router-dom';
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import { uri } from "./config";
import LoginCallback from "./components/loginContainer/Callback";
import { Containers, LoginContainer } from "./components";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { ThemeProvider, StyledEngineProvider, createTheme } from '@mui/material/styles';

import makeStyles from '@mui/styles/makeStyles';

const theme = createTheme();

const useStyles = makeStyles((theme) => {
  root: {
    // some CSS that access to theme
  }
});


export default function App() {
  const classes = useStyles()
  
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
    cache: new InMemoryCache()
  });
  const Apps = () => {
    let routes = useRoutes([
      { path: "/transactions", element: <Containers /> },
      { path: "/", element: <LoginContainer /> },
      { path: "/validated", element: <LoginCallback /> }
    ]);
    return routes;
  };

  return (
    <div className="App">
      <h2>Welcome to LilliiRnB's Enterprise App!</h2>
      <StrictMode>
      <StyledEngineProvider injectFirst>
        <ThemeProvider theme={theme}>
          <ApolloProvider client={client}>
            <Router>
              <Apps /> 
            </Router>
          </ApolloProvider>
       </ThemeProvider>
      </StyledEngineProvider>
      </StrictMode>
    </div>
  );
}
