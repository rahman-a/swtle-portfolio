import {
  Button,
  FormControl,
  FormErrorMessage,
  Input,
  InputGroup,
  InputLeftElement,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
} from '@chakra-ui/react'
import { useForm } from 'react-hook-form'
import * as React from 'react'
import { AtSignIcon } from '@chakra-ui/icons'

interface IForgetPasswordProps {
  isOpen: boolean
  onClose: () => void
}

export default function ForgetPassword({
  isOpen,
  onClose,
}: IForgetPasswordProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: '',
    },
  })
  const resetPasswordHandler = (data: { email: string }) => {
    console.log(data)
  }
  return (
    <Modal blockScrollOnMount={true} isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Reset your password</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Text as='p' color='gray.400' textAlign='center' mb='1rem'>
            Please enter your email address. We will send you an email to reset
            your password
          </Text>
        </ModalBody>
        <form
          style={{ width: '90%', margin: '0 1rem' }}
          onSubmit={(e) => e.preventDefault()}
          noValidate
        >
          <FormControl
            isRequired
            id='email'
            isInvalid={!!errors.email?.message}
            mb='5'
          >
            <InputGroup>
              <InputLeftElement pointerEvents='none'>
                <AtSignIcon color='gray.300' />
              </InputLeftElement>
              <Input
                type='email'
                size='lg'
                placeholder='yours@example.com'
                {...register('email', {
                  required: 'Please type your email',
                })}
              />
            </InputGroup>
            {errors.email?.message && (
              <FormErrorMessage>{errors.email?.message}</FormErrorMessage>
            )}
          </FormControl>
        </form>
        <ModalFooter>
          <Button
            color='blackAlpha.700'
            colorScheme='gray.700'
            mr={3}
            onClick={onClose}
          >
            Close
          </Button>
          <Button
            onClick={handleSubmit(resetPasswordHandler)}
            variant='primary'
          >
            Send E-mail
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  )
}
