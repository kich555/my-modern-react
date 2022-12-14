import { Outlet } from 'react-router-dom';
import { Box } from '@mantine/core';
import MainNavigation from '../components/Navigation/MainNavigation';

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
