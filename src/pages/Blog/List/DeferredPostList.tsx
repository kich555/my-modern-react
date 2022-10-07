import { Outlet } from 'react-router-dom';
import { Box } from '@mantine/core';
import { lazy } from 'react';
import AsyncBoundary from 'components/controller/AsyncBoundary';
import PostsSkeleton from './AsyncHandler/PostSkeleton';
import PostsErrorHandler from './AsyncHandler/PostsErrorFallback';

const Posts = lazy(() => import('components/Posts'));

function DeferredPostListsPage() {
  return (
    <Box sx={{ display: 'flex' }}>
      <AsyncBoundary pendingFallback={<PostsSkeleton />} rejectFallback={PostsErrorHandler}>
        <Posts />
      </AsyncBoundary>
      <Outlet />
    </Box>
  );
}

export default DeferredPostListsPage;
