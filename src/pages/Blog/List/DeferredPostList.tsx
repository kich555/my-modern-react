import { Outlet } from 'react-router-dom';
import { Box } from '@mantine/core';
import Posts from 'components/Posts';
import { QUERY_KEY } from 'apis/constants/queryKey';
import AsyncBoundary from 'components/controller/AsyncBoundary';
import PostsSkeleton from './AsyncHandler/PostSkeleton';
import PostsErrorHandler from './AsyncHandler/PostsErrorFallback';
import { useReactQuery } from 'apis/useReactQuery';

function DeferredPostListsPage() {
  const { data } = useReactQuery({ table: QUERY_KEY.posts, id: '8' }, '/posts');
  return (
    <Box sx={{ display: 'flex' }}>
      <AsyncBoundary pendingFallback={<PostsSkeleton />} rejectFallback={PostsErrorHandler}>
        <Posts blogPosts={data} />
      </AsyncBoundary>
      <Outlet />
    </Box>
  );
}

export default DeferredPostListsPage;
