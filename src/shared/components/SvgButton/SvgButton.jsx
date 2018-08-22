// @flow
import React, { Node } from 'react';
import { SvgButtonStyled } from './styled/SvgButton';

type Props = {
  children: Node
};

const SvgButton = ({ children, ...rest }: Props) => (
  <SvgButtonStyled {...rest}>
    {children}
  </SvgButtonStyled>
);

export default SvgButton;
