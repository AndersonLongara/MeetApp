import React from 'react';
import PropTypes from 'prop-types';

import { StyledLoader } from './styles';

export default function Loader({ size }) {
  return <StyledLoader size={size} />;
}

Loader.propTypes = {
  size: PropTypes.string,
};

Loader.defaultProps = {
  size: '18px',
};
