import { List } from '@mantine/core';
import { NavLink } from 'react-router-dom';

import classes from './MainNavigation.module.css';
import { prefetchTodos } from './prefetch/apis';

function MainNavigation() {
  const handlePrefetch = () => prefetchTodos();

  return (
    <header className={classes.header}>
      <nav>
        <List>
          <List.Item>
            <NavLink to="/" className={({ isActive }) => (isActive ? classes.active : undefined)} end>
              Home
            </NavLink>
          </List.Item>
          <List.Item onMouseEnter={handlePrefetch}>
            <NavLink to="/blog" className={({ isActive }) => (isActive ? classes.active : undefined)} end>
              List
            </NavLink>
          </List.Item>
          <List.Item>
            <NavLink to="/blog/new" className={({ isActive }) => (isActive ? classes.active : undefined)} end>
              Post
            </NavLink>
          </List.Item>
        </List>
      </nav>
    </header>
  );
}

export default MainNavigation;
