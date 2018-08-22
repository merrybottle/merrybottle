// @flow
import React, { Node, PureComponent } from 'react';
import CloseButton from './CloseButton';
import {
  BodyStyled,
  ContentContainerStyled,
  ContentStyled,
  TitleStyled
} from './styled/ContentContainer';

type Props = {
  children: Node,
  handleClose: Function,
  show: boolean,
  title: string
};

class ContentContainer extends PureComponent<Props> {
  render() {
    const {
      children,
      handleClose,
      show,
      title
    } = this.props;

    return (
      <ContentContainerStyled show={show}>
        <ContentStyled>
          <CloseButton handleClick={handleClose} />
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
