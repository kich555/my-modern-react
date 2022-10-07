import { Route, Routes, BrowserRouter } from 'react-router-dom';

import { lazy, Suspense } from 'react';
//page
// import RootLayout from 'pages/RootLayout';
// import ErrorPage from 'pages/Error/Error';
// import DefaultPostDetailPage from 'pages/Blog/Detail/DefaultPostDetail';
// import BlogLayout from 'pages/Blog/BlogLayout';
// import DeferredPostListsPage from 'pages/Blog/List/DeferredPostList';
// import NewPostPage from 'pages/NewPost/NewPost';
// import PostDetailPage from 'pages/Blog/Detail/PostDetail';
// import WelcomePage from 'pages/Home/Welcome';

const RootLayout = lazy(() => import('pages/RootLayout'));
const DefaultPostDetailPage = lazy(() => import('pages/Blog/Detail/DefaultPostDetail'));
const BlogLayout = lazy(() => import('pages/Blog/BlogLayout'));
const DeferredPostListsPage = lazy(() => import('pages/Blog/List/DeferredPostList'));
const NewPostPage = lazy(() => import('pages/NewPost/NewPost'));
const PostDetailPage = lazy(() => import('pages/Blog/Detail/PostDetail'));
const WelcomePage = lazy(() => import('pages/Home/Welcome'));

const Router = () => (
  <BrowserRouter>
    <Suspense fallback={<div>loading</div>}>
      <Routes>
        <Route path="/" element={<RootLayout />}>
          <Route index element={<WelcomePage />} />
          <Route path="/blog" element={<BlogLayout />}>
            <Route element={<DeferredPostListsPage />}>
              <Route index element={<DefaultPostDetailPage />} />
              <Route path=":id" element={<PostDetailPage />} />
            </Route>
          </Route>
          <Route path="/blog/new" element={<NewPostPage />} />
        </Route>
      </Routes>
    </Suspense>
  </BrowserRouter>
);

export default Router;

// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <RootLayout />,
//     errorElement: <ErrorPage />,
//     children: [
//       { index: true, element: <WelcomePage /> },
//       {
//         path: '/blog',
//         element: <BlogLayout />,
//         children: [
//           {
//             index: true,
//             element: <DeferredPostListsPage />,
//             loader: deferredBlogPostsLoader,
//           },
//           {
//             path: ':id',
//             element: <PostDetailPage />,
//             loader: blogPostLoader,
//           },
//         ],
//       },
//       {
//         path: '/blog/new',
//         element: <NewPostPage />,
//         action: newPostAction,
//       },
//     ],
//   },
//   {
//     path: '/newsletter',
//     action: newsletterAction,
//   },
// ]);
