import { Title, Text } from '@mantine/core';
import { useQuery } from 'react-query';
import classes from './BlogPost.module.css';
import { getPost } from 'apis';

function BlogPost({ id }) {
  const { data } = useQuery([], () => getPost(id));
  console.log('datadatadata', data);
  return (
    <article className={classes.post}>
      <Title color="#fcb66b">{data.title}</Title>
      <Text mt={24}>{data.body}</Text>
    </article>
  );
}

export default BlogPost;
