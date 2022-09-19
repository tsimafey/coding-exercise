// requests
import { ApolloClient, InMemoryCache } from "@apollo/client";

const uri = 'https://countries.trevorblades.com/'

const client = new ApolloClient({
  uri,
  cache: new InMemoryCache(),
});

export default client;