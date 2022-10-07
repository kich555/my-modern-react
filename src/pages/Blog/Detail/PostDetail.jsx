import { Container } from '@mantine/core';

import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import BlogPost from 'pages/Blog/Detail/components/BlogPost';
import { getPost } from 'apis';
import AsyncBoundary from 'components/controller/AsyncBoundary';
import PostsSkeleton from '../List/AsyncHandler/PostSkeleton';
import PostsErrorHandler from '../List/AsyncHandler/PostsErrorFallback';

function PostDetailPage() {
  const id = useParams().id;
  const { data } = useQuery([], () => getPost(id));
  console.log('datadatadata', data);
  return (
    <Container>
      <AsyncBoundary pendingFallback={<PostsSkeleton />} rejectFallback={PostsErrorHandler}>
        <BlogPost title={data.title} text={data.body} />
      </AsyncBoundary>
    </Container>
  );
}

export default PostDetailPage;
