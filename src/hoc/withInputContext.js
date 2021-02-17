import React from 'react';
import { InputContext } from 'context/context';

const withInputContext = (Component) => {
  return function contextComponent(props) {
    return (
      <InputContext.Consumer>
        {(context) => <Component {...props} inputContext={context} />}
      </InputContext.Consumer>
    );
  };
};

export default withInputContext;
