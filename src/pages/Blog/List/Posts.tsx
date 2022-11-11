import { List, Title } from '@mantine/core';
import { Link } from 'react-router-dom';
import classes from './Posts.module.css';
import { useAllPostsQuery } from '../apis';

function Posts() {
  const data = useAllPostsQuery();
  return (
    <List
      className={classes.posts}
      sx={theme => ({
        height: '460px',
        overflow: 'scroll',
        backgroundColor: theme.colors.dark[6],
      })}
      p={16}
      mt={36}
    >
      {data.map(post => (
        <List.Item key={post.id}>
          <Link to={post.id.toString()}>
            <Title order={2} lineClamp={1}>
              {post.title}
            </Title>
          </Link>
        </List.Item>
      ))}
    </List>
  );
}

export default Posts;
