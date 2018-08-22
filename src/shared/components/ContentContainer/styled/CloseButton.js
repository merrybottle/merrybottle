import styled from 'styled-components';

const buttonSize = 50;

export const CloseButtonStyled = styled.button`
  background: none;
  border: 0;
  box-sizing: border-box;
  color: transparent;
  cursor: pointer;
  font-family: 'BenchNine', sans-serif;
  font-size: 18px;
  line-height: ${buttonSize}px;
  margin: 0;
  outline: none;
  overflow: hidden;
  padding: 0;
  position: absolute;
  right: 10px;
  top: 10px;
  text-transform: uppercase;
  transition: all 0.2s ease-in;
  width: ${buttonSize}px;

  ::before,
  ::after {
    background-color: #21618c;
    content: '';
    display: block;
    height: 1px;
    left: 0;
    position: absolute;
    transform-origin: center left;
    transition: all 0.2s ease-in;
    width: 100px;
    z-index: -1;
  }

  ::before {
    top: 0;
    transform: rotate(45deg);
  }

  ::after {
    bottom: 0;
    transform: rotate(-45deg);
  }

  :hover {
    color: #ebf5fb;

    ::before,
    ::after {
      height: 30px;
      transform: rotate(0deg);
    }
  }

   @media (max-width: 699px) {
    display: none;
   }
`;
