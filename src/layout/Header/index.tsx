import React from 'react';
import { ROUTES } from 'constants/routes';

import { Container, Identity, NavigationWrapper, NavigationItem, NavigationItemLink } from './styled';

const LINKS = ['continents', 'validation']

export function Header() {
  return (
    <Container>
      <Identity to={ROUTES.CONTINENTS}>Coding exercise</Identity>
      <nav>
        <NavigationWrapper>
          {LINKS.map((link) => (
            <NavigationItem key={link}>
              <NavigationItemLink to={`/${link}`}>
                {`${link.charAt(0).toUpperCase()}${link.slice(1)}`}
              </NavigationItemLink>
            </NavigationItem>
          ))}
        </NavigationWrapper>
      </nav>
    </Container>
  );
}
