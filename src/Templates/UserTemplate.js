import React from 'react';
import PropsTypes from 'prop-types';
import Sidebar from 'components/Organisms/Sidebar/Sidebar';

const UserTemplate = ({ children }) => (
  <>
    <Sidebar />
    {children}
  </>
);

UserTemplate.propsType = {
  children: PropsTypes.oneOfType([PropsTypes.element, PropsTypes.node]),
};

export default UserTemplate;
