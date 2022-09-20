import styled from 'styled-components';

export const SelectContainer = styled.div`
  flex-shrink: 1;
  margin: 1rem 0;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const SelectWrapper = styled.div`
  min-width: 20rem;
`

export const ContinentTitle = styled.h2`
  font-size: 2rem;
`

export const CountriesGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: repeat(20, 1fr)
`

export const CountryTitle = styled.p`
  font-size: 1rem;
  margin: 0.5rem 0;
`
