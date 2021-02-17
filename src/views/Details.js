import React from 'react';
import withContext from 'hoc/withContext';
import { connect } from 'react-redux';
import DetailsTemplate from 'Templates/DetailsTemplate';

const Details = ({ activeItem: [activeItem] }) => {
  return (
    <>
      <DetailsTemplate {...activeItem} />
    </>
  );
};

const mapStateToProps = (state, { pageContext, match }) => {
  return {
    activeItem: state[pageContext].filter((item) => item.id.toString() === match.params.id),
  };
};

export default withContext(connect(mapStateToProps, null)(Details));

/* Aby mieć dostęp do właściwości kontekstu  {pageContext} z poziomu reduxa, musimy owinąć
 inaczej niż zawsze
 funkcję connect naszym withContext.
 */
