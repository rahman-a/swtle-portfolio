import { Fragment, useEffect, useState } from 'react'
import { useFormContext } from 'react-hook-form'
import type { IRegistrationProps } from '../../context/types/Registration-types'
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input,
  InputGroup,
  InputLeftElement,
  Divider,
  Box,
  HStack,
  Button,
  Stack,
  InputRightElement,
  Checkbox,
  Link,
  Text,
  IconButton,
  Flex,
} from '@chakra-ui/react'
import NextLink from 'next/link'
import {
  EyeIcon,
  EyeSlashIcon,
  MinusCircleIcon,
  PlusCircleIcon,
  UserIcon,
} from '@/src/icons'
import { AtSignIcon, LockIcon } from '@chakra-ui/icons'
import { useFieldArray, Controller } from 'react-hook-form'

interface ICredentialFormProps {
  isVisible: boolean
}

export default function CredentialForm({ isVisible }: ICredentialFormProps) {
  const {
    register,
    control,
    watch,
    formState: { errors },
  } = useFormContext<IRegistrationProps>()
  const { fields, append, remove } = useFieldArray({
    control,
    name: 'emails',
  })
  const [isPasswordVisible, setIsPasswordVisible] = useState(false)
  const [isConfirmPasswordVisible, setIsConfirmPasswordVisible] =
    useState(false)
  const watchPassword = watch('password')

  return (
    <section
      data-step='credential info'
      style={{ display: isVisible ? 'block' : 'none' }}
    >
      <FormControl
        id='username'
        isRequired
        isInvalid={!!errors.username?.message}
      >
        <FormLabel htmlFor='username'>Username</FormLabel>
        <InputGroup>
          <InputLeftElement color='gray.500'>
            <UserIcon />
          </InputLeftElement>
          <Input
            type='text'
            id='username'
            placeholder='Username'
            {...register('username', {
              required: 'Username is required',
              minLength: {
                value: 6,
                message: 'Username must be at least 6 characters',
              },
              maxLength: {
                value: 20,
                message: 'Username must be at most 20 characters',
              },
              validate: (value) => {
                const regex = /^[a-zA-Z0-9.]+$/
                return (
                  regex.test(value) ||
                  'Username can only contain letters, numbers, and periods'
                )
              },
            })}
          />
        </InputGroup>
        <FormHelperText>
          usernames can contain letters (a-z), numbers (0-9), and periods (.)
        </FormHelperText>
        {errors.username?.message && (
          <FormErrorMessage>{errors.username.message}</FormErrorMessage>
        )}
      </FormControl>
      <Divider my={8} borderColor='gray.400' />
      <Box>
        {fields.map((field, index) => (
          <HStack
            key={field.id}
            spacing={2}
            pt={1.5}
            w='100%'
            justifyContent='flex-end'
          >
            <FormControl
              id='email'
              pb={6}
              isRequired={index === 0}
              isInvalid={
                errors.emails && !!errors.emails[index]?.email?.message
              }
            >
              <FormLabel htmlFor='email'>E-mail Address</FormLabel>
              <InputGroup>
                <InputLeftElement color='gray.500'>
                  <AtSignIcon />
                </InputLeftElement>
                <Input
                  {...register(`emails.${index}.email`, {
                    required: {
                      value: index === 0,
                      message: 'E-mail Address is required',
                    },
                    validate: (value) => {
                      const regex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i
                      return (
                        regex.test(value) ||
                        'E-mail Address must be a valid e-mail address'
                      )
                    },
                  })}
                  type='email'
                  id={`email.${index}`}
                  placeholder='E-mail Address'
                />
              </InputGroup>
              {errors.emails && errors.emails[index]?.email?.message && (
                <FormErrorMessage>
                  {errors.emails[index]?.email?.message &&
                    errors.emails[index]?.email?.message}
                </FormErrorMessage>
              )}
            </FormControl>
            {index > 0 && (
              <IconButton
                aria-label='remove the last E-mail Address'
                variant='ghost'
                onClick={() => remove(index)}
                icon={<MinusCircleIcon color='gray.600' />}
              />
            )}
          </HStack>
        ))}
        {fields.length < 3 && (
          <Flex justifyContent='flex-end'>
            <IconButton
              aria-label='add another E-mail Address'
              variant='ghost'
              onClick={() => append({ email: '', isPrimary: false })}
              icon={<PlusCircleIcon color='gray.600' />}
            />
          </Flex>
        )}
      </Box>
      <Divider my={4} borderColor='gray.400' />
      <Stack spacing={4}>
        <FormControl
          id='password'
          isRequired
          isInvalid={!!errors.password?.message}
        >
          <FormLabel htmlFor='password'>Password</FormLabel>
          <InputGroup>
            <InputLeftElement color='gray.500'>
              <LockIcon />
            </InputLeftElement>
            <Input
              {...register('password', {
                required: 'Password is required',
                minLength: {
                  value: 8,
                  message: 'Password must be at least 8 characters',
                },
                maxLength: {
                  value: 20,
                  message: 'Password must be at most 20 characters',
                },
                validate: (value) => {
                  const regex =
                    /^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[a-zA-Z!#$%&? "])[a-zA-Z0-9!#$%&?]{8,20}$/
                  return (
                    regex.test(value) ||
                    'Password must contain at least 1 uppercase letter, 1 lowercase letter and 1 number'
                  )
                },
              })}
              type={isPasswordVisible ? 'text' : 'password'}
              placeholder='Type your password'
            />
            <InputRightElement>
              <Button onClick={() => setIsPasswordVisible((prev) => !prev)}>
                {isPasswordVisible ? (
                  <EyeIcon color='gray.600' />
                ) : (
                  <EyeSlashIcon color='gray.600' />
                )}
              </Button>
            </InputRightElement>
          </InputGroup>
          <FormHelperText>
            passwords must contain at least 1 uppercase, 1 lowercase , 1 digit,
            and be between 8 and 20 characters
          </FormHelperText>
          <FormErrorMessage>
            {errors.password && errors.password.message}
          </FormErrorMessage>
        </FormControl>
        <FormControl
          id='confirmPassword'
          isRequired
          isInvalid={!!errors.confirmPassword?.message}
        >
          <FormLabel htmlFor='confirmPassword'>Confirm Password</FormLabel>
          <InputGroup>
            <InputLeftElement color='gray.500'>
              <LockIcon />
            </InputLeftElement>
            <Input
              {...register('confirmPassword', {
                required: 'Confirm your password',
                validate: (value) =>
                  value === watchPassword || 'Passwords do not match',
              })}
              type={isConfirmPasswordVisible ? 'text' : 'password'}
              placeholder='Confirm your password'
            />
            <InputRightElement>
              <Button
                onClick={() => setIsConfirmPasswordVisible((prev) => !prev)}
              >
                {isConfirmPasswordVisible ? (
                  <EyeIcon color='gray.600' />
                ) : (
                  <EyeSlashIcon color='gray.600' />
                )}
              </Button>
            </InputRightElement>
          </InputGroup>
          <FormErrorMessage>
            {errors.confirmPassword && errors.confirmPassword.message}
          </FormErrorMessage>
        </FormControl>
      </Stack>
      <FormControl isRequired pt={2} isInvalid={!!errors.isAgreed}>
        <FormLabel mt={0} display='flex'>
          <HStack spacing={2} alignItems='center'>
            <Checkbox
              {...register('isAgreed', {
                required:
                  'You must agree to Privacy policy, terms and conditions',
              })}
            ></Checkbox>
            <Text as='p' fontSize={{ base: 'xs', md: 'md' }}>
              I Agree on
            </Text>
            <Link
              fontSize={{ base: 'xs', md: 'md' }}
              as={NextLink}
              href='#'
              color='secondary'
            >
              Terms of Service
            </Link>
            <Text fontSize={{ base: 'xs', md: 'md' }} as='p'>
              and
            </Text>
            <Link
              fontSize={{ base: 'xs', md: 'md' }}
              as={NextLink}
              href='#'
              color='secondary'
            >
              Privacy Policy
            </Link>
          </HStack>
        </FormLabel>
        <FormErrorMessage>
          {errors.isAgreed && errors.isAgreed.message}
        </FormErrorMessage>
      </FormControl>
    </section>
  )
}
