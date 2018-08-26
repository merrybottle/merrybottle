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
  center: boolean,
  children: Node,
  handleClose: Function,
  icon: Node,
  show: boolean,
  title: string
};

class ContentContainer extends PureComponent<Props> {
  static defaultProps = {
    center: false
  };

  render() {
    const {
      center,
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

          <BodyStyled center={center}>
            {children}
          </BodyStyled>
        </ContentStyled>
      </ContentContainerStyled>
    );
  }
}

export default ContentContainer;
