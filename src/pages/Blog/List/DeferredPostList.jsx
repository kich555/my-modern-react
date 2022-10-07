import { Suspense } from 'react';
import { useLoaderData, defer, Await, Outlet } from 'react-router-dom';
import { Box } from '@mantine/core';
import { getSlowPosts } from 'apis';
import Posts from 'components/Posts';

function DeferredPostListsPage() {
  const loaderData = useLoaderData();

  return (
    <Box sx={{ display: 'flex' }}>
      <Suspense fallback={<p>Loading...</p>}>
        <Await resolve={loaderData.posts} errorElement={<p>Error loading blog posts.</p>}>
          {loadedPosts => <Posts blogPosts={loadedPosts} />}
        </Await>
      </Suspense>
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