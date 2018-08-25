// @flow
import React, { PureComponent } from 'react';
import ContentContainer from 'shared/components/ContentContainer';
import Contact from '../Contact';
import Profile from '../Profile';
import RecentWork from '../RecentWork';
import Room from '../Room';
import Skills from '../Skills';
import Torch from '../Torch';
import { MerryBottleStyled } from './styled/MerryBottle';

type State = {
  contact: boolean,
  profile: boolean,
  recentWork: boolean,
  skills: boolean,
  torchLit: boolean
};

class MerryBottle extends PureComponent<State> {
  state = {
    contact: false,
    profile: false,
    recentWork: false,
    skills: false,
    torchLit: true
  };

  handleSwitch = () => {
    this.setState({
      torchLit: !this.state.torchLit
    });
  }

  toggleContact = () => {
    this.setState({ contact: !this.state.contact });
  }

  toggleProfile = () => {
    this.setState({ profile: !this.state.profile });
  }

  toggleRecentWork = () => {
    this.setState({ recentWork: !this.state.recentWork });
  }

  toggleSkills = () => {
    this.setState({ skills: !this.state.skills });
  }

  render() {
    const {
      contact,
      profile,
      recentWork,
      skills,
      torchLit
    } = this.state;
    const {
      handleSwitch,
      toggleContact,
      toggleProfile,
      toggleRecentWork,
      toggleSkills
    } = this;

    return (
      <MerryBottleStyled>
        <Room
          focused={!skills && !recentWork && !profile && !contact}
          handleArtwork={toggleRecentWork}
          handleAward={toggleSkills}
          handleMyself={toggleProfile}
          handlePhone={toggleContact}
          handleSwitch={handleSwitch}
          switchOn={!torchLit}
        />
        {torchLit &&
          <Torch />
        }
        <Profile
          handleClose={toggleProfile}
          show={profile}
        />
        <Skills
          handleClose={toggleSkills}
          show={skills}
        />
        <RecentWork
          handleClose={toggleRecentWork}
          show={recentWork}
        />
        <Contact
          handleClose={toggleContact}
          show={contact}
        />
      </MerryBottleStyled>
    );
  }
}

export default MerryBottle;
