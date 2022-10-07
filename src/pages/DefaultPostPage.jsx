import { Box, Container } from '@mantine/core';
import BlogPost from '../components/BlogPost';
import NewsletterSignup from '../components/NewsletterSignup';

function DefaultPostPage() {
  const defaultTitle = 'Hi there ! Please pick a post you want to read!';
  const defaultText = '';

  return (
    <Container>
      <Box sx={{ height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
        <BlogPost title={defaultTitle} text={defaultText} />
        <NewsletterSignup />
      </Box>
    </Container>
  );
}

export default DefaultPostPage;
