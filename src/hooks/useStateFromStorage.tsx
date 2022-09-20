import { useEffect, useState } from 'react';

export function useStateFromStorage(localStorageKey: string) {
  const getValue = (value: string) => {
    try {
      return JSON.parse(value);
    } catch (e) {
      return value;
    }
  } 

  const [stateValue, setStateValue] = useState(() => {
    const value = window.localStorage.getItem(localStorageKey);
    return value !== null
      ? getValue(value)
      : '';
  });

  useEffect(() => {
    if (stateValue || stateValue === '') {
      window.localStorage.setItem(localStorageKey, JSON.stringify(stateValue));
    }
  }, [stateValue]);

  return [stateValue, setStateValue];
}
