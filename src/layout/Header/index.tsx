import React from 'react';

import { Container, Identity, NavigationItem, NavigationItemLink } from './styled';

const LINKS = ['Continents', 'Validation']

function Header() {
  return (
    <Container>
        <Identity href="#">Coding exercise</Identity>
            <nav>
                <ul>
                    {LINKS.map((l) => (
                        <NavigationItem key={l}><NavigationItemLink href="#">{l}</NavigationItemLink></NavigationItem>
                    ))}
                </ul>
            </nav>
        </Container>
  );
}

export default Header;