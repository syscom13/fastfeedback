// 1. Import `extendTheme`
import { extendTheme } from '@chakra-ui/react';

// 2. Call `extendTheme` and pass your custom values
export default extendTheme({
  fonts: {
    body:
      'Inter,-apple-system,BlinkMacSystemFont,"Segoe UI",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol',
  },
  colors: {
    brandBg: '#99fffe',
    brandText: '#194d4c',
  },
});
