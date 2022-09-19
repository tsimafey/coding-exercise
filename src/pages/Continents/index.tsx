import React from 'react';
import Select, { SingleValue } from 'react-select'
import { useQuery } from '@apollo/client';

import { GET_CONTINENTS, GET_COUNTRIES } from 'api';

import useStateFromStorage from 'hooks/useStateFromStorage';

import { Continent } from 'types/continent';
import { Country } from 'types/country';
import { SelectOption } from 'types/selectOption';

import Layout from 'layout';
import Loading from 'components/Loading';
import RequestError from 'components/RequestError';

import { Container, SelectContainer, SelectWrapper, ContinentTitle, CountriesGrid, CountryTitle } from './styled';

export default function Continents() {
  const [continent, setContinent] = useStateFromStorage('continent');

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

  return (
    <Layout>
      <Container>
        {(continentsError) ? (
          <RequestError />
        ) : (
          <>
            <SelectContainer>
              <SelectWrapper>
                <Select 
                  options={continentsData?.continents.map((c: Continent) => ({ value: c.code, label: c.name }))}
                  value={continent ? { value: continent.code, label: continent.name } : null}
                  onChange={(o: SingleValue<SelectOption>) => setContinent(o ? { code: o.value, name: o.label } : null)}
                />
              </SelectWrapper>
            </SelectContainer>
            {continent && (
              <div>
                <ContinentTitle>{continent.name}</ContinentTitle>
                <CountriesGrid>
                  {countriesData && countriesData.countries.map((c: Country) => (
                    <CountryTitle key={c.name}>{c.name}</CountryTitle>
                  ))}
                </CountriesGrid>
              </div>
            )}
            {(continentsLoading || countriesLoading) && (
              <Loading />
            )}
            {(countriesError) && (
              <RequestError />
            )}
          </>
        )}
      </Container>
    </Layout>
  );
}
