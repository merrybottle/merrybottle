// @flow
import React from 'react';
import ContentContainer from 'shared/components/ContentContainer';
import Girl from './Girl';

type Props = {
  handleClose: Function,
  show: boolean
};

const Profile = ({ handleClose, show }: Props) => (
  <ContentContainer
    handleClose={handleClose}
    icon={<Girl />}
    show={show}
    title="Profile"
  >
    <p>
      Hi, my name is Mary!
    </p>

    <p>
      I am a front end developer from Sydney, Australia.  After graduating uni, I worked as a
      tester for 3 years and a front end dev for 6. I&apos;m currently
      @ <a href="http://www.oneflare.com.au" target="_blank">Oneflare</a> as the Senior Front End
      Developer.
    </p>

    <p>
      When I'm not building websites, I&apos;m making earrings, baking and/or watching movies :)
    </p>
  </ContentContainer>
);

export default Profile;
