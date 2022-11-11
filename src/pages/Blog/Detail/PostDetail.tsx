import { Container } from '@mantine/core';
import { useParams } from 'react-router-dom';
import { lazy } from 'react';
import invariant from 'tiny-invariant';
import AsyncBoundary from 'components/controller/AsyncBoundary';
import PostsSkeleton from '../List/AsyncHandler/PostSkeleton';
import PostsErrorHandler from '../List/AsyncHandler/PostsErrorFallback';
import DefaultPostDetailPage from './DefaultPostDetail';
import { useSinglePostQuery } from '../apis';

const BlogPost = lazy(() => import('pages/Blog/Detail/components/BlogPost'));

function PostDetailPage() {
  const id = useParams().id;
  invariant(id, 'id is required');

  const { title, body } = useSinglePostQuery(id);

  if (!id) {
    return <DefaultPostDetailPage />;
  }
  return (
    <Container>
      <AsyncBoundary pendingFallback={<PostsSkeleton />} rejectFallback={PostsErrorHandler}>
        <BlogPost title={title} body={body} />
      </AsyncBoundary>
    </Container>
  );
}

export default PostDetailPage;
