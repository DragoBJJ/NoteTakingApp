import React from 'react';
import PropTypes from 'prop-types';
import GlobalStyle from 'Theme/GlobalStyle';
import { ThemeProvider } from 'styled-components';
import { Theme } from 'Theme/Theme';

const MainTemplate = ({ children }) => (
  <div>
    <GlobalStyle />
    <ThemeProvider theme={Theme}>{children}</ThemeProvider>
  </div>
);

MainTemplate.propTypes = {
  children: PropTypes.element.isRequired,
};

export default MainTemplate;
