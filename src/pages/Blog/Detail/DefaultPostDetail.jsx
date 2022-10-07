import { Box, Container } from '@mantine/core';
import BlogPost from 'pages/Blog/Detail/components/BlogPost';

function DefaultPostDetailPage() {
  const defaultTitle = 'Hi there ! Please pick a post you want to read!';
  const defaultText = '';

  return (
    <Container>
      <Box sx={{ height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
        <BlogPost title={defaultTitle} text={defaultText} />
      </Box>
    </Container>
  );
}

export default DefaultPostDetailPage;
