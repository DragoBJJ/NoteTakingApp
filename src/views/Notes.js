import React from 'react';
import { connect } from 'react-redux';
import GridTemplate from 'Templates/GridTemplate';
import Card from 'components/Molecules/Card/Card';

const Notes = ({ notes }) => (
  <GridTemplate>
    {notes.map((item) => (
      <Card key={item.id} id={item.id} {...item} />
    ))}
  </GridTemplate>
);

const mapStateToProps = ({ notes }) => ({ notes });

export default connect(mapStateToProps, null)(Notes);
