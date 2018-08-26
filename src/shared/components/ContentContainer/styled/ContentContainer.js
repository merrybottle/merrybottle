import styled from 'styled-components';

export const IconStyled = styled.span`
  background-color: white;
  border: 10px solid #48c9b0;
  border-radius: 50%;
  box-sizing: border-box;
  display: inline-block;
  height: 100px;
  left: calc(50% - 50px);
  position: absolute;
  text-align: center;
  top: -50px;
  width: 100px;

  svg {
    height: 50px;
    padding-top: 15px;
    width: 50px;

    path {
      fill: #1a1a1a;
    }
  }
`;

export const ContentStyled = styled.div`
  @media (min-width: 700px) {
    background-color: #48c9b0;
    border-radius: 10px;
    box-sizing: border-box;
    height: 600px;
    left: 50%;
    max-height: calc(90% - 100px);
    max-width: 90%;
    position: absolute;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 700px;
  }
`;

export const ContentContainerStyled = styled.div`
  @media (min-width: 700px) {
    background-color: rgba(0, 0, 0, 0.4);
    content: '';
    display: ${({ show }) => (show ? 'block' : 'none')};
    height: 100%;
    left: 0;
    position: fixed;
    top: 0;
    width: 100%;
  }
`;

export const TitleStyled = styled.h1`
  @media (min-width: 700px) {
    color: #1a1a1a;
    font-family: 'Nixie One', sans-serif;
    font-size: 26px;
    letter-spacing: 7px;
    line-height: 26px;
    margin: 50px 0 0;
    padding: 20px 40px 40px;
    text-align: center;
    text-transform: uppercase;
  }
`;

export const BodyStyled = styled.div`
  background-color: white;
  border-radius: 0 0 10px 10px;
  box-sizing: border-box;
  color: #1a1a1a;
  font-family: 'Muli', sans-serif;
  font-size: 16px;
  letter-spacing: 1px;
  line-height: 24px;
  padding: 40px;

  @media (min-width: 700px) {
    height: calc(100% - 136px);
    overflow: auto;
  }

  h2 {
    font-size: 18px;
    font-weight: bold;
    letter-spacing: 3px;
    margin: 0 0 16px;
    text-align: center;
    text-transform: uppercase;

    :not(:first-child) {
      margin-top: 32px;
    }
  }

  p {
    margin: 16px 0 0;
  }

  p:first-child {
    margin-top: 0;
  }
`;
