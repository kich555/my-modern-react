import { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';

const Home = lazy(() => import('./pages/Home'));
const Write = lazy(() => import('./pages/Home/Write'));
const List = lazy(() => import('./pages/Home/List'));

const Routers = () => (
  <Routes>
    <Route
      path="/"
      element={
        <Suspense fallback={<div>Router loading....</div>}>
          <Home />
        </Suspense>
      }
    />
    <Route
      path="list"
      element={
        <Suspense fallback={<div>Router loading....</div>}>
          <List />
        </Suspense>
      }
    />
    <Route
      path="write"
      element={
        <Suspense fallback={<div>Router loading....</div>}>
          <Write />
        </Suspense>
      }
    />
  </Routes>
);

export default Routers;
