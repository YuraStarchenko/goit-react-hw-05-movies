import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Container = styled.div`
  max-width: 960px;
  margin: 0 auto;
  padding: 0 16px;
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  padding: 8px 0;
  margin-bottom: 16px;
  border-bottom: 1px solid #94a3b8;

  > nav {
    display: flex;
  }
`;

export const Logo = styled.p`
  font-weight: 700;
	font-size: 23px;
  margin: 0;
`;

export const Link = styled(NavLink)`
  padding: 8px 16px;
  border-radius: 25px;
  text-decoration: none;
  color: black;
  opacity: 2;
  font-weight: 500;
  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    opacity: 0.9;
  }

  &.active {
    color: white;
    background-color: #355f99;
  }
`;
