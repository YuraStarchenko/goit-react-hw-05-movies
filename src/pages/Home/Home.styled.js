import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Div = styled.div`
  font-weight: 700;
  font-size: 15px;
  margin: 0;
`;

export const List = styled.ul`
  padding-top: 30px;
  margin-left: 10px;
`;

export const Item = styled.li`
  margin-bottom: 10px;
`;

export const LinkHome = styled(Link)`
  text-decoration: none;
  font-weight: 700;
  text-transform: uppercase;
  :hover {
    color: orangered;
  }
`;
