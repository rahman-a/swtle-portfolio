import { extendTheme } from '@chakra-ui/react'
import { Lato } from 'next/font/google'
import { ButtonStyles as Button } from './components/Buttons'

const LatoFont = Lato({
  subsets: ['latin'],
  weight: ['300', '400', '700', '900'],
})

const colors = {
  primary: '#21597F',
  secondary: '#3FA5BA',
  variation: '#FFCA24',
  alert: '#E70000',
  surface: '#F9F9F9',
}

const fonts = {
  body: LatoFont.style.fontFamily,
  Heading: LatoFont.style.fontFamily,
}

export default extendTheme({
  colors,
  fonts,
  components: {
    Button,
  },
})
