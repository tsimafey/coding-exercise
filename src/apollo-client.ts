// requests
import { ApolloClient, InMemoryCache } from '@apollo/client';

const uri = process.env.REACT_APP_API_URI

export const client = new ApolloClient({
  uri,
  cache: new InMemoryCache(),
});
