import React from 'react';
import PropTypes from 'prop-types';

//------------------------------------------------------------------------------
// COMPONENT:
//------------------------------------------------------------------------------
const Subtitle = ({ text, link }) => (
  <p className="center">
    <span>{text}</span> {link || null}
  </p>
);

Subtitle.propTypes = {
  text: PropTypes.string.isRequired,
  link: PropTypes.node,
};

Subtitle.defaultProps = {
  link: null,
};

export default Subtitle;
