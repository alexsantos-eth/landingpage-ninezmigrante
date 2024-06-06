import { ApolloClient, InMemoryCache } from "@apollo/client";

const apolloClient = new ApolloClient({
  uri: "https://ninezmigrante-api-kg336.ondigitalocean.app/graphql",
  cache: new InMemoryCache(),
});

export default apolloClient;
