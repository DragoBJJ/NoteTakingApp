import React, { useState } from 'react';
import withContext from 'hoc/withContext';
import { connect } from 'react-redux';
import { removeItem as removeItemAction } from 'Redux/Actions';
import styled, { css } from 'styled-components';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import Paragraph from 'components/atoms/Paragraph/Paragraph';
import Heading from 'components/atoms/Heading/Heading';
import { Button } from 'components/atoms/Button/Button';
import LinkIcon from 'assets/icons/link.svg';

const Wrapper = styled.div`
  display: grid;
  grid-template-rows: 0.25fr 1fr;
  min-height: 150px;
  flex-direction: column;
  min-height: 300px;
  box-shadow: 0 10px 30px -10px hsla(0, 0%, 0%, 0.1);
  border-radius: 20px;
  overflow: hidden;
  transition: all 0.2s ease-in-out;

  @media screen and (min-width: 1400px) {
    min-width: 330px;
  }

  @media screen and (max-width: 860px) {
    min-width: 350px;
  }

  @media screen and (max-width: 600px) {
    min-width: 250px;
  }
`;

const InnerWrapper = styled.div`
  position: relative;
  padding: 15px 30px;
  background-color: ${({ activecolor, theme }) => (activecolor ? theme[activecolor] : theme.white)};
  transition: all 0.2s ease-in-out;
  ${({ flex }) =>
    flex &&
    css`
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      margin-top: 20px;
    `}
`;

const StyledHeading = styled(Heading)`
  margin: 0;
  text-align: center;
  color: #fff;
  max-width: 180px;
  @media screen and (max-width: 1060px) {
    max-width: 200px;
  }

  @media screen and (max-width: 860px) {
    font-size: 20px;
    max-width: 350px;
  }
  @media screen and (max-width: 760px) {
    max-width: 250px;
  }

  @media screen and (max-width: 600px) {
    font-size: 20px;
    max-width: 150px;
  }
`;

const StyledAvatar = styled.img`
  position: absolute;
  width: 86px;
  height: 86px;
  border: 3px solid ${({ theme }) => theme.twitters};
  border-radius: 50px;
  top: 40%;
  z-index: 1;
  right: 0;

  @media screen and (max-width: 1060px) {
    top: 0;
    width: 75px;
    height: 75px;
  }
  @media screen and (max-width: 860px) {
    width: 86px;
    height: 86px;
  }

  @media screen and (max-width: 600px) {
    top: 0;
    width: 70px;
    height: 70px;
  }
`;

const StyledLink = styled.a`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  right: 5px;
  display: block;
  width: 47px;
  height: 47px;
  border-radius: 50px;
  background: #fff url(${LinkIcon}) no-repeat;
  background-size: 60%;
  background-position: 50%;

  &:hover {
    background-color: ${({ activeColor, theme }) => theme[activeColor]};
    border: 2px solid #fff;
  }
`;

const Card = ({ title, articleUrl, twitterName, content, id, removeItem, pageContext }) => {
  const [isRedirect, setRedirect] = useState(false);

  const handleCardClick = () => setRedirect(true);

  if (isRedirect) return <Redirect to={`${pageContext}/${id}`} />;

  return (
    <Wrapper>
      <InnerWrapper activecolor={pageContext}>
        <StyledHeading onClick={handleCardClick}>{title}</StyledHeading>
        {pageContext === 'twitters' && (
          <StyledAvatar src={`https://unavatar.now.sh/facebook/${twitterName}`} />
        )}
        {pageContext === 'articles' && (
          <StyledLink activeColor={pageContext} href={`https://${articleUrl}`} />
        )}
      </InnerWrapper>
      <InnerWrapper flex>
        <Paragraph>{content}</Paragraph>
        <Button onClick={() => removeItem(pageContext, id)} secondary activeColor={pageContext}>
          Remove
        </Button>
      </InnerWrapper>
    </Wrapper>
  );
};

Card.propTypes = {
  pageContext: PropTypes.oneOf(['notes', 'twitters', 'articles']).isRequired,
  title: PropTypes.string.isRequired,
  twitterName: PropTypes.string,
  articleUrl: PropTypes.string,
  content: PropTypes.string.isRequired,
  removeItem: PropTypes.func.isRequired,
};

Card.defaultProps = {
  twitterName: null,
  articleUrl: null,
};

const mapDispatchToProps = (dispatch) => ({
  removeItem: (itemType, id) => dispatch(removeItemAction(itemType, id)),
});

export default connect(null, mapDispatchToProps)(withContext(Card));
