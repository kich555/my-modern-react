import MainNavigation from 'components/Navigation/MainNavigation';

function ErrorPage() {
  return (
    <>
      <MainNavigation />
      <main id="error-content">
        <h1>An error occurred!</h1>
      </main>
    </>
  );
}

export default ErrorPage;
