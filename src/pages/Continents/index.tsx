import React from 'react';
import Select, { SingleValue } from 'react-select'
import { useQuery } from '@apollo/client';

import { GET_CONTINENTS, GET_COUNTRIES } from 'api';

import { useStateFromStorage } from 'hooks/useStateFromStorage';

import { Continent } from 'types/continent';
import { Country } from 'types/country';
import { SelectOption } from 'types/selectOption';
import { LOCAL_STORAGE_KEY } from 'constants/localStorageKeys';

import { Layout } from 'layout';
import { RequestError } from 'components/RequestError';

import { SelectContainer, SelectWrapper, ContinentTitle, CountriesGrid, CountryTitle } from './styled';

export function Continents() {
  const [continent, setContinent] = useStateFromStorage(LOCAL_STORAGE_KEY.CONTINENT);

  const { 
    data: continentsData, 
    loading: continentsLoading, 
    error: continentsError,
  } = useQuery(GET_CONTINENTS);

  const {
    data: countriesData, 
    loading: countriesLoading, 
    error: countriesError 
  } = useQuery(GET_COUNTRIES, {
    variables: {
      filter: {
        continent: {
          eq: continent?.code,
        }
      }
    },
    skip: !continent
  });

  const handleChange = (option: SingleValue<SelectOption>) => setContinent(option ? { code: option.value, name: option.label } : null)

  return (
    <Layout isLoading={(continentsLoading || countriesLoading)} requestError={countriesError}>
      {(continentsError) ? (
        <RequestError />
      ) : (
        <>
          <SelectContainer>
            <SelectWrapper>
              <Select 
                options={continentsData?.continents.map((continent: Continent) => ({ value: continent.code, label: continent.name }))}
                value={continent ? { value: continent.code, label: continent.name } : null}
                onChange={handleChange}
              />
            </SelectWrapper>
          </SelectContainer>
          {continent && (
            <div>
              <ContinentTitle>{continent.name}</ContinentTitle>
              <CountriesGrid>
                {countriesData && countriesData.countries.map((country: Country) => (
                  <CountryTitle key={country.name}>{country.name}</CountryTitle>
                ))}
              </CountriesGrid>
            </div>
          )}
        </>
      )}
    </Layout>
  );
}
