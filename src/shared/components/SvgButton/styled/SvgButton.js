import styled from 'styled-components';

export const SvgButtonStyled = styled.button`
  box-shadow: none;
  cursor: pointer;

  &,
  &:active,
  &:focus,
  &:hover,
  &:visited {
    background: none;
    border: 0;
    display: inline-block;
    margin: 0;
    outline: 0;
    padding: 0;
  }
`;
