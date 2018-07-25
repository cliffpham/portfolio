import React from 'react';
import Breakpoint from './breakpoint';

import PropTypes from 'prop-types';

const { object } = PropTypes;

export default function TabletBreakpoint(props) {
  return (
    <Breakpoint name="tablet">
      {props.children}
    </Breakpoint>
  );
}

TabletBreakpoint.propTypes = {
  children: object,
};
