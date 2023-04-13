import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Container, Header, Logo, Link } from './LayoutHeader.styled.js';

const LayoutHeader = () => {
  return (
    <Container>
      <Header>
        <Logo>Cinema 🎞</Logo>
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
