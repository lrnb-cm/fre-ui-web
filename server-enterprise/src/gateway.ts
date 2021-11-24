import { ApolloServer } from "apollo-server"
import { ApolloGateway } from "@apollo/gateway"
import waitOn from "wait-on"

const gateway = new ApolloGateway({
  // This entire `serviceList` is optional when running in managed federation
  // mode, using Apollo Graph Manager as the source of truth.  In production,
  // using a single source of truth to compose a schema is recommended and
  // prevents composition failures at runtime using schema validation using
  // real usage-based metrics.
  serviceList: [
    { name: "container", url: "http://localhost:5001/graphql" },
    { name: "login", url: "http://localhost:5002/graphql" }
  ],

  // Experimental: Enabling this enables the query plan view in Playground.
  __exposeQueryPlanExperimental: false,
});

const options = {
  resources: ['tcp:5001', 'tcp:5002']
};
  
  (async () => {
    waitOn(options);
    const server = new ApolloServer({
      gateway,
      playground: true,
      subscriptions: false
  });

  server.listen(5000).then(( { url }: any) => {
    console.log(`🚀 Server ready at ${url}`);
  });
})();