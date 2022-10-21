import { Box, Container } from '@mantine/core';
import BlogPost from 'pages/Blog/Detail/components/BlogPost';

function DefaultPostDetailPage() {
  return (
    <Container>
      <Box sx={{ height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
        <BlogPost />
      </Box>
    </Container>
  );
}

export default DefaultPostDetailPage;
