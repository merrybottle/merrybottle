import styled from 'styled-components';

export const IconWrapperStyled = styled.div`
  margin-bottom: 24px;
  text-align: center;

  :not(:first-child) {
    margin-top: 32px;
  }
`;

export const IconStyled = styled.span`
  display: inline-block;
  height: 32px;
  width: 32px;

  svg path {
    fill: #1a1a1a;
  }
`;

export const SkillsList = styled.ul`
  margin: 0;
  padding: 0;
  text-align: center;

  li {
    border: 1px solid #1a1a1a;
    border-radius: 3px;
    color: #1a1a1a;
    display: inline-block;
    padding: 3px 10px;
    margin: 0 0 10px;

    :not(:first-child) {
      margin-left: 10px;
    }
  }
`;
