import { extendTheme } from '@chakra-ui/react'

const theme = extendTheme({
  styles: {
    global: {
      body: {
        bg: '#282c34', // Dark background color
        color: '#AFB6C3', // Light text color
      },
      a: {
        color: '#f9f9f9', // Link color
        opacity: '.9',
        _hover: {
          opacity: '0.8', // Link hover color
        },
      },
    },
  },
  colors: {
    primary: {
      100: '#F2F6FF',
      200: '#D9E4FF',
      300: '#A6C1FF',
      400: '#598BFF',
      500: '#3366FF',
      600: '#274BDB',
      700: '#1A34B8',
      800: '#102694',
      900: '#091C7A',
    },
    success: {
      100: '#EDFFF3',
      200: '#B3FFD6',
      300: '#8CFAC7',
      400: '#51F0B0',
      500: '#00E096',
      600: '#00B383',
      700: '#008F72',
      800: '#007566',
      900: '#00524C',
    },
    info: {
      100: '#F2F8FF',
      200: '#C7E2FF',
      300: '#94CBFF',
      400: '#42AAFF',
      500: '#0095FF',
      600: '#006FD6',
      700: '#0057C2',
      800: '#0041A8',
      900: '#002885',
    },
    warning: {
      100: '#FFFDF2',
      200: '#FFF1C2',
      300: '#FFE59E',
      400: '#FFC94D',
      500: '#FFAA00',
      600: '#DB8B00',
      700: '#B86E00',
      800: '#945400',
      900: '#703C00',
    },
    danger: {
      100: '#FFF2F2',
      200: '#FFD6D9',
      300: '#FFA8B4',
      400: '#FF708D',
      500: '#FF3D71',
      600: '#DB2C66',
      700: '#B81D5B',
      800: '#94124E',
      900: '#700940',
    },
    basic: {
      100: '#FFFFFF',
      200: '#F7F9FC',
      300: '#EDF1F7',
      400: '#E4E9F2',
      500: '#C5CEE0',
      600: '#8F9BB3',
      700: '#2E3A59',
      800: '#222B45',
      900: '#1A2138',
      1000: '#151A30',
      1100: '#101426',
    },
    // Adding transparent colors
    primaryTransparent: {
      100: 'rgba(51, 102, 255, 0.08)',
      200: 'rgba(51, 102, 255, 0.16)',
      300: 'rgba(51, 102, 255, 0.24)',
      400: 'rgba(51, 102, 255, 0.32)',
      500: 'rgba(51, 102, 255, 0.40)',
      600: 'rgba(51, 102, 255, 0.48)',
    },
    successTransparent: {
      100: 'rgba(0, 224, 150, 0.08)',
      200: 'rgba(0, 224, 150, 0.16)',
      300: 'rgba(0, 224, 150, 0.24)',
      400: 'rgba(0, 224, 150, 0.32)',
      500: 'rgba(0, 224, 150, 0.40)',
      600: 'rgba(0, 224, 150, 0.48)',
    },
    infoTransparent: {
      100: 'rgba(0, 149, 255, 0.08)',
      200: 'rgba(0, 149, 255, 0.16)',
      300: 'rgba(0, 149, 255, 0.24)',
      400: 'rgba(0, 149, 255, 0.32)',
      500: 'rgba(0, 149, 255, 0.40)',
      600: 'rgba(0, 149, 255, 0.48)',
    },
    warningTransparent: {
      100: 'rgba(255, 170, 0, 0.08)',
      200: 'rgba(255, 170, 0, 0.16)',
      300: 'rgba(255, 170, 0, 0.24)',
      400: 'rgba(255, 170, 0, 0.32)',
      500: 'rgba(255, 170, 0, 0.40)',
      600: 'rgba(255, 170, 0, 0.48)',
    },
    dangerTransparent: {
      100: 'rgba(255, 61, 113, 0.08)',
      200: 'rgba(255, 61, 113, 0.16)',
      300: 'rgba(255, 61, 113, 0.24)',
      400: 'rgba(255, 61, 113, 0.32)',
      500: 'rgba(255, 61, 113, 0.40)',
      600: 'rgba(255, 61, 113, 0.48)',
    },
    basicTransparent: {
      100: 'rgba(143, 155, 179, 0.08)',
      200: 'rgba(143, 155, 179, 0.16)',
      300: 'rgba(143, 155, 179, 0.24)',
      400: 'rgba(143, 155, 179, 0.32)',
      500: 'rgba(143, 155, 179, 0.40)',
      600: 'rgba(143, 155, 179, 0.48)',
    },
    basicControlTransparent: {
      100: 'rgba(255, 255, 255, 0.08)',
      200: 'rgba(255, 255, 255, 0.16)',
      300: 'rgba(255, 255, 255, 0.24)',
      400: 'rgba(255, 255, 255, 0.32)',
      500: 'rgba(255, 255, 255, 0.40)',
      600: 'rgba(255, 255, 255, 0.48)',
    },
  },
  fonts: {
    heading: 'Roboto, sans-serif',
    body: 'Roboto, sans-serif',
  },
  components: {
    Button: {
      baseStyle: {
        fontWeight: 'bold',
      },
      sizes: {
        md: {
          h: '48px',
          fontSize: 'lg',
          px: '24px',
        },
      },
      variants: {
        solid: {
          bg: 'primary.500',
          color: 'white',
          _hover: {
            bg: 'primary.600',
          },
        },
        outline: {
          borderColor: 'primary.500',
          color: 'primary.500',
          _hover: {
            bg: 'primary.50',
          },
        },
      },
    },
  },
})

export default theme
