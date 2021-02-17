import React from 'react';
import withContext from 'hoc/withContext';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Button } from 'components/atoms/Button/Button';
import UserTemplate from 'Templates/UserTemplate';
import Header from 'components/atoms/Heading/Heading';
import Paragraph from 'components/atoms/Paragraph/Paragraph';
import LinkIcon from 'assets/icons/link.svg';

const NavLink = styled(Link)`
  text-decoration: none;
`;

const Wrapper = styled.div`
  max-width: 660px;
  display: grid;
  grid-gap: 20px;
  margin-left: 5vw;
`;

const WrapperHeader = styled.div`
  position: relative;
  margin: 0 0 5vh 5vw;
  max-width: 660px;
  text-align: center;

  @media screen and (max-width: 1100px) {
    margin: 0 0 5vh 0vw;
  }
`;

const StyledHeader = styled(Header)`
  @media screen and (max-width: 1060px) {
    max-width: 500px;
  }
  @media screen and (max-width: 860px) {
    max-width: 500px;
    font-size: 35px;
  }
  @media screen and (max-width: 760px) {
    max-width: 400px;
  }
  @media screen and (max-width: 620px) {
    max-width: 300px;
    font-size: 30px;
  }
  @media screen and (max-width: 540px) {
    max-width: 250px;
  }
`;

const StyledAvatar = styled.img`
  position: absolute;
  width: 120px;
  height: 120px;
  border: 3px solid ${({ theme }) => theme.twitters};
  border-radius: 50%;
  top: 0;
  right: -10vw;
  @media screen and (max-width: 1060px) {
    width: 100px;
    height: 100px;
    right: 0;
  }
  @media screen and (max-width: 660px) {
    width: 80px;
    height: 80px;
  }
`;

const StyledParagraph = styled(Paragraph)`
  font-size: ${({ theme }) => theme.fontSize.l};
  font-weight: ${({ theme }) => theme.light};
  letter-spacing: 1px;
  line-height: 30px;

  @media screen and (max-width: 860px) {
    font-size: ${({ theme }) => theme.fontSize.m};
  }
`;

const StyledLink = styled.a`
  position: absolute;
  top: 0%;
  right: -10vw;
  width: 68px;
  height: 68px;
  border-radius: 50px;
  background: hsl(106, 47%, 64%) url(${LinkIcon}) no-repeat;
  background-size: 60%;
  background-position: 50%;
`;

const DetailsTemplate = ({ pageContext, title, content, twitterName, articleUrl }) => {
  return (
    <UserTemplate pageType={pageContext}>
      <WrapperHeader>
        <StyledHeader big>{title}</StyledHeader>
        {pageContext === 'twitters' && (
          <StyledAvatar src={`https://unavatar.now.sh/facebook/${twitterName}`} />
        )}
        {pageContext === 'articles' && <StyledLink href={articleUrl} />}
      </WrapperHeader>
      <Wrapper>
        <StyledParagraph>{content}</StyledParagraph>
        <NavLink to={`/${pageContext}`}>
          <Button secondary activeColor={pageContext}>
            Go Back
          </Button>
        </NavLink>
      </Wrapper>
    </UserTemplate>
  );
};

export default withContext(DetailsTemplate);
