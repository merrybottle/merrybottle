// @flow
import React, { PureComponent } from 'react';
import Artwork from '../Artwork';
import Award from '../Award';
import Myself from '../Myself';
import Phone from '../Phone';
import Window from '../Window';
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
      handleAward,
      handlePhone,
      handleSwitch,
      switchOn
    } = this.props;

    return (
      <RoomStyled focused={focused}>
        <Award handleSeeSkills={handleAward} />
        <Artwork handleSeeSkills={handleAward} />
        <Window />
        <Myself handleSeeSkills={handleAward} />
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
