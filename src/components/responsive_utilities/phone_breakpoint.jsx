import React from 'react';
import Breakpoint from './breakpoint';

import PropTypes from 'prop-types';

const { object } = PropTypes;

export default function PhoneBreakPoint(props) {
  return (
    <Breakpoint name="phone">
      {props.children}
    </Breakpoint>
  );
}

PhoneBreakPoint.propTypes = {
  children: object,
};
