import { useEffect, useRef, useState, Dispatch, SetStateAction } from 'react'
import { ArrowBackIcon, CheckCircleIcon, CheckIcon } from '@chakra-ui/icons'
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  ModalCloseButton,
  Button,
  Heading,
  Text,
  Box,
  ModalFooter,
  PinInput,
  PinInputField,
  HStack,
  Flex,
  Input,
  Spinner,
  useToast,
  IconButton,
} from '@chakra-ui/react'
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'
import Countdown, { zeroPad } from 'react-countdown'
import { useRouter } from 'next/router'
import userApi from '../../services/credentials'

type User = {
  id: string
  phone: string
}

interface IRegistrationFinishProps {
  isOpen: boolean
  onClose: () => void
  user: {
    id: string
    phone: string
  }
  setUser: Dispatch<SetStateAction<User | null>>
}

export default function RegistrationFinish({
  isOpen,
  onClose,
  user,
  setUser,
}: IRegistrationFinishProps) {
  const pinInputRef = useRef<HTMLInputElement>(null)
  const [insidePhone, setInsidePhone] = useState<any>('')
  const [isCodeSent, setIsCodeSent] = useState<boolean>(false)
  const [sendingCodeLoading, setSendingCodeLoading] = useState<boolean>(false)
  const [isVerificationPhoneLoading, setIsVerificationPhoneLoading] =
    useState<boolean>(false)
  const [isUpdatingPhoneLoading, setIsUpdatingPhoneLoading] =
    useState<boolean>(false)
  const [isPhoneVerified, setIsPhoneVerified] = useState<boolean>(false)
  const router = useRouter()
  const toast = useToast()

  const sendPhoneVerificationCode = async () => {
    setSendingCodeLoading(true)
    try {
      await userApi.sendVerifyCodeToPhone(user.id)
      setIsCodeSent(true)
    } catch (error: any) {
      if (error.response) {
        toast({
          title: 'Error',
          description: error.response.data.message,
          position: 'top',
          status: 'error',
          duration: 10000,
          isClosable: true,
        })
      }
    } finally {
      setSendingCodeLoading(false)
    }
  }

  const updatePhoneHandler = async () => {
    setIsUpdatingPhoneLoading(true)
    console.log('🚀insidePhone:', insidePhone)
    if (!insidePhone?.startsWith('+971') || insidePhone === '+971') {
      toast({
        title: 'Error',
        description: 'Please enter a valid UAE phone number',
        position: 'top',
        status: 'error',
        duration: 10000,
        isClosable: true,
      })
      setIsUpdatingPhoneLoading(false)
      return
    }
    try {
      await userApi.updatePhoneNumber(user.id, insidePhone)
      await sendPhoneVerificationCode()
    } catch (error: any) {
      if (error.response) {
        toast({
          title: 'Error',
          description: error.response.data.message,
          position: 'top',
          status: 'error',
          duration: 10000,
          isClosable: true,
        })
      }
    } finally {
      setIsUpdatingPhoneLoading(false)
    }
  }

  const phoneVerificationHandler = async (code: string) => {
    setIsVerificationPhoneLoading(true)
    try {
      await userApi.verifyPhoneCode(code, user.id)
      setIsPhoneVerified(true)
    } catch (error: any) {
      if (error.response) {
        toast({
          title: 'Error',
          description: error.response.data.message,
          position: 'top',
          status: 'error',
          duration: 10000,
          isClosable: true,
        })
      }
    } finally {
      setIsVerificationPhoneLoading(false)
    }
  }

  const closeModalHandler = () => {
    setIsCodeSent(false)
    setIsPhoneVerified(false)
    setInsidePhone('')
    setUser(null)
    onClose()
    router.push('/login')
  }

  useEffect(() => {
    if (isCodeSent) {
      pinInputRef.current?.focus()
    }
  }, [isCodeSent])
  return (
    <Modal
      size='2xl'
      closeOnOverlayClick={false}
      isOpen={isOpen}
      onClose={closeModalHandler}
    >
      <ModalOverlay />
      <ModalContent>
        <ModalCloseButton />
        <ModalBody
          position='relative'
          display='flex'
          flexDirection='column'
          alignItems='center'
          justifyContent='center'
        >
          {isCodeSent && !isPhoneVerified && (
            <IconButton
              aria-label='back'
              icon={<ArrowBackIcon />}
              position='absolute'
              top='10px'
              left='10px'
              onClick={() => setIsCodeSent(false)}
            />
          )}
          <CheckCircleIcon color='secondary' boxSize={{ base: 28 }} />
          <Heading as='h2' fontSize='6xl' fontWeight='semibold' py={4}>
            Congratulation
          </Heading>
          <Heading
            as='h4'
            fontSize='md'
            letterSpacing='wide'
            textAlign='center'
            color='primary'
          >
            Your Account has been Created
          </Heading>

          {isCodeSent && !isPhoneVerified ? (
            <Flex alignItems='center' flexDirection='column' mb={4}>
              <Text as='p' fontSize='lg' py={4}>
                A code has been sent to your phone, please enter it below
              </Text>
              <HStack position='relative'>
                <PinInput
                  otp
                  size='lg'
                  onComplete={(code) => phoneVerificationHandler(code)}
                  isDisabled={isVerificationPhoneLoading}
                >
                  <PinInputField ref={pinInputRef} />
                  <PinInputField />
                  <PinInputField />
                  <PinInputField />
                  <PinInputField />
                  <PinInputField />
                </PinInput>
                <Spinner
                  color='gray.500'
                  position='absolute'
                  left='50%'
                  transform='translateX(-50%)'
                  display={isVerificationPhoneLoading ? 'block' : 'none'}
                />
              </HStack>
            </Flex>
          ) : (
            !isPhoneVerified && (
              <Box mt={8} textAlign='center'>
                <Text as='p' fontSize='lg'>
                  To verify your phone number, click the next button
                </Text>
                <Button
                  onClick={sendPhoneVerificationCode}
                  isLoading={sendingCodeLoading}
                  isDisabled={isUpdatingPhoneLoading || sendingCodeLoading}
                  w={40}
                  my={4}
                  variant='primary'
                  rounded='3xl'
                >
                  Send Code
                </Button>
              </Box>
            )
          )}
          {isPhoneVerified && (
            <Box my={8}>
              <HStack w='100%' justifyContent='center'>
                <CheckIcon color='green' boxSize={{ base: 8 }} />
                <Text as='p' fontSize='lg'>
                  Your phone number has been verified
                </Text>
              </HStack>
              <Box
                mt={8}
                textAlign='center'
                bg='rgba(63,165,186,0.1)'
                p={4}
                rounded='2xl'
              >
                <Text as='p' fontSize='lg'>
                  A link has been sent to your email, please click on it to
                  verify your email
                </Text>
              </Box>
              <HStack my={2} spacing={2} w='100%' justifyContent='center'>
                <Text as='p'>You will be redirected to login page in </Text>
                <Countdown
                  date={Date.now() + 15000}
                  renderer={({ seconds }) => (
                    <Text as='span' fontWeight='bold' color='red.700'>
                      {zeroPad(seconds)}
                    </Text>
                  )}
                  onComplete={closeModalHandler}
                />
                <Text as='p'> seconds</Text>
              </HStack>
            </Box>
          )}
        </ModalBody>
        {!isCodeSent && (
          <ModalFooter
            display='flex'
            flexDirection='column'
            alignItems='center'
            justifyContent='center'
          >
            <Text py={4}>
              If you want to change the primary phone number before verification
            </Text>
            <HStack>
              <PhoneInput
                placeholder='Enter phone number'
                international
                defaultCountry='AE'
                countryCallingCodeEditable={false}
                initialValueFormat='national'
                value={user.phone}
                onChange={setInsidePhone}
                inputComponent={Input}
                disabled={isUpdatingPhoneLoading || sendingCodeLoading}
              />
              <Button
                isLoading={isUpdatingPhoneLoading}
                isDisabled={isUpdatingPhoneLoading || sendingCodeLoading}
                onClick={updatePhoneHandler}
                w={40}
                my={4}
                variant='primary'
                rounded='3xl'
              >
                Send Code
              </Button>
            </HStack>
          </ModalFooter>
        )}
      </ModalContent>
    </Modal>
  )
}
