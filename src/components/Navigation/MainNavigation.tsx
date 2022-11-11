import { List } from '@mantine/core';
import { NavLink } from 'react-router-dom';

import classes from './MainNavigation.module.css';
import { prefetchTodos } from './prefetch/apis';

function MainNavigation() {
  const handlePrefetch = () => prefetchTodos();
  const { header, active } = classes;

  return (
    <header className={header}>
      <nav>
        <List>
          <List.Item>
            <NavLink to="/" className={({ isActive }) => (isActive ? active : '')} end>
              Home
            </NavLink>
          </List.Item>
          <List.Item onMouseEnter={handlePrefetch}>
            <NavLink to="/blog" className={({ isActive }) => (isActive ? active : '')} end>
              List
            </NavLink>
          </List.Item>
          <List.Item>
            <NavLink to="/blog/new" className={({ isActive }) => (isActive ? active : '')} end>
              Post
            </NavLink>
          </List.Item>
        </List>
      </nav>
    </header>
  );
}

export default MainNavigation;
