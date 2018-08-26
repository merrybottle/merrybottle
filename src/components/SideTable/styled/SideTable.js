import styled from 'styled-components';

export const SideTableStyled = styled.div`
  bottom: 0;
  height: 220px;
  position: absolute;
  left: calc(50% + 250px);
  width: 180px;

  @media (min-width: ${({ theme }) => theme.breakpoint.large.min}) {
    left: calc(50% + 320px);
  }
`;
