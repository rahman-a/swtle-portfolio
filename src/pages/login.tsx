import { useState } from 'react'
import {
  Box,
  Container,
  Divider,
  Flex,
  Text,
  VStack,
  useBreakpointValue,
} from '@chakra-ui/react'
import { NextSeo } from 'next-seo'
import Image from 'next/image'
import { LoginCode, LoginForm } from '../components'

export type ILoginForm = {
  email: string
  password: string
}

interface ILoginProps {}

export default function Login(props: ILoginProps) {
  const [isLoginCode, setIsLoginCode] = useState(false)
  const [isRememberMe, setIsRememberMe] = useState(false)
  const isMobile = useBreakpointValue({ base: true, md: false })
  const imageWidth = useBreakpointValue(
    { md: 350, lg: 400, xl: 600 },
    { fallback: '400' }
  )
  const imageHeight = useBreakpointValue(
    { md: 250, lg: 250, xl: 450 },
    { fallback: '250' }
  )

  const logoWidth = useBreakpointValue(
    { md: 150, lg: 200, xl: 400 },
    { fallback: '200' }
  )

  const logoHeight = useBreakpointValue(
    { md: 100, lg: 150, xl: 250 },
    { fallback: '150' }
  )

  const submitHandler = (data: ILoginForm) => {
    console.log({ ...data, isRememberMe })
    setIsLoginCode(true)
  }
  const verifyLoginCodeHandler = (data: { code: string }) => {
    console.log(data)
  }
  return (
    <>
      <NextSeo title='Swtle | Login' />
      <Container minW='95%'>
        <Flex
          mt='32'
          flexDirection={{ base: 'column-reverse', md: 'row' }}
          alignItems='flex-start'
          justifyContent='space-between'
        >
          <VStack
            my={{ base: 8, md: 0 }}
            alignItems='flex-start'
            width={{ base: '100%', md: '45%' }}
          >
            {isLoginCode ? (
              <LoginCode verifyLoginCodeHandler={verifyLoginCodeHandler} />
            ) : (
              <LoginForm
                submitHandler={submitHandler}
                setIsRememberMe={setIsRememberMe}
                isRememberMe={isRememberMe}
              />
            )}
          </VStack>
          <Divider
            orientation={isMobile ? 'horizontal' : 'vertical'}
            bg='gray.600'
            height={{ base: '2px', md: 80 }}
          />
          <Box position='relative' mb={{ base: 8, md: 0 }}>
            <Box
              position='absolute'
              top='50%'
              left='50%'
              width='100%'
              height='100%'
              display='flex'
              alignItems='center'
              justifyContent='center'
              flexDirection='column'
              transform='translate(-50%, -50%)'
              bg='rgba(0,0,0,0.5)'
            >
              <Image
                width={logoWidth ?? 200}
                height={logoHeight ?? 150}
                src='/images/logo-word.svg'
                alt='swtle'
              />
            </Box>
            {isMobile ? (
              <Image
                src='/images/skyline-long.png'
                alt='skyline'
                width={900}
                height={500}
              />
            ) : (
              <Image
                src='/images/skyline.png'
                alt='skyline'
                width={imageWidth ?? 400}
                height={imageHeight ?? 250}
              />
            )}
          </Box>
        </Flex>
      </Container>
    </>
  )
}
