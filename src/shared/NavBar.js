import React from 'react';
import PropTypes from 'prop-types';

export const NavBar = ({children}) => <div className="navbar">{children}</div>;

NavBar.propTypes = {
  children: PropTypes.node.isRequired
};
