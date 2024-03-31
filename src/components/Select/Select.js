import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import Icon from '../Icon';
import { getDisplayedValue } from './Select.helpers';

const Select = ({ label, value, onChange, children }) => {
  const displayedValue = getDisplayedValue(value, children);

  return (
    <Wrapper>
      <NativeSelect value={value} onChange={onChange}>
        {children}
      </NativeSelect>
      <PresentationalSelect>
        {displayedValue}
        <IconWrapper>
          <Icon id="chevron-down" size={24} strokeWidth={1} />
        </IconWrapper>
      </PresentationalSelect>
    </Wrapper>
    
  );
};

const NativeSelect = styled.select`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
`;
const Wrapper = styled.div`
  position: relative;
  display: inline-block;
`;
const PresentationalSelect = styled.div`
  background-color: ${COLORS.transparentGray15};
  font-family: 'Roboto', sans-serif;
  padding: 12px 12px 12px 16px;
  border-radius: 8px;
  font-size: 1rem;
  color: ${COLORS.gray700};

  ${NativeSelect}:focus + & {
    outline: 1px dotted #212121;
    outline: 5px auto -webkit-focus-ring-color;
  }

  ${NativeSelect}:hover + & {
    color: ${COLORS.black};
  }
`;

const IconWrapper = styled.div`
  display: inline-block;
  vertical-align: middle;
  margin-left: 18px;
`;

export default Select;
