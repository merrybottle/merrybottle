// @flow
import React, { PureComponent } from 'react';
import Phone from '../Phone';
import {
  LightSwitchStyled,
  RoomStyled
} from './styled/Room';

type Props = {
  handleSwitch: Function,
  switchOn: boolean
};

class Room extends PureComponent<Props> {
  render() {
    const {
      handleSwitch,
      switchOn
    } = this.props;

    return (
      <RoomStyled>
        <Phone />
        <LightSwitchStyled
          onClick={handleSwitch}
          switchOn={switchOn}
        >Lights</LightSwitchStyled>
      </RoomStyled>
    );
  }
}

export default Room;
