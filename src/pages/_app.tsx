import '@/src/styles/globals.css'
import type { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'
import { appWithTranslation } from 'next-i18next'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { useChakraTheme } from '../hooks/useChakraTheme'
import { Layout, ChatwootLiveChat } from '@components'
import { useEffect } from 'react'

export default appWithTranslation(function App({
  Component,
  pageProps,
}: AppProps) {
  const theme = useChakraTheme()
  useEffect(() => {
    AOS.init({
      duration: 1000,
    })
  }, [])
  return (
    <ChakraProvider resetCSS theme={theme}>
      <ChatwootLiveChat />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ChakraProvider>
  )
})
