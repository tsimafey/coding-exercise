import React from 'react';
import { RouterProvider } from 'react-router';
import { ApolloProvider } from '@apollo/client';

import client from './apollo-client';
import router from './router';

export default function App() {
  return (
    <ApolloProvider client={client}>
      <RouterProvider router={router} />
    </ApolloProvider>
  );
}
