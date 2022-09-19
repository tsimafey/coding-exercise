import React from 'react';
import { ROUTES } from '../../router';

import { Container, Identity, NavigationItem, NavigationItemLink } from './styled';

const LINKS = ['continents', 'validation']

export default function Header() {
    return (
        <Container>
            <Identity to={ROUTES.CONTINENTS}>Coding exercise</Identity>
            <nav>
                <ul>
                    {LINKS.map((l) => (
                        <NavigationItem key={l}><NavigationItemLink to={`/${l}`}>{`${l.charAt(0).toUpperCase()}${l.slice(1)}`}</NavigationItemLink></NavigationItem>
                    ))}
                </ul>
            </nav>
        </Container>
    );
}
