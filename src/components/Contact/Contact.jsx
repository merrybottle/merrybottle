// @flow
import React from 'react';
import ContentContainer from 'shared/components/ContentContainer';
import Facebook from 'shared/logos/Facebook';
import Instagram from 'shared/logos/Instagram';
import LinkedIn from 'shared/logos/LinkedIn';
import Phone from './Phone';

type Props = {
  handleClose: Function,
  show: boolean
};

const Contact = ({ handleClose, show }: Props) => (
  <ContentContainer
    handleClose={handleClose}
    icon={<Phone />}
    show={show}
    title="Contact me"
  >
    <p>
      Feel free to reach out at <strong>marypcng</strong> <strong>[a]</strong> <strong>hotmail</strong> <strong>[dot]</strong> <strong>com</strong>
    </p>

    <p>
      <strong>OR</strong>
    </p>

    <p>
      <a href="https://www.linkedin.com/in/merrybottle" target="_blank"><LinkedIn /></a>
      &nbsp;&nbsp;
      <a href="https://www.instagram.com/merry.bottle" target="_blank"><Instagram /></a>
      &nbsp;&nbsp;
      <a href="https://www.facebook.com/mary.pc.ng" target="_blank"><Facebook /></a>
    </p>
  </ContentContainer>
);

export default Contact;
