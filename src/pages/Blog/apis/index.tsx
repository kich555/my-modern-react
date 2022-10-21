import { useQuery } from 'react-query';
import invariant from 'tiny-invariant';
import request from 'apis/request';

interface SinglePostData {
  id: number;
  title: string;
  body: string;
  userId: number;
}

async function getPost(id: string): Promise<SinglePostData> {
  return request({ url: `/posts/${id}` });
}

export const useSinglePost = (id: string) => {
  const { data } = useQuery([], () => getPost(id));
  invariant(data, 'data is required');
  const { title, body } = data;
  return { title, body };
};

async function getPosts() {
  const response = await request({ url: '/posts' });
  console.log('response', response);
  if (!response) {
    throw new Response('Failed to fetch posts.', { status: 500 });
  }
  return response.data;
}