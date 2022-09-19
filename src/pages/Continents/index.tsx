import React, { useState } from 'react';
import Select, { SingleValue } from 'react-select'
import { useQuery, gql } from '@apollo/client';

import Layout from '../../layout';

import { Container, SelectContainer, SelectWrapper, CountriesContainer, ContinentTitle } from './styled';
import Loading from '../../components/Loading';
import { Continent } from '../../types/continent';
import { SelectOption } from '../../types/selectOption';

const GET_CONTINENTS = gql`
  query GET_CONTINENTS {
    continents {
        code,
      name
    }
  }
`;

const GET_COUNTRIES = gql`
  query GET_COUNTRIES($filter: CountryFilterInput!) {
    countries(filter: $filter) {
      name
    }
  }
`;

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

    console.log(countriesData)

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
                    {countriesData.countries.map((c: Continent) => (
                        <p key={c.name}>{c.name}</p>
                    ))}
                </CountriesContainer>
            )}
            </Container>
        </Layout>
    );
}
