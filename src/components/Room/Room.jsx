// @flow
import React, { PureComponent } from 'react';
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
        <LightSwitchStyled
          onClick={handleSwitch}
          switchOn={switchOn}
        >Lights</LightSwitchStyled>
      </RoomStyled>
    );
  }
}

export default Room;
