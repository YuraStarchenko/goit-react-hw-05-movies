import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Div = styled.div`
  font-weight: 700;
  font-size: 15px;
  margin: 0;
`;

export const List = styled.ul`
  padding: 30px 0;
`;

export const Item = styled.li`
  margin-bottom: 5px;
  border-radius: 10px;
  padding: 10px;
`;

export const LinkHome = styled(Link)`
  text-decoration: none;
  font-weight: 700;
  display: flex;
  text-transform: uppercase;
  :hover {
    color: orangered;
  }
`;

export const Icon = styled.div`
  margin-right: 10px;
`;
