// @flow
import React from 'react';
import { CloseButtonStyled } from './styled/CloseButton';

type Props = {
  handleClick: Function
};

const CloseButton = ({ handleClick }: Props) => (
  <CloseButtonStyled onClick={handleClick}>Close</CloseButtonStyled>
);

export default CloseButton;
