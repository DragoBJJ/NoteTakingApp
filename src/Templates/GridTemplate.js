import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';

import withContext from 'hoc/withContext';
import UserTemplate from 'Templates/UserTemplate';
import PropsTypes from 'prop-types';
import styled from 'styled-components';
import Input from 'components/atoms/Input/Input';
import Heading from 'components/atoms/Heading/Heading';
import { Button } from 'components/atoms/Button/Button';
import NewItemBar from 'components/Organisms/NewItemBar/NewItemBar';

const Wrapper = styled.div`
  padding: 25px 150px 25px 70px;
`;

const HeroWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 85px;

  @media screen and (max-width: 1200px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media screen and (max-width: 860px) {
    grid-template-columns: 1fr;
  }
`;

const WrapperHeading = styled.div`
  margin: 25px 0 50px;
`;
const StyledHeading = styled(Heading)`
  margin: 25px 0 0 0;
  text-transform: capitalize;
`;

const StyledButtonIcon = styled(Button)`
  position: fixed;
  height: 60px;
  width: 60px;
  font-size: 40px;
  color: ${({ theme, activeColor }) => theme[activeColor]};
  z-index: 2;
  background-color: #fff;
  right: 40px;
  bottom: 40px;
  border: 2px solid ${({ theme, activeColor }) => theme[activeColor]};
  border-radius: 50%;
  transition: all 0.2s ease-in-out;

  &:hover {
    background-color: ${({ theme, activeColor }) => theme[activeColor]};
    color: #fff;
  }
`;

const GridTemplate = ({ children, pageContext, currentState = [] }) => {
  const [isVisible, setVisible] = useState(false);
  const [inputValue, setInputValue] = useState('');

  // Nasz wyszukany element //
  const [searchItems, setSearchItems] = useState([]);

  const handleVisible = () => {
    setVisible(!isVisible);
  };

  const visibleInput = ({ target }) => {
    setInputValue(target.value);
  };

  const searchCurrentItem = () => {
    const currentValue = currentState.filter((item) =>
      item.title.toLowerCase().includes(inputValue.toLowerCase()),
    );
    setSearchItems(currentValue);
  };

  useEffect(() => {
    searchCurrentItem();
  }, [inputValue]);

  return (
    <UserTemplate>
      {console.log(searchItems)}
      <Wrapper>
        <WrapperHeading>
          <Input activeColor={pageContext} onChange={visibleInput} search placeholder="Search" />
          <StyledHeading big>{pageContext}</StyledHeading>
        </WrapperHeading>
        <HeroWrapper>{children}</HeroWrapper>
        <StyledButtonIcon onClick={handleVisible} activeColor={pageContext}>
          {!isVisible ? '+' : '-'}
        </StyledButtonIcon>
        <NewItemBar handleVisible={handleVisible} isVisible={isVisible} />
      </Wrapper>
    </UserTemplate>
  );
};
GridTemplate.propsType = {
  children: PropsTypes.arrayOf(PropsTypes.object),
  pageContext: PropsTypes.oneOf(['notes', 'twitters', 'articles']),
};

GridTemplate.defaultProps = {
  pageContext: 'notes',
};

const mapStateToProps = (state, { pageContext }) => ({
  currentState: state[pageContext],
});

export default withContext(connect(mapStateToProps, null)(GridTemplate));
