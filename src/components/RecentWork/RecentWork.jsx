// @flow
import React from 'react';
import ContentContainer from 'shared/components/ContentContainer';

type Props = {
  handleClose: Function,
  show: boolean
};

const RecentWork = ({ handleClose, show }: Props) => (
  <ContentContainer
    handleClose={handleClose}
    show={show}
    title="RecentWork"
  >
    <p>
      I am most familar with:
    </p>

    <p>
      <strong>OR</strong>
    </p>
  </ContentContainer>
);

export default RecentWork;
