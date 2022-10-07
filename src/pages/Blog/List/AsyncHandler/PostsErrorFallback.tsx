import { Modal } from '@mantine/core';
import { useEffect, useState } from 'react';
import { FallbackProps } from 'react-error-boundary';
import PostsSkeleton from './PostSkeleton';

export default function PostsErrorHandler({ ...fallbackProps }: FallbackProps) {
  const { error, resetErrorBoundary } = fallbackProps;
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (error.message) {
      return setOpen(true);
    }
  }, [error.message]);

  return (
    <>
      <PostsSkeleton />
      <Modal
        size={321}
        padding={30}
        radius={16}
        transition="pop"
        transitionDuration={300}
        transitionTimingFunction="ease"
        withCloseButton={false}
        centered
        //   overlayColor={theme.colors.dark[9]}
        overlayOpacity={0.75}
        opened={open}
        onClose={resetErrorBoundary}
        styles={{ modal: { backgroundColor: '#E4E2E2' } }}
      >
        error
      </Modal>
    </>
  );
}
