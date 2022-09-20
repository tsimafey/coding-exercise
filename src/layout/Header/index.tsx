import React from 'react';
import { ROUTES } from 'constants/routes';

import { Container, Identity, NavigationItem, NavigationItemLink } from './styled';

const LINKS = ['continents', 'validation']

export function Header() {
  return (
    <Container>
      <Identity to={ROUTES.CONTINENTS}>Coding exercise</Identity>
      <nav>
        <ul>
          {LINKS.map((link) => (
            <NavigationItem key={link}>
              <NavigationItemLink to={`/${link}`}>
                {`${link.charAt(0).toUpperCase()}${link.slice(1)}`}
              </NavigationItemLink>
            </NavigationItem>
          ))}
        </ul>
      </nav>
    </Container>
  );
}
