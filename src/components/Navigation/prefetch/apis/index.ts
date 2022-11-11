import { QueryClient } from 'react-query';

import { TABLE } from 'apis/constants/queryKey';
import request from 'apis/request';
// import { queryClient } from 'index';
const { POST } = TABLE;

export const queryClient = new QueryClient({});

// The results of this query will be cached like a normal query
export const prefetchTodos = async () => await queryClient.prefetchQuery([POST, 'all'], () => request({ url: '/posts' }));
