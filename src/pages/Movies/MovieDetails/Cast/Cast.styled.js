import styled from 'styled-components';

export const CastWrapper = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr;
  gap: 0px 5px;
  grid-auto-flow: row;
  grid-template-areas: '. . . . . . . .';
`;

export const CastItem = styled.li`
  display: flex;
  flex-direction: column;
`;
