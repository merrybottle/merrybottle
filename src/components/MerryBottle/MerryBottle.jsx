// @flow
import React, { PureComponent } from 'react';
import ContentContainer from 'shared/components/ContentContainer';
import Contact from '../Contact';
import Room from '../Room';
import Torch from '../Torch';
import { MerryBottleStyled } from './styled/MerryBottle';

type State = {
  torchLit: boolean
};

class MerryBottle extends PureComponent<State> {
  state = {
    contact: false,
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

  render() {
    const {
      contact,
      torchLit
    } = this.state;
    const {
      handleSwitch,
      toggleContact
    } = this;

    return (
      <MerryBottleStyled>
        <Room
          focused={!contact}
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
      </MerryBottleStyled>
    );
  }
}

export default MerryBottle;
