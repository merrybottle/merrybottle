// @flow
import React, { PureComponent } from 'react';
import ContentContainer from 'shared/components/ContentContainer';
import Contact from '../Contact';
import Room from '../Room';
import Skills from '../Skills';
import Torch from '../Torch';
import { MerryBottleStyled } from './styled/MerryBottle';

type State = {
  torchLit: boolean
};

class MerryBottle extends PureComponent<State> {
  state = {
    contact: false,
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

  toggleSkills = () => {
    this.setState({ skills: !this.state.skills });
  }

  render() {
    const {
      contact,
      skills,
      torchLit
    } = this.state;
    const {
      handleSwitch,
      toggleContact,
      toggleSkills
    } = this;

    return (
      <MerryBottleStyled>
        <Room
          focused={!contact}
          handleAward={toggleSkills}
          handlePhone={toggleContact}
          handleSwitch={handleSwitch}
          switchOn={!torchLit}
        />
        {torchLit &&
          <Torch />
        }
        <Contact
          handleClose={toggleContact}
          show={contact}
        />
        <Skills
          handleClose={toggleSkills}
          show={skills}
        />
      </MerryBottleStyled>
    );
  }
}

export default MerryBottle;
