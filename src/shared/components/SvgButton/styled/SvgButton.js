import styled from 'styled-components';

export const SvgButtonStyled = styled.button`
  cursor: pointer;

  &,
  &:active,
  &:focus,
  &:hover,
  &:visited {
    background: none;
    border: 0;
    box-shadow: none;
    display: inline-block;
    margin: 0;
    outline: 0;
    padding: 0;
  }
`;
