import { json, useLoaderData, useNavigation, defer } from 'react-router-dom';
import { getPosts } from 'apis';
import { sleep } from 'utils/sleep';
import Posts from 'components/Posts';

function PostListPage() {
  const loaderData = useLoaderData();

  return (
    <>
      <Posts blogPosts={loaderData} />
    </>
  );
}

export default PostListPage;

export async function loader({ request, params }) {
  // await sleep(2000);
  // return json([{ id: 'p1', title: 'First Post' }]); // same as return [] without json(...) (because useLoaderData() parses JSON automatically)
  // return fetch('https://jsonplaceholder.typicode.com/posts');
  return getPosts();
}
