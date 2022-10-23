import { useQuery } from 'react-query';
import invariant from 'tiny-invariant';
import request from 'apis/request';
import { TABLE } from 'apis/constants/queryKey';

const { POST } = TABLE;

async function getPost(id: string): Promise<SinglePostData> {
  return request({ url: `/posts/${id}` });
}

export const useSinglePostQuery = (id: string) => {
  const { data } = useQuery([POST, id], () => getPost(id));
  invariant(data, 'data is required');
  const { title, body } = data;
  return { title, body };
};

async function getPosts(): Promise<AllPostsData> {
  return request({ url: '/posts' });
}

export const useAllPostsQuery = () => {
  const { data } = useQuery([POST, 'all'], getPosts);
  invariant(data, 'data is required');
  return data;
};

interface SinglePostData {
  id: number;
  title: string;
  body: string;
  userId: number;
}

type AllPostsData = SinglePostData[];
