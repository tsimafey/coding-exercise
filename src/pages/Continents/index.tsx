import React, { useState } from 'react';
import Select, { SingleValue } from 'react-select'
import { useQuery } from '@apollo/client';

import { GET_CONTINENTS, GET_COUNTRIES } from '../../api';

import { Continent } from '../../types/continent';
import { Country } from '../../types/country';
import { SelectOption } from '../../types/selectOption';

import Layout from '../../layout';
import Loading from '../../components/Loading';

import { Container, SelectContainer, SelectWrapper, CountriesContainer, ContinentTitle } from './styled';

export default function Continents() {
  const [continent, setContinent] = useState<Continent | null>(null);

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

  if (continentsLoading || countriesLoading) {
    return <Loading />
  }

  return (
    <Layout>
      <Container>
        <SelectContainer>
          <SelectWrapper>
            <Select 
              options={continentsData.continents.map((c: Continent) => ({ value: c.code, label: c.name }))}
              onChange={(o: SingleValue<SelectOption>) => setContinent(o ? { code: o.value, name: o.label } : null)}
            />
          </SelectWrapper>
        </SelectContainer>
        {continent && (
          <CountriesContainer>
            <ContinentTitle>{continent.name}</ContinentTitle>
            {countriesData.countries.map((c: Country) => (
              <p key={c.name}>{c.name}</p>
            ))}
          </CountriesContainer>
        )}
      </Container>
    </Layout>
  );
}
