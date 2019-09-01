import React from 'react';
import PropsTypes from 'prop-types';

import Header from '~/Components/Header';

import { Wrapper } from './styles';

export default function DefaultLayout({ children }) {
  return (
    <Wrapper>
      <Header />
      {children}
    </Wrapper>
  );
}

DefaultLayout.propTypes = {
  children: PropsTypes.element.isRequired,
};
