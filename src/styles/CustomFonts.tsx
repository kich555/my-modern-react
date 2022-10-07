import { Global } from '@mantine/core';


export function CustomFonts() {
  return (
    <Global
      styles={[
        {
          '@font-face': {
            fontFamily: 'DINCondensed-Bold',
            src: `local('DINCondensed-Bold'),url('public/asset/font/DINCondensed-Bold/D-DINCondensed-Bold.woff2') format('truetype'),url('public/asset/font/DINCondensed-Bold/D-DINCondensed-Bold.woff') format('truetype') url('public/asset/font/DINCondensed-Bold/D-DINCondensed-Bold.ttf') format('truetype')`,
            fontWeight: 700,
            fontStyle: 'normal',
            fontDisplay: 'optional',
          },
        },
      ]}
    />
  );
}
