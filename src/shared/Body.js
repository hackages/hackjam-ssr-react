import React from 'react';
import PropTypes from 'prop-types';

export const Body = ({children}) => <div>{children}</div>;

Body.propTypes = {
  children: PropTypes.node
};
