import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import GlobalStyles from '../src/Theme/GlobalStyle';
import { ThemeProvider } from 'styled-components';
import { Theme } from '../src/Theme/Theme';

export const decorators = [
  (Story) => (
    <>
      <GlobalStyles />
      <ThemeProvider theme={Theme}>
        <MemoryRouter>
          <Story />
        </MemoryRouter>
      </ThemeProvider>
    </>
  ),
];

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
};
