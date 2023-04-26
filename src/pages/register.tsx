import { Button, Container, Flex } from '@chakra-ui/react'
import { NextSeo } from 'next-seo'
import { RegistrationForm, RegistrationProgressIndicator } from '@components'
import RegistrationProvider from '../context/Registration-Context'
import { useState } from 'react'

interface IRegisterProps {}

export default function Register(props: IRegisterProps) {
  const [step, setStep] = useState(0)
  return (
    <>
      <NextSeo title='Swtle | Register' />
      <Container minW={{ base: '100%', md: '95%' }}>
        <Flex
          mt={{ base: 10, sm: 12, md: 32 }}
          flexDirection={{ base: 'column', md: 'row' }}
          gap={{ base: 4, xl: 8 }}
          alignItems='flex-start'
          justifyContent={{ base: 'center', md: 'space-evenly' }}
        >
          <RegistrationProvider>
            <RegistrationProgressIndicator step={step} />
            <RegistrationForm step={step} setStep={setStep} />
          </RegistrationProvider>
        </Flex>
      </Container>
    </>
  )
}
