import React, { useEffect, useState } from 'react';
import Select, { SingleValue } from 'react-select';
import { useQuery } from '@apollo/client';

import { GET_COUNTRIES } from '../../api/';

import { Country } from '../../types/country';
import { SelectOption } from '../../types/selectOption';

import Layout from '../../layout';
import Loading from '../../components/Loading';
import RequestError from '../../components/RequestError';

import { Container, InputsContainer, InputWrapper, ErrorContainer, ErrorTitle, Input } from './styled';

export default function Validation() {
  const [selectedCountry, setSelectedCountry] = useState<Country | null>(() => {
    const country = window.localStorage.getItem("country");
    return country !== null
      ? JSON.parse(country)
      : null;
  });
  const [code, setCode] = useState<string>(() => {
    const code = window.localStorage.getItem("code");
    return code !== null
      ? code
      : '';
  });
  const [error, setError] = useState<boolean>(false);

  const { 
    data: countriesData, 
    loading: countriesLoading, 
    error: countriesError,
  } = useQuery(GET_COUNTRIES);

  useEffect(() => {
    if (selectedCountry) {
      window.localStorage.setItem("country", JSON.stringify(selectedCountry));
    }
  }, [selectedCountry]);

  useEffect(() => {
    window.localStorage.setItem("code", code);
  }, [code]);

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
