import React, { useState } from 'react';
import { RouterProvider } from 'react-router';
import { ApolloProvider } from '@apollo/client';
import { ThemeProvider } from 'styled-components';

import { GlobalStyles } from 'globalStyles';
import { lightTheme, darkTheme } from 'theme';
import { client } from 'apollo-client';
import { router } from 'router';

import { THEME } from 'constants/themes';

import { ThemeSwitchButton } from 'components/ThemeSwitchButton';

export function App() {
  const [theme, setTheme] = useState(THEME.LIGHT);

  const themeToggler = () => {
    theme === THEME.LIGHT ? setTheme(THEME.DARK) : setTheme(THEME.LIGHT)
  };
  
  return (
    <ApolloProvider client={client}>
      <ThemeProvider theme={theme === THEME.LIGHT ? lightTheme : darkTheme}>
        <GlobalStyles/>
        <RouterProvider router={router} />
        <ThemeSwitchButton toggleTheme={themeToggler} />
      </ThemeProvider>
    </ApolloProvider>
  );
}
