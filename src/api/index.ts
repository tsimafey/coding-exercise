import { gql } from '@apollo/client';

export const GET_CONTINENTS = gql`
  query GET_CONTINENTS {
    continents {
      code,
      name
    }
  }
`;

export const GET_COUNTRIES = gql`
  query GET_COUNTRIES($filter: CountryFilterInput) {
    countries(filter: $filter) {
      code,
      name,
      currency
    }
  }
`;