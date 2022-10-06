import { Container, Box, Button } from '@mantine/core';
import { useMutation, useQuery } from 'react-query';
import { Link, Outlet } from 'react-router-dom';
import { getTestRequestWithParams } from 'apis';

import { TestRejectFallback, TestPendingFallback } from 'pages/Error/DefaultFallback';
import AsyncBoundary from 'components/AsyncBoundary';

export default function List() {
  const todoId = '1123412';
  const { data } = useQuery(['test'], () => getTestRequestWithParams(todoId), {
    suspense: true,
    refetchOnWindowFocus: true,
    staleTime: 60 * 1000,
  });

  console.log('test', data);

  return (
    <AsyncBoundary pendingFallback={<TestPendingFallback />} rejectFallback={TestRejectFallback}>
      <Container>
        <Box>test</Box>
      </Container>
    </AsyncBoundary>
  );
}
