import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const ImgMovies = styled.img`
  padding-top: 50px;
  background-image: url('/src/img/not-found.png');
`;

export const ListMovies = styled.ul`
  padding-top: 50px;
	margin-left: 10px;
`;

export const ItemMovies = styled.li`
	margin-bottom: 10px;
`;
export const LinkMovies = styled(Link)`
  text-decoration: none;
  font-weight: 700;
  text-transform: uppercase;
  :hover {
    color: orangered;
  }
`;