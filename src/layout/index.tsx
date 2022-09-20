import React, { ReactNode } from 'react';
import { ApolloError } from '@apollo/client';

import { RequestError } from 'components/RequestError';
import { Loading } from 'components/Loading';
import { Header } from './Header'

import { Container } from './styled'

// ----------------------------------------------------------------------

type Props = {
  children: ReactNode;
  isLoading: boolean;
  requestError?: ApolloError;
};

export function Layout({
  children,
  isLoading,
  requestError,
}: Props) {

  return (
    <>
      <Header />
      <Container>
        {children}
        {(isLoading) && (
          <Loading />
        )}
        {requestError && (
          <RequestError />
        )}
      </Container>
    </>
  );
}
