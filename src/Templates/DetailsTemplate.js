import React from 'react';
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
`;
const StyledAvatar = styled.img`
  position: absolute;
  width: 120px;
  height: 120px;
  border: 3px solid ${({ theme }) => theme.twitters};
  border-radius: 50%;
  top: 0;
  right: -10vw;
`;

const StyledParagraph = styled(Paragraph)`
  font-size: ${({ theme }) => theme.fontSize.l};
  font-weight: ${({ theme }) => theme.light};
  letter-spacing: 1px;
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

const DateInfo = styled(Paragraph)`
  margin: 0;
  font-weight: ${({ theme }) => theme.bold};
  font-size: ${({ theme }) => theme.fontSize.m};
  color: ${({ activeColor, theme }) => theme[activeColor]};
  text-align: left;
`;

const DetailsTemplate = ({ pageType, title, content, twitterName, articleUrl, created }) => (
  <UserTemplate pageType={pageType}>
    <WrapperHeader>
      <Header big>{title}</Header>
      <DateInfo activeColor={pageType}>{created}</DateInfo>
      {pageType === 'twitters' && (
        <StyledAvatar src={`https://unavatar.now.sh/facebook/${twitterName}`} />
      )}
      {pageType === 'articles' && <StyledLink href={articleUrl} />}
    </WrapperHeader>
    <Wrapper>
      <StyledParagraph>{content}</StyledParagraph>
      <NavLink to={`/${pageType}`}>
        <Button secondary activeColor={pageType}>
          Go Back
        </Button>
      </NavLink>
    </Wrapper>
  </UserTemplate>
);

export default DetailsTemplate;
