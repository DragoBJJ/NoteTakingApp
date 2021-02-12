import React from 'react';
import UserTemplate from 'Templates/UserTemplate';
import PropsTypes from 'prop-types';
import styled from 'styled-components';
import Input from 'components/atoms/Input/Input';
import Heading from 'components/atoms/Heading/Heading';
import Paragraph from 'components/atoms/Paragraph/Paragraph';

const Wrapper = styled.div`
  padding: 25px 150px 25px 70px;
`;

const HeroWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 85px;
`;

const WrapperHeading = styled.div`
  margin: 25px 0 50px;
`;
const StyledHeading = styled(Heading)`
  margin: 25px 0 0 0;
  text-transform: capitalize;
`;

const StyledParagraph = styled(Paragraph)`
  margin: 10px 0 0 0;
  font-weight: ${({ theme }) => theme.bold};
  color: ${({ activeColor, theme }) => theme[activeColor]};
`;

const GridTemplate = ({ children, pageType }) => (
  <UserTemplate pageType={pageType}>
    <Wrapper>
      <WrapperHeading>
        <Input activeColor={pageType} search placeholder="Search" />
        <StyledHeading big>{pageType}</StyledHeading>
        <StyledParagraph activeColor={pageType}>3 Days</StyledParagraph>
      </WrapperHeading>
      <HeroWrapper>{children}</HeroWrapper>
    </Wrapper>
  </UserTemplate>
);

GridTemplate.propsType = {
  children: PropsTypes.arrayOf(PropsTypes.object).isRequired,
  pageType: PropsTypes.oneOf(['notes', 'twitters', 'articles']),
};

GridTemplate.defaultProps = {
  pageType: 'notes',
};

export default GridTemplate;
