import { Outlet } from 'react-router-dom';
import { Box, Container } from '@mantine/core';
import MainNavigation from '../components/MainNavigation';

function RootLayout() {
  return (
    <>
      <MainNavigation />
      <Box component="main" sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <Outlet />
      </Box>
    </>
  );
}

export default RootLayout;
