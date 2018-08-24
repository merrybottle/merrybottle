// @flow
import React from 'react';
import {
  ArtworkStyled,
  GreenRainbowPathStyled,
  OrangeRainbowPathStyled,
  PurpleRainbowPathStyled,
  RedRainbowPathStyled
} from './styled/Artwork';

type Props = {
  handleSeeSkills: Function
};

const Artwork = ({ handleSeeSkills }: Props) => (
  <ArtworkStyled onClick={handleSeeSkills}>
    <svg viewBox="0 0 500 380"  height="100%" width="100%">
      <rect x="0" y="0" height="380" width="500" fill="#7a5432" rx="2" ry="2" />
      <rect x="64" y="64" height="252" width="372" fill="#aed6f1" rx="2" ry="2" />

      <path d="M 64,316 64,290 Q 250,250 436,290 L 436,316 Z" fill="#0e6251" />

      <PurpleRainbowPathStyled d="M 60,236 Q 250,122 440,236" stroke="#884ea0" strokeWidth="20" fill="none" />
      <GreenRainbowPathStyled d="M 60,216 Q 250,102 440,216" stroke="#1abc9c" strokeWidth="20" fill="none" />
      <OrangeRainbowPathStyled d="M 60,196 Q 250,82 440,196" stroke="#f1c40f" strokeWidth="20" fill="none" />
      <RedRainbowPathStyled d="M 60,176 Q 250,62 440,176" stroke="#e74c3c" strokeWidth="20" fill="none" />

      <rect x="59" y="59" height="262" width="382" stroke="#1c2833" strokeWidth="10" fill="none" rx="2" ry="2" />

      <rect x="240" y="200" height="80" width="20" fill="#873600" rx="10" ry="10" />
      <circle cx="240" cy="130" r="50" fill="#27ae60" />
      <circle cx="270" cy="170" r="65" fill="#148f77" />
      <circle cx="220" cy="190" r="50" fill="#45b39d" />


      <path d="M 0,300 0,10 Q 0,0 10,0 L 250,0 Z" fill="#fff" opacity="0.05" />
    </svg>
  </ArtworkStyled>
);

export default Artwork;
