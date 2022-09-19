import React, { useEffect, useState } from 'react';
import Select, { SingleValue } from 'react-select';
import { useQuery } from '@apollo/client';

import { GET_COUNTRIES } from 'api/';

import { Country } from 'types/country';
import { SelectOption } from 'types/selectOption';

import useStateFromStorage from 'hooks/useStateFromStorage';

import Layout from 'layout';
import Loading from 'components/Loading';
import RequestError from 'components/RequestError';

import { Container, InputsContainer, InputWrapper, ErrorContainer, ErrorTitle, Input } from './styled';

export default function Validation() {
  const [selectedCountry, setSelectedCountry] = useStateFromStorage('country');
  const [code, setCode] = useStateFromStorage('code', true);
  const [error, setError] = useState<boolean>(false);

  const { 
    data: countriesData, 
    loading: countriesLoading, 
    error: countriesError,
  } = useQuery(GET_COUNTRIES);

  useEffect(() => {
    if (selectedCountry && code && selectedCountry?.currency !== code.toUpperCase()) {
      setError(true)
    } else {
      setError(false);
    }
  }, [selectedCountry, code]);
      
  return (
    <Layout>
      <Container>
        <InputsContainer>
          <InputWrapper>
            <Select 
              options={countriesData?.countries.map((c: Country) => ({ value: c.currency, label: c.name }))}
              value={selectedCountry ? { value: selectedCountry.currency, label: selectedCountry.name } : null}
              onChange={(o: SingleValue<SelectOption>) => setSelectedCountry(o ? { currency: o.value, name: o.label } : null)}
            />
          </InputWrapper>
          <InputWrapper>
            <Input type="text" value={code} onChange={(e) => setCode(e.target.value.toUpperCase())} />
          </InputWrapper>
        </InputsContainer>
        {(countriesLoading) && (
          <Loading />
        )}
        {error && (
          <ErrorContainer>
            <ErrorTitle>Currency does not match the country selected. Please correct</ErrorTitle>
          </ErrorContainer>
        )}
        {countriesError && (
          <RequestError />
        )}
      </Container>
    </Layout>
  );
}
