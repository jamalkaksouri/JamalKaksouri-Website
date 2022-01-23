import { extendTheme } from '@chakra-ui/react'
import { mode } from '@chakra-ui/theme-tools'

const styles = {
  global: props => ({
    body: {
      bg: mode('#f0e7db', '#202023')(props)
    }
  })
}

const components = {
  Heading: {
    variants: {
      'section-title': {
        textDecoration: 'underline',
        fontSize: 20,
        textUnderlineOffset: 6,
        textDecorationColor: '#525252',
        textDecorationThickness: 4,
        marginTop: 3,
        marginBottom: 4
      }
    }
  },
  Link: {
    baseStyle: props => ({
      color: mode('#dc2626', '#fb923c')(props),
      textDecoration: 'none !important',
      boxShadow: 'none !important'
    })
  },
  Button: { baseStyle: { _focus: { boxShadow: 'none' } } }
}

const fonts = {
  heading: "'Dancing Script'",
  body: "'Lato'"
}

const colors = {
  glassTeal: '#88ccca',
  yellow300: '#ffc107',
  lime300: '#bef264',
  cyan500: '#06b6d4'
}

const config = {
  initialColorMode: 'dark',
  useSystemColorMode: true
}

const theme = extendTheme({
  config,
  styles,
  components,
  fonts,
  colors
})
export default theme
