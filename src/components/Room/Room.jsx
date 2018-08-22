// @flow
import React, { PureComponent } from 'react';
import Phone from '../Phone';
import {
  LightSwitchStyled,
  RoomStyled
} from './styled/Room';

type Props = {
  focused: boolean,
  handlePhone: Function,
  handleSwitch: Function,
  switchOn: boolean
};

class Room extends PureComponent<Props> {
  render() {
    const {
      focused,
      handlePhone,
      handleSwitch,
      switchOn
    } = this.props;

    return (
      <RoomStyled focused={focused}>
        <Phone handleAnswerPhone={handlePhone} />

        <LightSwitchStyled
          onClick={handleSwitch}
          switchOn={switchOn}
        >Lights</LightSwitchStyled>
      </RoomStyled>
    );
  }
}

export default Room;
