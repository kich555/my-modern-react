import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';

//page
import RootLayout from 'pages/RootLayout';
import ErrorPage from 'pages/Error/Error';
import DefaultPostDetailPage from 'pages/Blog/Detail/DefaultPostDetail';
import BlogLayout from 'pages/Blog/BlogLayout';
import BlogPostsPage, { loader as blogPostsLoader } from 'pages/Blog/List/PostList';
import DeferredPostListsPage, { loader as deferredBlogPostsLoader } from 'pages/Blog/List/DeferredPostList';
import NewPostPage, { action as newPostAction } from 'pages/NewPost/NewPost';
import { action as newsletterAction } from 'pages/Blog/Detail/Newsletter';
import PostDetailPage, { loader as blogPostLoader } from 'pages/Blog/Detail/PostDetail';
import WelcomePage from 'pages/Home/Welcome';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />} errorElement={<ErrorPage />}>
      <Route index element={<WelcomePage />} />
      <Route path="/blog" element={<BlogLayout />}>
        <Route element={<DeferredPostListsPage />}>
          <Route index element={<DefaultPostDetailPage />} />
          <Route path=":id" element={<PostDetailPage />} loader={blogPostLoader} />
        </Route>
      </Route>
      <Route path="/blog/new" element={<NewPostPage />} action={newPostAction} />
      {/* <Route path="/newsletter" action={newsletterAction} /> */}
    </Route>,
  ),
);

export default router;

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
