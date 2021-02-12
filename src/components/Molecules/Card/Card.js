import React, { Component } from 'react';
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
  flex-direction: column;
  min-height: 380px;
  box-shadow: 0 10px 30px -10px hsla(0, 0%, 0%, 0.1);
  border-radius: 20px;
  overflow: hidden;
`;

const InnerWrapper = styled.div`
  position: relative;
  padding: 15px 30px;
  background-color: ${({ activecolor, theme }) => (activecolor ? theme[activecolor] : theme.white)};

  ${({ flex }) =>
    flex &&
    css`
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    `}
`;

const DateInfo = styled(Paragraph)`
  font-weight: ${({ theme }) => theme.bold};
  font-size: ${({ theme }) => theme.fontSize.xs};
  color: ${({ theme }) => theme.white};
`;

const StyledHeading = styled(Heading)`
  margin: 0;
  color: #fff;
`;

const StyledAvatar = styled.img`
  position: absolute;
  width: 86px;
  height: 86px;
  border: 3px solid ${({ theme }) => theme.twitters};
  border-radius: 50px;
  top: 50%;
  z-index: 1;
  right: 0;
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
`;

export class Card extends Component {
  state = {
    isRedirect: false,
  };

  handleCardClick = () => this.setState({ isRedirect: true });

  render() {
    const {
      cardType,
      title,
      articleUrl,
      twitterName,
      content,
      created,
      id,
      removeItem,
    } = this.props;

    const { isRedirect } = this.state;

    console.log(removeItemAction);

    if (isRedirect) return <Redirect to={`${cardType}/${id}`} />;
    return (
      <Wrapper>
        <InnerWrapper activecolor={cardType}>
          <StyledHeading onClick={this.handleCardClick}>{title}</StyledHeading>
          <DateInfo>{created}</DateInfo>
          {cardType === 'twitters' && (
            <StyledAvatar src={`https://unavatar.now.sh/facebook/${twitterName}`} />
          )}
          {cardType === 'articles' && <StyledLink href={articleUrl} />}
        </InnerWrapper>
        <InnerWrapper flex>
          <Paragraph>{content}</Paragraph>
          <Button onClick={() => removeItem(cardType, id)} secondary activeColor={cardType}>
            Remove
            {console.log(removeItem)}
          </Button>
        </InnerWrapper>
      </Wrapper>
    );
  }
}

Card.propTypes = {
  cardType: PropTypes.oneOf(['notes', 'twitters', 'articles']),
  title: PropTypes.string.isRequired,
  created: PropTypes.string.isRequired,
  twitterName: PropTypes.string,
  articleUrl: PropTypes.string,
  content: PropTypes.string.isRequired,
  removeItem: PropTypes.func.isRequired,
};

Card.defaultProps = {
  cardType: 'notes',
  twitterName: null,
  articleUrl: null,
};

const mapDispatchToProps = (dispatch) => ({
  removeItem: (itemType, id) => dispatch(removeItemAction(itemType, id)),
});

export default connect(null, mapDispatchToProps)(Card);
