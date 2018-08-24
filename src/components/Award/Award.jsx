// @flow
import React from 'react';
import {
  AwardStyled,
  BlingStyled
} from './styled/Award';

type Props = {
  handleSeeSkills: Function
};

const Award = ({ handleSeeSkills }: Props) => (
  <AwardStyled onClick={handleSeeSkills}>
    <svg viewBox="0 0 300 400" height="100%" width="100%">
      <defs>
        <path id="spike" d="M 0,0 70,0 70,70 0,70 Z" />
        <path id="ribbon" d="M 0,0 36,0 36,50 18,40 0,50 Z" />
      </defs>

      <rect fill="#7a5432" height="400" width="300" x="0" y="0" rx="10" ry="10" />
      <rect fill="#283747" height="330" width="230" x="35" y="35" rx="6" ry="6" />

      <use href="#ribbon" fill="#2980b9" x="140" y="130" transform="rotate(-15, 204, 132.5)" />
      <use href="#ribbon" fill="#e74c3c" x="120" y="122" transform="rotate(15, 96, 131)" />

      <use href="#spike" x="115" y="70" transform="rotate(15, 150, 105)" fill="#f1C40f" />
      <use href="#spike" x="115" y="70" transform="rotate(45, 150, 105)" fill="#f1C40f" />
      <use href="#spike" x="115" y="70" transform="rotate(75, 150, 105)" fill="#f1C40f" />
      <path d="M 150,79 Q 140,101 133,128 Q 160,116 175,98 Q 150,93 125,98 Q 140,116 167,128 Q 160,101 150,79Z" fill="#e67e22" strokeLinejoin="round" />

      <BlingStyled d="M 185,50 Q 185,75 210,75 Q 185,75 185,100 Q 185,75 160,75 Q 185,75 185,50 Z" fill="white" />

      <rect x="75" y="230" height="100" width="150" rx="5" ry="5" fill="#839192" />
      <rect x="120" y="255" height="5" width="60" rx="2" ry="2" fill="#17202a" />
      <rect x="100" y="270" height="5" width="100" rx="2" ry="2" fill="#17202a" />
      <rect x="130" y="300" height="5" width="40" rx="2" ry="2" fill="#17202a" />

      <path d="M 0,300 0,10 Q 0,0 10,0 L 250,0 Z" fill="#fff" opacity="0.05" />
    </svg>
  </AwardStyled>
);

export default Award;
