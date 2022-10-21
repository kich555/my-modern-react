import { Title, Text } from '@mantine/core';

import classes from './BlogPost.module.css';

function BlogPost({ title, body }:BlogPostProps) {
  const defaultTitle = 'Hi there ! Please pick a post you want to read!';
  const defaultText = '';

  return (
    <article className={classes.post}>
      <Title color="#fcb66b">{title || defaultTitle}</Title>
      <Text mt={24}>{body || defaultText}</Text>
    </article>
  );
}

export default BlogPost;

interface BlogPostProps {
  title?: string;
  body?: string;
}
