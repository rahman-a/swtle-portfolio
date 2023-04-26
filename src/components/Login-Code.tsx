import {
  Button,
  FormControl,
  FormErrorMessage,
  HStack,
  Input,
  InputGroup,
  InputLeftElement,
  Text,
} from '@chakra-ui/react'
import { useForm } from 'react-hook-form'
import * as React from 'react'
import { LoginCodeIcon } from '../icons'

interface ILoginCodeProps {
  verifyLoginCodeHandler: (data: { code: string }) => void
}

export default function LoginCode({ verifyLoginCodeHandler }: ILoginCodeProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      code: '',
    },
  })

  return (
    <>
      <Text as='h2' mb='5' fontSize={{ base: '2xl', md: '3xl', xl: '4xl' }}>
        Login Code
      </Text>
      <form
        style={{ width: '100%', margin: 0 }}
        onSubmit={handleSubmit(verifyLoginCodeHandler)}
        noValidate
      >
        <FormControl
          isRequired
          id='code'
          isInvalid={!!errors.code?.message}
          mb='5'
        >
          <InputGroup>
            <InputLeftElement pointerEvents='none'>
              <LoginCodeIcon color='gray.300' width='1.2rem' height='1.2rem' />
            </InputLeftElement>
            <Input
              type='text'
              size='lg'
              placeholder='Please enter 7-characters login code'
              {...register('code', {
                required: 'Please enter 7-characters login code',
                minLength: {
                  value: 7,
                  message: 'Login code must be 7 characters long',
                },
              })}
            />
          </InputGroup>
          {errors.code?.message && (
            <FormErrorMessage>{errors.code?.message}</FormErrorMessage>
          )}
        </FormControl>
        <HStack mt={8} width='100%' justifyContent='center'>
          <Button
            width='50%'
            type='submit'
            bg='primary'
            color='white'
            _hover={{ bg: 'secondary' }}
            borderRadius='5rem'
          >
            Verify
          </Button>
        </HStack>
      </form>
    </>
  )
}
