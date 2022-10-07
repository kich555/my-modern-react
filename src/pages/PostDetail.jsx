import { useLoaderData } from 'react-router-dom';
import { Container } from '@mantine/core';
import { getPost } from 'apis';

import BlogPost from '../components/BlogPost';
import NewsletterSignup from '../components/NewsletterSignup';

function PostDetailPage() {
  const postData = useLoaderData();

  return (
    <Container>
      <BlogPost title={postData.title} text={postData.body} />
      <NewsletterSignup />
    </Container>
  );
}

export default PostDetailPage;

export function loader({ params }) {
  const postId = params.id;

  return getPost(postId);
}
