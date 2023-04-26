import { SuitCaseIcon, UserIcon } from '@/src/icons'
import {
  FormControl,
  FormErrorMessage,
  FormLabel,
  HStack,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  Stack,
} from '@chakra-ui/react'
import type { IRegistrationProps } from '../../context/types/Registration-types'
import { useFormContext } from 'react-hook-form'

interface IPersonalInfoFormProps {
  isVisible: boolean
}

export default function PersonalInfoForm({
  isVisible,
}: IPersonalInfoFormProps) {
  const {
    register,
    formState: { errors },
  } = useFormContext<IRegistrationProps>()
  return (
    <section
      data-step='personal info'
      style={{ display: isVisible ? 'block' : 'none' }}
    >
      <Stack spacing={8}>
        <FormControl
          id='englishName'
          isRequired
          isInvalid={!!errors.fullNameInEnglish?.message}
        >
          <FormLabel htmlFor='englishName'>Full Name in English</FormLabel>
          <InputGroup>
            <InputLeftElement color='gray.500'>
              <UserIcon />
            </InputLeftElement>
            <Input
              {...register('fullNameInEnglish', {
                required: 'Please enter your full name in English',
              })}
              id='englishName'
              placeholder='Full Name'
            />
          </InputGroup>
          {errors.fullNameInEnglish?.message && (
            <FormErrorMessage>
              {errors.fullNameInEnglish.message}
            </FormErrorMessage>
          )}
        </FormControl>
        <FormControl
          id='arabicName'
          isRequired
          style={{ direction: 'rtl' }}
          isInvalid={!!errors.fullNameInArabic?.message}
        >
          <FormLabel htmlFor='arabicName'>الأسم كاملاًُ بالعربى</FormLabel>
          <InputGroup>
            <InputRightElement color='gray.500'>
              <UserIcon />
            </InputRightElement>
            <Input
              {...register('fullNameInArabic', {
                required: 'Please enter your full name in Arabic',
              })}
              id='arabicName'
              placeholder='الأسم كاملاً بالعربى'
              paddingInlineStart={8}
            />
          </InputGroup>
          {errors.fullNameInArabic?.message && (
            <FormErrorMessage>
              {errors.fullNameInArabic.message}
            </FormErrorMessage>
          )}
        </FormControl>
        <FormControl
          id='company'
          isRequired
          isInvalid={!!errors.company?.message}
        >
          <FormLabel htmlFor='company'>Company you worked for</FormLabel>
          <InputGroup>
            <InputLeftElement color='gray.500'>
              <SuitCaseIcon />
            </InputLeftElement>
            <Input
              {...register('company', {
                required: 'Please enter the company you worked for',
              })}
              id='company'
              placeholder='Company Name'
            />
          </InputGroup>
          {errors.company?.message && (
            <FormErrorMessage>{errors.company.message}</FormErrorMessage>
          )}
        </FormControl>
      </Stack>
    </section>
  )
}
