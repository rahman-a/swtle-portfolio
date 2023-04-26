import { useEffect, useState } from 'react'
import flags from 'country-flag-emoji-json'
import {
  FormControl,
  FormLabel,
  HStack,
  Input,
  InputGroup,
  InputLeftElement,
  Select,
  Stack,
  FormErrorMessage,
  FormHelperText,
} from '@chakra-ui/react'
import { LocationIcon } from '@/src/icons'
import ReactFlagsSelect from 'react-flags-select'
import type { IRegistrationProps } from '../../context/types/Registration-types'
import { useFormContext, Controller } from 'react-hook-form'

interface IAddressesProps {
  isVisible: boolean
}

export default function Addresses({ isVisible }: IAddressesProps) {
  const {
    register,
    formState: { errors },
    clearErrors,
    trigger,
    control,
    watch,
  } = useFormContext<IRegistrationProps>()
  const selectCountryHandler = (code: string) => {
    const selectedCountry = flags.find((flag) => flag.code === code)!
    return {
      name: selectedCountry.name,
      abbr: selectedCountry.code,
      image: selectedCountry.image,
    }
  }

  const watchCountryName = watch('country')

  useEffect(() => {
    if (watchCountryName.abbr !== 'AE') {
      trigger('outsideAddress')
    } else {
      clearErrors('outsideAddress')
    }
  }, [watchCountryName, trigger, clearErrors])

  return (
    <section
      data-step='addresses info'
      style={{ display: isVisible ? 'block' : 'none' }}
    >
      <Stack spacing={8}>
        <FormControl
          id='insideAddress'
          isRequired
          isInvalid={!!errors.insideAddress?.message}
        >
          <FormLabel htmlFor='insideAddress'>Address in UAE</FormLabel>
          <InputGroup>
            <InputLeftElement color='gray.500'>
              <LocationIcon />
            </InputLeftElement>
            <Input
              {...register('insideAddress', {
                required: 'Please enter your address in UAE',
              })}
              id='insideAddress'
              placeholder='Enter your address'
            />
          </InputGroup>
          {errors.insideAddress?.message && (
            <FormErrorMessage>{errors.insideAddress.message}</FormErrorMessage>
          )}
        </FormControl>
        <FormControl
          id='outsideAddress'
          isRequired
          isInvalid={!!errors.outsideAddress?.message}
        >
          <FormLabel htmlFor='outsideAddress'>Address outside UAE</FormLabel>
          <InputGroup>
            <InputLeftElement color='gray.500'>
              <LocationIcon />
            </InputLeftElement>
            <Input
              {...register('outsideAddress', {
                required: {
                  value: watchCountryName.abbr !== 'AE',
                  message: 'Please enter your address outside UAE',
                },
              })}
              id='outsideAddress'
              placeholder='Enter your address'
            />
          </InputGroup>
          <FormHelperText>
            required in case your country isn&apos;t UAE.
          </FormHelperText>
          {watchCountryName.abbr !== 'AE' && errors.outsideAddress?.message && (
            <FormErrorMessage>{errors.outsideAddress.message}</FormErrorMessage>
          )}
        </FormControl>
        <FormControl id='company' isRequired>
          <FormLabel htmlFor='company'>Choose Your Country</FormLabel>
          <Controller
            name='country'
            control={control}
            render={({ field: { value, onChange } }) => (
              <ReactFlagsSelect
                selected={value.abbr}
                onSelect={(code) => onChange(selectCountryHandler(code))}
                searchable={true}
                searchPlaceholder='Search for a country'
              />
            )}
          />
        </FormControl>
      </Stack>
    </section>
  )
}
