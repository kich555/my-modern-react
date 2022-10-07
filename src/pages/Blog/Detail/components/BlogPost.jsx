import { Title, Text } from '@mantine/core';
import classes from './BlogPost.module.css';

function BlogPost({ title, text }) {
  return (
    <article className={classes.post}>
      <Title color="#fcb66b">{title}</Title>
      <Text mt={24}>{text}</Text>
    </article>
  );
}

export default BlogPost;
