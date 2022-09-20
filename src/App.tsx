import React from 'react';
import { RouterProvider } from 'react-router';
import { ApolloProvider } from '@apollo/client';
import { ThemeProvider } from 'styled-components';

import { GlobalStyles } from 'globalStyles';
import { lightTheme, darkTheme } from 'theme';
import { client } from 'apollo-client';
import { router } from 'router';

import { useDarkMode } from 'hooks/useDarkMode';

import { THEME } from 'constants/themes';

import { ThemeSwitchButton } from 'components/ThemeSwitchButton';

export function App() {
  const [theme, themeToggler] = useDarkMode();

  const themeMode = theme === THEME.LIGHT ? lightTheme : darkTheme;
  
  return (
    <ApolloProvider client={client}>
      <ThemeProvider theme={themeMode}>
        <GlobalStyles/>
        <RouterProvider router={router} />
        <ThemeSwitchButton toggleTheme={themeToggler} />
      </ThemeProvider>
    </ApolloProvider>
  );
}
