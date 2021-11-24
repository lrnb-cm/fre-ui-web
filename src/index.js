import { StrictMode } from "react";
import { render } from "react-dom";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import App from "./App";
import { GET_RATES } from "./components/container/queries/queries";

// setup apollo

const client = new ApolloClient({
  uri: "https://48p1r2roz4.sse.codesandbox.io",
  cache: new InMemoryCache()
});

const rootElement = document.getElementById("root");

function main(IndexComponent) {
  return (
    <StrictMode>
      <ApolloProvider client={client}>
        <IndexComponent />
      </ApolloProvider>
    </StrictMode>
  );
}

render(main(App), rootElement);

// @ts-ignore
if (module.hot) {
  // @ts-ignore
  module.hot.accept('./components', (event) => {
      const PageComponent = require('./components');
      render(main(PageComponent), appRootElement);
  });
}
