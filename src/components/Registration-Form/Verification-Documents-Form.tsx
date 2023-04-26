import {
  Box,
  Divider,
  Flex,
  FormControl,
  FormLabel,
  HStack,
  Input,
  Text,
  VStack,
  useMediaQuery,
} from '@chakra-ui/react'
import type { IRegistrationProps } from '../../context/types/Registration-types'
import { useFormContext, Controller } from 'react-hook-form'
import Thumbnail from './Thumbnail'
import { useRef, useState } from 'react'
import UploadInput from './Upload-Input'
import CameraShot from './Camera-Shot'

interface IVerificationDocumentsFormProps {
  isVisible: boolean
}

export default function VerificationDocumentsForm({
  isVisible,
}: IVerificationDocumentsFormProps) {
  const inputRef = useRef<HTMLInputElement>(null)
  const [isLargerThan768] = useMediaQuery('(min-width: 768px)')
  const [toggleIdInputDate, setToggleIdInputDate] = useState(false)
  const [togglePassInputDate, setTogglePassInputDate] = useState(false)
  const {
    formState: { errors },
    control,
    register,
  } = useFormContext<IRegistrationProps>()
  return (
    <section
      data-step='verification documents'
      style={{ display: isVisible ? 'block' : 'none' }}
    >
      <Flex justifyContent='space-between' gap={{ base: 4, sm: 0 }}>
        <Thumbnail name='avatar' label='Personal Photo' />
        <Thumbnail name='identity-front' label='Identity (front side)' />
        <Thumbnail name='identity-back' label='Identity (back side)' />
        <Thumbnail name='passport' label='Passport Document' />
      </Flex>
      <Box my={12}>
        <Flex
          justifyContent='space-between'
          flexDirection={{ base: 'column', lg: 'row' }}
        >
          <HStack spacing={2} width={{ base: '100%', lg: '48%', xl: '45%' }}>
            <Controller
              name='avatar'
              control={control}
              rules={{
                required: 'Please upload your personal photo',
              }}
              render={({ field }) => (
                <UploadInput
                  text='Upload your personal photo'
                  label='Personal Photo'
                  id='personal-photo'
                  iconSize={12}
                  {...field}
                />
              )}
            />
            <Text color='gray.500' as='p' fontSize='xl'>
              OR
            </Text>
            <CameraShot iconSize={12} />
          </HStack>
          <Divider
            my={{ base: 4, lg: 0 }}
            height={{ base: 1.5, lg: 40 }}
            orientation={isLargerThan768 ? 'vertical' : 'horizontal'}
          />
          <Box width={{ base: '100%', lg: '48%', xl: '45%' }}>
            <FormControl>
              <VStack>
                <Controller
                  name='identity-front'
                  control={control}
                  rules={{ required: 'Please upload your identity document' }}
                  render={({ field }) => (
                    <UploadInput
                      text='Upload your identity (front-side)'
                      label='Identity Front-side Document'
                      id='identity-card-front'
                      {...field}
                    />
                  )}
                />
                <Input
                  id='expireAt-id'
                  type={toggleIdInputDate ? 'date' : 'text'}
                  placeholder='Enter the Expiry Date'
                  onFocus={() => setToggleIdInputDate(true)}
                  {...register('expireAt.identity', {
                    required: 'Please enter the expiry date',
                  })}
                />
              </VStack>
            </FormControl>
          </Box>
        </Flex>
        <Flex
          justifyContent='space-between'
          flexDirection={{ base: 'column', lg: 'row' }}
          mt={4}
        >
          <Box width={{ base: '100%', lg: '48%', xl: '45%' }}>
            <FormControl>
              <Controller
                name='identity-back'
                control={control}
                rules={{ required: 'Please upload your identity document' }}
                render={({ field }) => (
                  <UploadInput
                    text='Upload your identity (back-side)'
                    label='Identity Back-side Document'
                    id='identity-card-back'
                    {...field}
                  />
                )}
              />
            </FormControl>
          </Box>
          <Divider
            my={{ base: 4, lg: 0 }}
            height={{ base: 1.5, lg: 40 }}
            orientation={isLargerThan768 ? 'vertical' : 'horizontal'}
          />
          <Box width={{ base: '100%', lg: '48%', xl: '45%' }}>
            <FormControl>
              <VStack>
                <Controller
                  name='passport'
                  control={control}
                  rules={{ required: 'Please upload your passport document' }}
                  render={({ field }) => (
                    <UploadInput
                      text='Upload your Passport'
                      label='Passport Document'
                      id='passport-doc'
                      {...field}
                    />
                  )}
                />
                <Input
                  id='expireAt-pass'
                  type={togglePassInputDate ? 'date' : 'text'}
                  placeholder='Enter the Expiry Date'
                  onFocus={() => setTogglePassInputDate(true)}
                  {...register('expireAt.passport', {
                    required: 'Please enter the expiry date',
                  })}
                />
              </VStack>
            </FormControl>
          </Box>
        </Flex>
      </Box>
    </section>
  )
}
