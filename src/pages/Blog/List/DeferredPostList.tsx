import { defer, Outlet } from 'react-router-dom';
import { Box } from '@mantine/core';

import { getSlowPosts, useReactQuery } from 'apis';
import Posts from 'components/Posts';

import { QUERY_KEY } from 'apis/constants/queryKey';
import AsyncBoundary from 'components/controller/AsyncBoundary';
import PostsSkeleton from './AsyncHandler/PostSkeleton';
import PostsErrorHandler from './AsyncHandler/PostsErrorFallback';

function DeferredPostListsPage() {
  const { data } = useReactQuery(QUERY_KEY.posts, '/posts');
  console.log('dta--->', data);
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

export async function loader() {
  return defer({ posts: getSlowPosts() });
  /**
   * defer객체 안에는 여러 api call이 들어가 있을 수 있고, 만약 
  페이지 구성에 필수로 필요한 데이터라면 posts: await getSlowPosts() 이런식으로 해당 데이터를 받아온 다음에 페이지를 로드할 수 있도록 설정할수도 있다. 
  ex) return defer({ posts: getSlowPosts(), critical: await getCriticalData });
   *  */
}
