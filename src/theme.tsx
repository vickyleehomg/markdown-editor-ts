import { extendTheme } from '@chakra-ui/react';
import "@fontsource/cabin"

const theme = extendTheme({
  fonts: {
    heading: `'Cabin', sans-serif`,
    body: `'Cabin', sans-serif`,
  },
});

export default theme;