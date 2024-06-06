import { ApolloProvider as Provider } from "@apollo/client";
import apolloClient from "../../utils/apollo";

export default function ApolloProvider({ children }) {
  return <Provider client={apolloClient}>{children}</Provider>;
}
