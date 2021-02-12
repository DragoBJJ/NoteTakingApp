import React from 'components/atoms/Heading/node_modules/react';
import { render } from 'components/atoms/Heading/node_modules/@testing-library/react';
import { ThemeProvider } from 'components/atoms/Heading/node_modules/styled-components';
import theme from 'components/atoms/Heading/node_modules/theme/mainTheme';
import Heading from './Heading';

describe('Heading Component', () => {
  it('Renders children text', () => {
    const { getByText } = render(
      <ThemeProvider theme={theme}>
        <Heading>Hello</Heading>
      </ThemeProvider>,
    );
    getByText('Hello');
  });
});
