import { Container } from '@mantine/core';

import { useParams } from 'react-router-dom';
import { lazy } from 'react';
import AsyncBoundary from 'components/controller/AsyncBoundary';
import PostsSkeleton from '../List/AsyncHandler/PostSkeleton';
import PostsErrorHandler from '../List/AsyncHandler/PostsErrorFallback';

// import BlogPost from 'pages/Blog/Detail/components/BlogPost';



const BlogPost = lazy(() => import('pages/Blog/Detail/components/BlogPost'));
function PostDetailPage() {
  const id = useParams().id;
  return (
    <Container>
      <AsyncBoundary pendingFallback={<PostsSkeleton />} rejectFallback={PostsErrorHandler}>
        <BlogPost id={id} />
      </AsyncBoundary>
    </Container>
  );
}

export default PostDetailPage;

