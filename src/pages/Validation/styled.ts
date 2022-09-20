import styled from 'styled-components';

export const InputsContainer = styled.div`
  flex-shrink: 1;
  margin: 1rem 0;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const InputWrapper = styled.div`
  padding: 0 2rem;
  min-width: 20rem;
`

export const Input = styled.input`
  border-color: hsl(0, 0%, 80%);
  border-radius: 4px;
  border-style: solid;
  border-width: 1px;
  height: 36px;
  width: 100%;
  padding-left: 1rem;
  font-size: 1rem;
`

export const ErrorContainer = styled.div`
  display: flex;
  justify-content: center;
`

export const ErrorTitle = styled.h2`
  font-size: 2rem;
  color: red;
`
