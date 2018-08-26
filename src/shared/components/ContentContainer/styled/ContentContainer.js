import styled from 'styled-components';

export const IconStyled = styled.span`
  background-color: white;
  border: 10px solid ${({ theme }) => theme.color.primary};
  border-radius: 50%;
  box-sizing: border-box;
  display: inline-block;
  height: 100px;
  left: calc(50% - 50px);
  margin: 0 auto;
  position: absolute;
  text-align: center;
  top: -50px;
  width: 100px;

  svg {
    height: 50px;
    padding-top: 15px;
    width: 50px;

    path {
      fill: ${({ theme }) => theme.color.dark};
    }
  }
`;

export const ContentStyled = styled.div`
  background-color: ${({ theme }) => theme.color.primary};
  border-radius: 10px;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile.max}) {
    padding: 20px;
    position: relative;
  }

  @media (min-width: ${({ theme }) => theme.breakpoint.small.min}) {
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
  @media (max-width: ${({ theme }) => theme.breakpoint.mobile.max}) {
    margin: 0 20px 20px;

    & + & {
      margin-top: 90px;
    }
  }

  @media (min-width: ${({ theme }) => theme.breakpoint.small.min}) {
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
  color: ${({ theme }) => theme.color.dark};
  font-family: ${({ theme }) => theme.font.title};
  font-size: 20px;
  letter-spacing: 4px;
  line-height: 20px;
  margin: 30px 0 0;
  padding: 10px 20px 20px;
  text-align: center;
  text-transform: uppercase;

  @media (min-width: ${({ theme }) => theme.breakpoint.small.min}) {
    font-size: 26px;
    letter-spacing: 7px;
    line-height: 26px;
    margin: 50px 0 0;
    padding: 20px 40px 40px;
  }
`;

export const BodyStyled = styled.div`
  background-color: white;
  border-radius: 0 0 10px 10px;
  box-sizing: border-box;
  color: ${({ theme }) => theme.color.dark};
  font-family: ${({ theme }) => theme.font.body};
  font-size: 16px;
  letter-spacing: 1px;
  line-height: 24px;
  padding: 20px;

  @media (min-width: ${({ theme }) => theme.breakpoint.small.min}) {
    height: calc(100% - 136px);
    overflow: auto;
    padding: 40px;
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
    text-align: ${({ center }) => (center ? 'center' : 'left')};
  }

  p:first-child {
    margin-top: 0;
  }

  a {
    color: #29554c;
    text-decoration: none;

    :hover {
      text-decoration: underline;
    }
  }
`;
