import styled from 'styled-components';

export const ContentStyled = styled.div`
  @media (min-width: 700px) {
    background-color: #ebf5fb;
    box-sizing: border-box;
    height: 600px;
    left: 50%;
    max-height: 90%;
    max-width: 90%;
    padding: 10px;
    position: absolute;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 700px;
  }
`;

export const ContentContainerStyled = styled.div`
  @media (min-width: 700px) {
    background-color: rgba(0, 0, 0, 0.1);
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
    background-color: #21618c;
    color: #ebf5fb;
    font-family: 'Open Sans Condensed', sans-serif;
    font-size: 50px;
    letter-spacing: 10px;
    line-height: 50px;
    margin: 0 70px 0 0;
    padding-left: 10px;
    text-transform: uppercase;
  }
`;

export const BodyStyled = styled.div`
  color: #2c3e50;
  font-family: 'BenchNine', sans-serif;
  font-size: 24px;
  letter-spacing: 1px;

  @media (min-width: 700px) {
    height: calc(100% - 80px);
    margin: 20px 70px 10px 10px;
    overflow: auto;
  }

  p {
    margin: 16px 0 0;
  }

  p:first-child {
    margin-top: 0;
  }
`;
