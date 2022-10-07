import { Route, Routes, BrowserRouter } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import { LoadingOverlay } from '@mantine/core';

const RootLayout = lazy(() => import('pages/RootLayout'));
const DefaultPostDetailPage = lazy(() => import('pages/Blog/Detail/DefaultPostDetail'));
const BlogLayout = lazy(() => import('pages/Blog/BlogLayout'));
const DeferredPostListsPage = lazy(() => import('pages/Blog/List/DeferredPostList'));
const NewPostPage = lazy(() => import('pages/NewPost/NewPost'));
const PostDetailPage = lazy(() => import('pages/Blog/Detail/PostDetail'));
const WelcomePage = lazy(() => import('pages/Home/Welcome'));

const Router = () => (
  <BrowserRouter>
    <Suspense fallback={<LoadingOverlay visible={true} />}>
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
