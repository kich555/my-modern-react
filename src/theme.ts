import { MantineThemeOverride } from '@mantine/core';

export const theme: MantineThemeOverride = {
  colors: {
    dark: ['#f8f9fa', '#f1f3f5', '#e9ecef', '#dee2e6', '#ced4da', '#adb5bd', '#868e96', '#242424', '#343a40', '#212529'],
  },
  colorScheme: 'dark',
  fontFamily: ' Inter, Avenir, Helvetica, Arial, sans-serif',
  globalStyles: () => ({
    backgroundColor: '#242424',
    color: 'rgba(255, 255, 255, 0.87)',
    fontSynthesis: 'none',
    textRendering: 'optimizeLegibility',
    // -webkit-font-smoothing: antialiased,
    // -moz-osx-font-smoothing: grayscale,
    // -webkit-text-size-adjust: 100%,
  }),
};
