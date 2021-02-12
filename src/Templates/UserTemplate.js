import React from 'react';
import PropsTypes from 'prop-types';
import Sidebar from 'components/Organisms/Sidebar/Sidebar';

const UserTemplate = ({ children, pageType }) => (
  <>
    <Sidebar pageType={pageType} />
    {children}
  </>
);

UserTemplate.propsType = {
  children: PropsTypes.oneOfType([PropsTypes.element, PropsTypes.node]),
  pageType: PropsTypes.oneOf(['notes', 'twitters', 'articles']),
};

UserTemplate.defaultProps = {
  pageType: 'notes',
};

export default UserTemplate;
