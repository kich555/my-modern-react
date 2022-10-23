import { List, Skeleton } from '@mantine/core';

import classes from '../Posts.module.css';

function PostsSkeleton() {
  const fakeArray = [1, 2, 3, 4, 5, 6, 7];
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
      {fakeArray.map(post => (
        <List.Item key={post}>
          <Skeleton
            height={57}
            width={288}
            radius={4}
            animate={false}
            sx={theme => ({
              backgroundColor: theme.colors.dark[7],
            })}
          />
        </List.Item>
      ))}
    </List>
  );
}

export default PostsSkeleton;
