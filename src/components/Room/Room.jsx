// @flow
import React, { PureComponent } from 'react';
import Artwork from '../Artwork';
import Award from '../Award';
import Myself from '../Myself';
import Phone from '../Phone';
import SideTable from '../SideTable';
import Window from '../Window';
import {
  IntroductionStyled,
  LightSwitchStyled,
  NameStyled,
  RoomStyled
} from './styled/Room';

type Props = {
  focused: boolean,
  handleAward: Function,
  handleArtwork: Function,
  handleMyself: Function,
  handlePhone: Function,
  handlePhone: Function,
  handleSwitch: Function,
  switchOn: boolean
};

class Room extends PureComponent<Props> {
  render() {
    const {
      focused,
      handleArtwork,
      handleAward,
      handleMyself,
      handlePhone,
      handleSwitch,
      switchOn
    } = this.props;

    return (
      <RoomStyled
        focused={focused}
        switchOn={switchOn}
      >
        <NameStyled>
          M.
        </NameStyled>
        <Award handleSeeSkills={handleAward} />
        <Artwork handleArtwork={handleArtwork} />
        <Window />
        <Myself handleTalkToMe={handleMyself} />
        <IntroductionStyled>
          WELCOME!<br />Take a look around my room to find out more about me!
        </IntroductionStyled>
        <SideTable />
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
