import React, { FormEvent, useEffect, useState } from 'react';
import Select, { SingleValue } from 'react-select';
import { useQuery } from '@apollo/client';

import { GET_COUNTRIES } from 'api/';

import { Country } from 'types/country';
import { SelectOption } from 'types/selectOption';
import { LOCAL_STORAGE_KEY } from 'constants/localStorageKeys';

import { useStateFromStorage } from 'hooks/useStateFromStorage';

import { Layout } from 'layout';

import { InputsContainer, InputWrapper, ErrorContainer, ErrorTitle, Input } from './styled';

export function Validation() {
  const [selectedCountry, setSelectedCountry] = useStateFromStorage(LOCAL_STORAGE_KEY.COUNTRY);
  const [code, setCode] = useStateFromStorage(LOCAL_STORAGE_KEY.CODE);
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

  const handleSelectChange = (option: SingleValue<SelectOption>) => setSelectedCountry(
    option 
      ? { currency: option.value, name: option.label } 
      : null
  );

  const handleTextChange = (e: FormEvent<HTMLInputElement>) => setCode(e.currentTarget.value.toUpperCase())
      
  return (
    <Layout isLoading={countriesLoading} requestError={countriesError}>
      <InputsContainer>
        <InputWrapper>
          <Select 
            options={countriesData?.countries.map((country: Country) => ({ value: country.currency, label: country.name }))}
            value={selectedCountry ? { value: selectedCountry.currency, label: selectedCountry.name } : null}
            onChange={handleSelectChange}
          />
        </InputWrapper>
        <InputWrapper>
          <Input type="text" value={code} onChange={handleTextChange} />
        </InputWrapper>
      </InputsContainer>
      {error && (
        <ErrorContainer>
          <ErrorTitle>Currency does not match the country selected. Please correct</ErrorTitle>
        </ErrorContainer>
      )}
    </Layout>
  );
}
