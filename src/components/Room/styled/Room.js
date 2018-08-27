import styled, { keyframes } from 'styled-components';

const switchColor = '#ddd';
const closeIntroduction = keyframes`
  100% {
    opacity: 0;
    z-index: -10;
  }
`;

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
  right: 25px;
  top: 50%;
  width: 40px;

  ::before {
    background-color: #${({ switchOn }) => (switchOn ? '58d68d' : 'e31a1a')};
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
    box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.2);
    box-sizing: border-box;
    color: #666;
    display: block;
    font-family: ${({ theme }) => theme.font.body};
    font-size: 9px;
    height: 12px;
    left: 9px;
    position: absolute;
    text-align: center;
    transition: top 0.1s linear;
    top: ${({ switchOn }) => (switchOn ? 28 : 12)}px;
    width: 22px;

    ${({ switchOn }) => (switchOn ? `
      content: 'ON';
    ` : `
      content: 'OFF';
    `)};
  }

  @media (min-width: ${({ theme }) => theme.breakpoint.medium.min}) {
    right: 80px;
  }

  @media (min-width: ${({ theme }) => theme.breakpoint.large.min}) {
    right: 150px;
  }
`;

export const NameStyled = styled.div`
  border: 8px solid #f6ddcc;
  border-radius: 50%;
  bottom: 430px;
  color: #f6ddcc;
  font-family: 'Roboto Slab', serif;
  font-size: 90px;
  height: 150px;
  left: calc(50% + 250px);
  line-height: 150px
  position: absolute;
  text-align: center;
  width: 150px;

  @media (min-width: ${({ theme }) => theme.breakpoint.medium.min}) {
    left: calc(50% + 300px);
  }

  @media (min-width: ${({ theme }) => theme.breakpoint.large.min}) {
    left: calc(50% + 400px);
  }
`;

export const IntroductionStyled = styled.div`
  background-color: rgba(0, 0, 0, 0.7);
  border-radius: 20px;
  bottom: 345px;
  box-sizing: border-box;
  color: white;
  font-family: ${({ theme }) => theme.font.title};
  font-size: 22px;
  left: calc(50% - 330px);
  letter-spacing: 2px;
  line-height: 36px;
  opacity: 1;
  padding: 15px 30px;
  position: absolute;
  transform: opacity 0.2s linear;
  width: 350px;

  ::after {
    border: 20px solid transparent;
    border-left: 20px solid rgba(0, 0, 0, 0.7);
    border-right: 0;
    bottom: 30px;
    content: '';
    display: block;
    left: 100%;
    position: absolute;
  }

  @media (min-width: ${({ theme }) => theme.breakpoint.large.min}) {
    left: calc(50% - 290px);
  }
`;

export const RoomStyled = styled.div`
  ${({ theme }) => theme.brickwall}

  height: 720px;
  overflow: hidden;
  position: relative;

  ::before {
    background-color: #eaeded;
    border-top: 15px solid #873600;
    bottom: 0;
    content: '';
    display: block;
    height: 150px;
    left: 0;
    position: absolute;
    width: 100%;
  }

  ${({ focused }) => (!focused ? `
    filter: blur(4px);
  ` : '')}

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile.max}) {
    display: none;
  }

  @media (min-height: 790px) {
    border-bottom: 50px solid #873600;
    border-top: 20px solid #641e16;
    margin-top: calc((100vh - 720px) / 2);
  }

  ${IntroductionStyled} {
    animation: ${closeIntroduction} 1s linear 5s forwards;
    display: ${({ switchOn }) => (switchOn ? 'block' : 'none' )};
  }
`;
