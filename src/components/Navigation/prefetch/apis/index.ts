import { getPost, getPosts } from 'apis';
import { QUERY_KEY } from 'apis/constants/queryKey';
import request from 'apis/request';
import { queryClient } from 'index';
const { posts, post, createPost } = QUERY_KEY;

// The results of this query will be cached like a normal query
export const prefetchTodos = async () => await queryClient.prefetchQuery([posts], () => request({ url: '/posts' }));

export const prefetchTodo = async (id: string) => await queryClient.prefetchQuery([post, id], () => getPost(id));
