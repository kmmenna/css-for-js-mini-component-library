/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import VisuallyHidden from '../VisuallyHidden';

const STYLES = {
  large: {
    '--border-radius': '8px',
    '--height': '24px',
    '--padding': '4px',
  },
  medium: {
    '--border-radius': '4px',
    '--height': '12px',
    '--padding': '0',
  },
  small: {
    '--border-radius': '4px',
    '--height': '8px',
    '--padding': '0',
  },
};

const ProgressBar = ({ value, size }) => {

  const style = STYLES[size];

  if (!style) {
    throw new Error(`Unknown size passed to ProgressBar: ${size}`);
  }

  return (
    <Wrapper
      style={style}
      role="progressbar"
      aria-valuenow={value}
      aria-valuemin="0"
      aria-valuemax="100"
    >
      <VisuallyHidden>{value}%</VisuallyHidden>
      <BarWrapper>
        <Bar style={{ '--width': value + '%' }} />
      </BarWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background-color: ${COLORS.transparentGray15};
  box-shadow: inset 0px 2px 4px ${COLORS.transparentGray35};
  border-radius: var(--border-radius);
  height: var(--height);
  padding: var(--padding);
`;

const BarWrapper = styled.div`
  height: 100%;
  border-radius: 4px;
  /* Trim off corners when progress bar is near full */
  overflow: hidden;
`;

const Bar = styled.div`
  background-color: ${COLORS.primary};
  height: 100%;
  width: var(--width);
`;

export default ProgressBar;
