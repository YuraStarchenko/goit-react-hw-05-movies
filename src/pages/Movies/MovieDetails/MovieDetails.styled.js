import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const StyledLink = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: 4px;
  padding: 8px 0;
  color: black;
  text-decoration: none;
  font-weight: 500;
  text-transform: uppercase;

  :hover {
    color: orangered;
  }
`;

export const MovieInfo = styled.div``;
export const MovieText = styled.div``;
export const MenuList = styled.ul``;
export const MenuItem = styled.li``;
