import invariant from 'tiny-invariant';
import { sleep } from 'utils/sleep';
import request from './request';

export interface ResponseData<T = any> {
  code: number;
  data: T;
  message: string;
  success: true | false;
}

//for example
interface TodoData {
  completed: boolean;
  id: number;
  title: string;
  userId: string;
}

/**
@author kich555
@description axios async reeponse flow는 아래와 같이 구성되었음을 알림
Promise에 의해 반환되는 response는 아래와 같은 흐름으로 wrapping 되어있다.
AxiosResponse -> axios에서 제공하는 기본적인 response 구조체
ResponseData -> back-end developer에 의해 wrapping된 api response 구조체
SpecificData ->  UI에 영향을 끼치게 될 real data
*/
export const getTestRequestWithoutParams = async (): Promise<ResponseData<TodoData>> => request({ url: `/todos/1` });

export const getTestRequestWithParams = async (todoId: string): Promise<ResponseData<TodoData>> =>
  request({
    url: `/todos/${todoId}`,
    // specificInterceptor: {
    //   request: config => {
    //     console.log('for prevent format on save');
    //   // 요청을 보내기 전에 수행할 로직
    //     return config;
    //   },
    //   response: response => response,
    // },
  });

const data = {
  title: 'foo',
  body: 'bar',
  userId: 1,
};

const config = {
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
};
export const postTestRequest = async () => request({ method: 'post', url: '/posts', data, config });

export async function getPosts() {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts');
  if (!response.ok) {
    throw new Response('Failed to fetch posts.', { status: 500 });
  }
  return response.json();
}

export async function getSlowPosts() {
  await sleep(2000);
  const response = await fetch('https://jsonplaceholder.typicode.com/posts');
  if (!response.ok) {
    throw new Response('Failed to fetch posts.', { status: 500 });
  }
  return response.json();
}

export async function getPost(id: string) {
  return fetch('https://jsonplaceholder.typicode.com/posts/' + id);
}

export async function savePost(data: FormData) {
  const title = data.get('title');
  const body = data.get('post-text');
  invariant(typeof title === 'string', `${title} must be a string`);
  invariant(typeof body === 'string', `${body} must be a string`);

  const post = { title, body };

  if (post.title.trim().length < 5 || post.body.trim().length < 10) {
    return { isError: true, message: 'Invalid input data provided.', status: 401 };
  }

  const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    body: JSON.stringify(post),
    headers: {
      'Content-Type': 'application/json',
    },
  });

  if (!response.ok) {
    throw response;
  }
}
