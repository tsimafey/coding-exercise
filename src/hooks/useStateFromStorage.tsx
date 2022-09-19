import { useEffect, useState } from 'react';

export default function useStateFromStorage(localStorageKey: string, isString = false) {

  const getValueFromType = (value: string) => isString ? value : JSON.parse(value);

  const [stateValue, setStateValue] = useState(() => {
    const value = window.localStorage.getItem(localStorageKey);
    return value !== null
      ? getValueFromType(value)
      : null;
  });

  useEffect(() => {
    if (isString) {
      window.localStorage.setItem(localStorageKey, stateValue);
    } else {
      if (stateValue) {
        window.localStorage.setItem(localStorageKey, JSON.stringify(stateValue));
      }
    }
  }, [stateValue]);

  return [stateValue, setStateValue];
}