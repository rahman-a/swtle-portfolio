import {
  Box,
  Text,
  FormControl,
  Input,
  Textarea,
  FormErrorMessage,
  Stack,
  InputGroup,
  InputLeftElement,
  Button,
  HStack,
} from '@chakra-ui/react'
import { useForm } from 'react-hook-form'
import * as React from 'react'
import { AtSignIcon, PhoneIcon } from '@chakra-ui/icons'
import { SendPlaneIcon, UserIcon } from '../icons'

export interface IContactFormProps {}

type FormData = {
  fullName: string
  email: string
  phone: string
  message: string
}

export default function ContactForm(props: IContactFormProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      fullName: '',
      email: '',
      phone: '',
      message: '',
    },
  })

  console.log({ errors })

  const onSubmitHandler = (data: FormData) => {
    console.log({ data })
  }
  return (
    <Box
      boxShadow='lg'
      p={{ base: 8, lg: 10, xl: 12 }}
      borderRadius='3xl'
      width={{ base: '95%', lg: '45%' }}
    >
      <Text as='h2' fontSize='3xl'>
        Contact us
      </Text>
      <form
        onSubmit={handleSubmit(onSubmitHandler)}
        style={{ marginTop: '3rem' }}
      >
        <Stack spacing={8}>
          <FormControl
            isRequired
            id='fullName'
            isInvalid={!!errors.fullName?.message}
          >
            <InputGroup>
              <InputLeftElement pointerEvents='none'>
                <UserIcon color='gray.300' />
              </InputLeftElement>
              <Input
                variant='flushed'
                placeholder='Your full name *'
                {...register('fullName', {
                  required: 'Please type your full name',
                })}
              />
            </InputGroup>
            {errors.fullName?.message && (
              <FormErrorMessage>{errors.fullName?.message}</FormErrorMessage>
            )}
          </FormControl>
          <FormControl
            isRequired
            id='email'
            isInvalid={!!errors.email?.message}
          >
            <InputGroup>
              <InputLeftElement pointerEvents='none'>
                <AtSignIcon color='gray.300' />
              </InputLeftElement>
              <Input
                placeholder='Your E-mail Address *'
                variant='flushed'
                {...register('email', {
                  required: 'Please type your E-mail Address',
                })}
              />
            </InputGroup>
            {errors.email?.message && (
              <FormErrorMessage>{errors.email?.message}</FormErrorMessage>
            )}
          </FormControl>
          <FormControl
            isRequired
            id='phone'
            isInvalid={!!errors.phone?.message}
          >
            <InputGroup>
              <InputLeftElement pointerEvents='none'>
                <PhoneIcon color='gray.300' />
              </InputLeftElement>
              <Input
                placeholder='Your Phone number *'
                variant='flushed'
                {...register('phone', { required: 'Please enter your phone' })}
              />
            </InputGroup>
            {errors.phone?.message && (
              <FormErrorMessage>{errors.phone?.message}</FormErrorMessage>
            )}
          </FormControl>
          <FormControl
            isRequired
            id='message'
            isInvalid={!!errors.message?.message}
          >
            <Textarea
              placeholder='Your message *'
              variant='flushed'
              {...register('message', { required: 'Please enter message' })}
            ></Textarea>
            {errors.message?.message && (
              <FormErrorMessage>{errors.message?.message}</FormErrorMessage>
            )}
          </FormControl>
        </Stack>
        <HStack justifyContent='flex-end' mt={6}>
          <Button
            rightIcon={<SendPlaneIcon />}
            variant='primary'
            borderRadius='3xl'
            type='submit'
          >
            Send
          </Button>
        </HStack>
      </form>
    </Box>
  )
}
