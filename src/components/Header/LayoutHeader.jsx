import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Container, Header, Logo, Link } from './LayoutHeader.styled.js';
import { SiThemoviedatabase } from 'react-icons/si';

const LayoutHeader = () => {
  return (
    <Container>
      <Header>
        <Logo>
          Cinema<SiThemoviedatabase />
        </Logo>
        <nav>
          <Link to="/" end>
            Home
          </Link>
          <Link to="/movies">Movies</Link>
          {/* <Link to="/about">About</Link> */}
        </nav>
      </Header>
      <Suspense fallback={<div>Loading page...</div>}>
        <Outlet />
      </Suspense>
    </Container>
  );
};

export default LayoutHeader;
