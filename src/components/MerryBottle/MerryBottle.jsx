// @flow
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Room from '../Room';
import Torch from '../Torch';
import { MerryBottleStyled } from './styled/MerryBottle';

type State = {
  torchLit: boolean
};

class MerryBottle extends PureComponent {
  state = {
    torchLit: true
  };

  handleSwitch = () => {
    this.setState({
      torchLit: !this.state.torchLit
    });
  }

  render() {
    const { torchLit } = this.state;

    return (
      <MerryBottleStyled>
        <Room
          handleSwitch={this.handleSwitch}
          switchOn={!torchLit}
        />
        {torchLit &&
          <Torch />
        }
      </MerryBottleStyled>
    );
  }
}

export default MerryBottle;
