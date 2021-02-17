import React from 'react';
import { connect } from 'react-redux';
import Card from 'components/Molecules/Card/Card';
import GridTemplate from 'Templates/GridTemplate';

const Articles = ({ articles }) => {
  return (
    <GridTemplate>
      {articles.map((item) => (
        <Card {...item} />
      ))}
    </GridTemplate>
  );
};

const mapStateToProps = ({ articles }) => ({ articles });

export default connect(mapStateToProps, null)(Articles);
