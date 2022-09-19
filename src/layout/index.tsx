import React, { ReactNode } from 'react';

import Header from './Header'

import { Container } from './styled'

// ----------------------------------------------------------------------

type Props = {
  children: ReactNode;
};

export default function Layout({
  children,
}: Props) {

  return (
    <>
      <Header />
      <Container>
        {children}
      </Container>
    </>
  );
}