import React from 'react';
import { connect } from 'react-redux';
import GridTemplate from 'Templates/GridTemplate';
import { Card } from 'components/Molecules/Card/Card';

const Twitters = ({ twitters }) => (
  <GridTemplate pageType="twitters">
    {twitters.map((item) => (
      <Card key={item.id} cardType="twitters" {...item} />
    ))}
  </GridTemplate>
);

const mapStateToProps = ({ twitters }) => ({ twitters });

export default connect(mapStateToProps, null)(Twitters);
