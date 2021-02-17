import React from 'react';
import { connect } from 'react-redux';
import GridTemplate from 'Templates/GridTemplate';
import Card from 'components/Molecules/Card/Card';
// import { fetchItems } from 'Redux/Actions';

const Twitters = ({ twitters }) => {
  // useEffect(() => {
  //   fetchTwitters();
  // }, []);

  return (
    <GridTemplate>
      {twitters.map((item) => (
        <Card key={item.id} {...item} />
      ))}
    </GridTemplate>
  );
};

// const mapDispatchToProps = (dispatch) => ({
//   fetchTwitters: () => dispatch(fetchItems('twitters')),
// });

const mapStateToProps = ({ twitters }) => ({ twitters });

export default connect(mapStateToProps, null)(Twitters);
