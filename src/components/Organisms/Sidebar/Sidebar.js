import React from 'react';
import withContext from 'hoc/withContext';

import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import Mathilda1 from 'assets/images/Mathilda1.png';
import styled from 'styled-components';
import ButtonIcon from 'components/atoms/ButtonIcon/ButtonIcon';
import bulbIcon from 'assets/icons/bulb.svg';
import logoutIcon from 'assets/icons/logout.svg';
import penIcon from 'assets/icons/pen.svg';
import twitterIcon from 'assets/icons/twitter.svg';

const Wrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 150px;
  padding: 20px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  background-color: ${({ activecolor, theme }) => theme[activecolor]};
  transition: all 0.2s ease-in-out;
`;

const IconWrapper = styled.div`
  display: grid;
  grid-gap: 15px;
`;

const StyledLogoLink = styled.img`
  display: flex;
  width: 150px;
  height: 150px;
  border-radius: 50%;
  background-image: url(${Mathilda1});
  background-size: cover;
  background-position: center;
  margin-bottom: 10vh;
`;

const StyledLogoutButton = styled(ButtonIcon)`
  margin-top: auto;
`;

const Sidebar = ({ pageContext }) => (
  <Wrapper activecolor={pageContext}>
    <StyledLogoLink as={NavLink} to="/" />
    <IconWrapper>
      <ButtonIcon as={NavLink} to="/notes" icon={penIcon} activeClass="active" />
      <ButtonIcon as={NavLink} to="/twitters" icon={twitterIcon} activeClass="active" />
      <ButtonIcon as={NavLink} to="/articles" icon={bulbIcon} activeClass="active" />
    </IconWrapper>
    <StyledLogoutButton as={NavLink} to="/login" icon={logoutIcon} />
  </Wrapper>
);

Sidebar.propTypes = {
  pageContext: PropTypes.oneOf(['notes', 'twitters', 'articles']),
};

Sidebar.defaultProps = {
  pageContext: 'notes',
};

export default withContext(Sidebar);
