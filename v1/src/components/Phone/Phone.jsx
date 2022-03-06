// @flow
import React from 'react';
import {
  DialNumberStyled,
  DialStyled,
  PhoneHandlePathStyled,
  PhonePathStyled,
  PhoneStyled
} from './styled/Phone';

type Props = {
  handleAnswerPhone: Function
};

const Phone = ({ handleAnswerPhone }: Props) => (
  <PhoneStyled onClick={handleAnswerPhone}>
    <svg viewBox="0 0 300 300" height="100%" width="100%">
      <PhonePathStyled d="M 70,260 70,170 a 20,20 0 0,1 20,-20 Q 95,130 105,130 L 110,130 110,150 190,150 190,130 195,130 Q 205,130 210,150 a 20,20 0 0,1 20,20 L 230,170 230,260 a 20,20 0 0,1 -20,20 L 90,280 a 20,20 0 0,1 -20,-20 Z" />
      <DialStyled cx="150" cy="215" r="30" />
      <DialNumberStyled cx="150" cy="185" r="5" />
      <DialNumberStyled cx="150" cy="245" r="5" />
      <DialNumberStyled cx="120" cy="215" r="5" />
      <DialNumberStyled cx="180" cy="215" r="5" />
      <DialNumberStyled cx="171" cy="236" r="5" />
      <DialNumberStyled cx="171" cy="194" r="5" />
      <DialNumberStyled cx="129" cy="194" r="5" />
      <DialNumberStyled cx="129" cy="236" r="5" />
      <PhoneHandlePathStyled d="M 100,115 a 50,50 0 0,1 -50,40 a 40,40 0 0,1 50,-60 Q 150,80 200,95 a 40,40 0 0,1 50,60 a 50,50 0 0,1 -50,-40 Q 150,90 100,115 z" />
    </svg>
  </PhoneStyled>
);

export default Phone;
