import styled from 'styled-components';

const switchColor = '#ddd';

export const LightSwitchStyled = styled.button`
  background-color: ${switchColor};
  border: 0;
  border-radius: 3px;
  box-shadow: 2px 2px 3px rgba(0, 0, 0, 0.3);
  cursor: pointer;
  font-size: 0;
  height: 50px;
  outline: 0;
  padding: 0;
  position: absolute;
  right: 50px;
  top: 50%;
  width: 40px;

  ::before {
    background-color: #${({ switchOn }) => (switchOn ? '58d68d' : 'ec7063')};
    border-radius: 3px;
    box-shadow: inset 0px 0px 6px rgba(0, 0, 0, 0.2);
    content: '';
    display: block;
    margin: 13px 12px;
    height: 24px;
    width: 16px;
  }

  ::after {
    background-color: ${switchColor};
    border: 1px solid #ccc;
    border-radius: 3px;
    box-shadow: 2px 2px 3px rgba(0, 0, 0, 0.2);
    box-sizing: border-box;
    content: '';
    display: block;
    height: 10px;
    left: 10px;
    position: absolute;
    transition: top 0.1s linear;
    top: ${({ switchOn }) => (switchOn ? 27 : 13)}px;
    width: 20px;
  }
`;

export const RoomStyled = styled.div`
  height: 100%;
  position: relative;
`;
