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
    fill: ${({ theme }) => theme.color.dark};
  }
`;

export const SkillsList = styled.ul`
  margin: 0;
  padding: 0;
  text-align: center;

  li {
    border: 1px solid ${({ theme }) => theme.color.dark};
    border-radius: 3px;
    color: ${({ theme }) => theme.color.dark};
    display: inline-block;
    padding: 3px 10px;
    margin: 0 0 10px;

    :not(:first-child) {
      margin-left: 10px;
    }
  }
`;
