import styled from 'styled-components';

import { NavLink } from 'react-router-dom'

export const Container = styled.div`
  border-bottom: 1px solid #ccc;
  padding: 0.5rem 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 480px) {
    flex-direction: column;
  }
`

export const Identity = styled(NavLink)`
  font-size: 2rem;
  white-space: nowrap;

  &:hover {
    color: #EC6333; 
  }

  @media (max-width: 768px) {
    font-size: 1.6rem;
  }
`

export const NavigationWrapper = styled.ul`
  padding: 0;
`

export const NavigationItem = styled.li`
  display: inline-block;
  margin: 1.4rem 1rem 1rem 1rem;
`

export const NavigationItemLink = styled(NavLink)`
  &:hover {
    color: #EC6333; 
  }
`
