import React from 'react';
import { connect } from 'react-redux';
import { Card } from 'components/Molecules/Card/Card';
import GridTemplate from 'Templates/GridTemplate';

const Articles = ({ articles }) => (
  <GridTemplate pageType="articles">
    {articles.map((item) => (
      <Card
        key={item.id}
        cardType="articles"
        title={item.title}
        articleUrl={item.articleUrl}
        twitterName={item.twitterName}
        content={item.content}
        created={item.created}
        id={item.id}
      />
    ))}
  </GridTemplate>
);

const mapStateToProps = ({ articles }) => ({ articles });

export default connect(mapStateToProps, null)(Articles);
