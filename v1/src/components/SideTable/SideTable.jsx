// @flow
import React from 'react';
import {
  SideTableStyled
} from './styled/SideTable';

const SideTable = () => (
  <SideTableStyled>
    <svg viewBox="0 0 180 220" height="100%" width="100%">
      <rect x="3" y="3" height="20" width="174" stroke="black" strokeWidth="6" fill="#dfebe6" />
      <path d="M 30,220 80,26 100,26 150,220 120,220 90,56 60,220 Z" fill="#14585f" />
      <line x1="65" y1="140" x2="115" y2="140" stroke="black" strokeWidth="5" />
      <circle cx="65" cy="140" r="6" fill="black" />
      <circle cx="115" cy="140" r="6" fill="black" />
    </svg>
  </SideTableStyled>
);

export default SideTable;
