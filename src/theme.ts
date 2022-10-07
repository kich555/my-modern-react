import { ListItemProps, MantineThemeOverride, SkeletonProps } from '@mantine/core';

const ListDefaultProps: Partial<ListItemProps> = {
  styles: { itemWrapper: { width: '100%' } },
};

const SkeletonDefaultProps: Partial<SkeletonProps> = {
  sx: theme => ({
    backgroundColor: theme.colors.dark[7],
    '&:after': {
      backgroundColor: theme.colors.dark[7],
    },
    '&:before': {
      backgroundColor: theme.colors.dark[7],
    },
  }),
};

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
  }),

  components: {
    List: { defaultProps: ListDefaultProps },
    Skeleton: { defaultProps: SkeletonDefaultProps },
  },
};
