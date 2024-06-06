// REACT
import React from "react";
import { BrowserRouter } from "react-router-dom";

// PROVIDERS
import RouterProvider from "../../providers/router";
import { ChakraProvider } from "@chakra-ui/react";

// UTILS
import { theme } from "../../utils/theme";

// COMPONENTS
import Layout from "../layout";
import ApolloProvider from "../../providers/apollo";

const App = () => {
  return (
    <BrowserRouter>
      <ApolloProvider>
        <ChakraProvider theme={theme}>
          <Layout>
            <RouterProvider />
          </Layout>
        </ChakraProvider>
      </ApolloProvider>
    </BrowserRouter>
  );
};

export default App;
