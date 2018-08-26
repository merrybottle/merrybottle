// @flow
import React, { Node, PureComponent } from 'react';
import CloseButton from './CloseButton';
import {
  BodyStyled,
  ContentContainerStyled,
  ContentStyled,
  IconStyled,
  TitleStyled
} from './styled/ContentContainer';

type Props = {
  children: Node,
  handleClose: Function,
  icon: Node,
  show: boolean,
  title: string
};

class ContentContainer extends PureComponent<Props> {
  render() {
    const {
      children,
      handleClose,
      icon,
      show,
      title
    } = this.props;

    return (
      <ContentContainerStyled show={show}>
        <ContentStyled>
          <CloseButton handleClick={handleClose} />
          <IconStyled>
            {icon}
          </IconStyled>
          <TitleStyled>{title}</TitleStyled>

          <BodyStyled>
            {children}
          </BodyStyled>
        </ContentStyled>
      </ContentContainerStyled>
    );
  }
}

export default ContentContainer;
