import React from 'react';
import { connect } from 'react-redux';
import GridTemplate from 'Templates/GridTemplate';
import Card from 'components/Molecules/Card/Card';

const Twitters = ({ twitters }) => {
  return (
    <GridTemplate>
      {twitters.map((item) => (
        <Card key={item.id} {...item} />
      ))}
    </GridTemplate>
  );
};

const mapStateToProps = ({ twitters }) => ({ twitters });

export default connect(mapStateToProps, null)(Twitters);
