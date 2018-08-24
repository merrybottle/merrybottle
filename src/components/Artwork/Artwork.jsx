// @flow
import React from 'react';
import {
  ArtworkStyled
} from './styled/Artwork';

type Props = {
  handleSeeSkills: Function
};

const Artwork = ({ handleSeeSkills }: Props) => (
  <ArtworkStyled onClick={handleSeeSkills}>
    <svg viewBox="0 0 500 380"  height="100%" width="100%">
      <rect x="0" y="0" height="380" width="500" fill="#7a5432" rx="2" ry="2" />
      <rect x="54" y="54" height="272" width="392" fill="#1c2833" rx="2" ry="2" />
      <rect x="64" y="64" height="252" width="372" fill="#2a71a3" rx="2" ry="2" />

      <path d="M 64,316 64,290 Q 250,250 436,290 L 436,316 Z" fill="#0e6251" />
      <rect x="240" y="200" height="80" width="20" fill="#873600" rx="10" ry="10" />
      <circle cx="280" cy="160" r="75" fill="#148f77" />
      <circle cx="220" cy="190" r="50" fill="#45b39d" />
    </svg>
  </ArtworkStyled>
);

export default Artwork;
