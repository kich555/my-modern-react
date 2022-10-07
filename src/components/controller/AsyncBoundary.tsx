import { Suspense } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import { QueryErrorResetBoundary } from 'react-query';
import type { ErrorBoundaryPropsWithComponent } from 'react-error-boundary';
import defualtErrorHandler from 'utils/error/defualtErrorHandler';

interface AsyncBoundaryProps extends Partial<ErrorBoundaryPropsWithComponent> {
  children: React.ReactNode;
  pendingFallback: React.ReactNode;
  rejectFallback: ErrorBoundaryPropsWithComponent['FallbackComponent'];
}

function AsyncBoundary({ pendingFallback, children, rejectFallback, onError, ...errorBoundaryProps }: AsyncBoundaryProps) {
  return (
    <QueryErrorResetBoundary>
      {({ reset }) => (
        <ErrorBoundary {...errorBoundaryProps} FallbackComponent={rejectFallback} onError={onError || defualtErrorHandler} onReset={reset}>
          <Suspense fallback={pendingFallback}>{children}</Suspense>
        </ErrorBoundary>
      )}
    </QueryErrorResetBoundary>
  );
}

export default AsyncBoundary;
