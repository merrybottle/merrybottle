// @flow
import React from 'react';
import ContentContainer from 'shared/components/ContentContainer';
import Guarantee from './Guarantee';
import Like from './Like';
import Love from './Love';
import {
  IconStyled,
  IconWrapperStyled,
  SkillsList
} from './styled/Skills';

type Props = {
  handleClose: Function,
  show: boolean
};

const Skills = ({ handleClose, show }: Props) => (
  <ContentContainer
    handleClose={handleClose}
    icon={<Guarantee />}
    show={show}
    title="Skills"
  >
    <IconWrapperStyled>
      <IconStyled>
        <Love />
      </IconStyled>
    </IconWrapperStyled>

    <SkillsList>
      <li>React</li>
      <li>ES6</li>
      <li>ES5</li>
      <li>HTML</li>
      <li>CSS</li>
      <li>SASS</li>
      <li>LESS</li>
      <li>Styled components</li>
      <li>SVGs</li>
    </SkillsList>

    <IconWrapperStyled>
      <IconStyled>
        <Like />
      </IconStyled>
    </IconWrapperStyled>

    <SkillsList>
      <li>Redux</li>
      <li>JQuery</li>
      <li>Knockout</li>
      <li>Webpack</li>
      <li>Next JS</li>
    </SkillsList>
  </ContentContainer>
);

export default Skills;
