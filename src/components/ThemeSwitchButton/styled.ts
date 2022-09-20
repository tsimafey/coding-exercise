import styled from 'styled-components';

export const Button = styled.button`
  background: ${({ theme }) => theme.background};
  border: 2px solid ${({ theme }) => theme.toggleBorder};
  color: ${({ theme }) => theme.text};
  border-radius: 30px;
  cursor: pointer;
  font-size:0.8rem;
  position: fixed;
  bottom: 2rem;
  right: 2rem;
  width: 8rem;
  height: 2.5rem;
`