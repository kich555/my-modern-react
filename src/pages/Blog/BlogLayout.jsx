import { Container, Title } from '@mantine/core';
import { Outlet } from 'react-router-dom';

export default function BlogLayout() {
  return (
    <>
      <Title align="center" color="#fcb66b">
        Our Blog Posts
      </Title>
      <Container size="xl" mx={24} mt={12} align="center">
        <Outlet />
      </Container>
    </>
  );
}
