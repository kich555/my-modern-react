import { Link, Outlet } from 'react-router-dom';
import { Stack, Text, Button } from '@mantine/core';

export default function Home() {
  return (
    <Stack align="center" mt={50}>
      <Text size="xl" weight={500}>
        Welcome to Mantine!
      </Text>
      <Button>Click the button</Button>
    </Stack>
  );
}
