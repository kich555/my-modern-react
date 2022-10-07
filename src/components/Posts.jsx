import { List, Title } from '@mantine/core';
import { Link } from 'react-router-dom';
import classes from './Posts.module.css';

function Posts({ blogPosts }) {
  return (
    <List className={classes.posts} styles={{ itemWrapper: { width: '100%' } }}>
      {blogPosts.map(post => (
        <List.Item key={post.id}>
          <Link to={post.id.toString()}>
            <Title order={2}>{post.title}</Title>
          </Link>
        </List.Item>
      ))}
    </List>
  );
}

export default Posts;
