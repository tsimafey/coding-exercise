import { useEffect, useState } from 'react';

import { THEME } from 'constants/themes';

export function useDarkMode(): [string, () => void] {
  const [theme, setTheme] = useState(THEME.LIGHT);

  const setMode = (mode: string) => {
    window.localStorage.setItem('theme', mode);
    setTheme(mode);
  };

  const themeToggler = () => {
    theme === THEME.LIGHT ? setMode(THEME.DARK) : setMode(THEME.LIGHT);
  };

  useEffect(() => {
    const localTheme = window.localStorage.getItem('theme');
    localTheme && setTheme(localTheme);
  }, []);

  return [theme, themeToggler];
}