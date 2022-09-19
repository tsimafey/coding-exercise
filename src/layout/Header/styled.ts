import styled from 'styled-components';

export const Container = styled.div`
  border-bottom: 1px solid #ccc;
  padding: 0.5em 1em;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const Identity = styled.a`
  font-size: 2rem;

  &:hover {
    color: #EC6333; 
  }
`

export const NavigationItem = styled.li`
  display: inline-block;
  margin: 1.4rem 1rem 1rem 1rem;
`

export const NavigationItemLink = styled.a`
  &:hover {
    color: #EC6333; 
  }
`