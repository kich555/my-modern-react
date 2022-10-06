import { FallbackProps } from 'react-error-boundary';

export function TestRejectFallback({ ...fallbackProps }: FallbackProps) {
  const { error, resetErrorBoundary } = fallbackProps;
  console.log('error in fall back-->');
  return (
    <div role="alert">
      <p>Something went wrong:</p>
      <pre>{error.message}</pre>
      <button onClick={resetErrorBoundary}>Try again</button>
    </div>
  );
}

export function TestPendingFallback() {
  return (
    <div role="alert">
      <p>loading...</p>
      <pre>network loading...</pre>
    </div>
  );
}
