// @flow
import React from 'react';
import {
  ClosedEyesStyled,
  MyselfStyled,
  OpenEyesStyled
} from './styled/Myself';

type Props = {
  handleTalkToMe: Function
};

const Myself = ({ handleTalkToMe }: Props) => (
  <MyselfStyled onClick={handleTalkToMe}>
    <svg viewBox="0 0 200 380" height="100%" width="100%">
      <ellipse cx="100" cy="80" rx="62" ry="77" fill="black" />
      <circle cx="100" cy="180" r="50" fill="#ffe2b3" />
      <ellipse cx="100" cy="280" rx="33" ry="100" fill="#ffe2b3" />
      <path d="M 75,358 125,358 117,380 83,380" fill="#f3a92e" />
      <circle cx="90" cy="375" r="15" fill="#f3a92e" />
      <circle cx="110" cy="375" r="15" fill="#f3a92e" />
      <line x1="100" x2="100" y1="280" y2="380" stroke="#fedda7" />
      <path d="M 85,115 Q 45,140 45,180 L 60,185 Q 65,190 45,280 Q 100,300 155,280 Q 135,190 140,185 L 155,180 Q 155,140 115,115" fill="#5499c7" />
      <circle cx="100" cy="115" r="15" fill="#ffe2b3" />
      <circle cx="100" cy="70" r="50" fill="#ffe2b3" />

      <OpenEyesStyled>
        <ellipse cx="72" cy="75" rx="8" ry="10" fill="black" />
        <ellipse cx="128" cy="75" rx="8" ry="10" fill="black" />
        <path d="M 130,75 Q 135,80 137,65 Q 135,70 130,66" fill="black" />
        <path d="M 70,75 Q 65,80 63,65 Q 65,70 70,66" fill="black" />
        <circle cx="69" cy="72" r="1.5" fill="white" />
        <circle cx="131" cy="72" r="1.5" fill="white" />
      </OpenEyesStyled>

      <ClosedEyesStyled>
        <path d="M 62,75 Q 72,83 82,75" stroke="black" strokeWidth="3" fill="none" strokeLinecap="round" />
        <path d="M 138,75 Q 128,83 118,75" stroke="black" strokeWidth="3" fill="none" strokeLinecap="round" />
      </ClosedEyesStyled>>

      <ellipse cx="66" cy="92" rx="9" ry="6" fill="#f08080" opacity="0.5" />
      <ellipse cx="134" cy="92" rx="9" ry="6" fill="#f08080" opacity="0.5" />

      <circle cx="72" cy="75" r="20" stroke="#a47426" strokeWidth="3" fill="none" />
      <circle cx="128" cy="75" r="20" stroke="#a47426" strokeWidth="3" fill="none" />
      <path d="M 92,75 Q 100,70 108,75" stroke="#a47426" strokeWidth="3" fill="none" />

      <path d="M 90,96 Q 100,109 110,96" stroke="red" strokeWidth="2" fill="none" />

      <path d="M 90,20 Q 80,50 50,60 Q 60,15 90,20 Z" fill="black" />
      <path d="M 85,30 Q 120,65 150,55 Q 130,10 85,20 Z" fill="black" />
    </svg>
  </MyselfStyled>
);

export default Myself;
