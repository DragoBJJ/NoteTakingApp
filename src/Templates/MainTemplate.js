import React, { useState, useEffect } from 'react';
import { PageContext } from 'context/context';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import GlobalStyle from 'Theme/GlobalStyle';
import { ThemeProvider } from 'styled-components';
import { Theme } from 'Theme/Theme';

const MainTemplate = ({ children, location }) => {
  const [pageType, setPageType] = useState('notes');
  const { pathname } = location;

  useEffect(() => {
    const pageTypes = ['twitters', 'articles', 'notes', 'login', 'register'];
    const [currentPage] = pageTypes.filter((page) => pathname.includes(page));
    setPageType(currentPage);
  }, [pathname]);

  return (
    <>
      <PageContext.Provider value={pageType}>
        <GlobalStyle pageType={pageType} />
        <ThemeProvider theme={Theme}>{children}</ThemeProvider>
      </PageContext.Provider>
    </>
  );
};

MainTemplate.propTypes = {
  children: PropTypes.element.isRequired,
};

export default withRouter(MainTemplate);
