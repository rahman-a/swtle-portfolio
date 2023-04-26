import { useEffect, useState } from 'react'
import {
  Flex,
  FormControl,
  FormErrorMessage,
  FormLabel,
  HStack,
  IconButton,
  Input,
  VStack,
} from '@chakra-ui/react'
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'
import type { IRegistrationProps } from '../../context/types/Registration-types'
import { useFormContext, Controller, useFieldArray } from 'react-hook-form'
import { MinusCircleIcon, PlusCircleIcon } from '@/src/icons'
interface IPhonesFormProps {
  isVisible: boolean
}

export default function PhonesForm({ isVisible }: IPhonesFormProps) {
  const [phoneError, setPhoneError] = useState<{ [key: number]: string }>({})
  const {
    control,
    formState: { errors },
  } = useFormContext<IRegistrationProps>()
  const { fields, append, remove } = useFieldArray({
    control,
    name: 'insidePhones',
  })
  const {
    fields: outSidesFields,
    append: add,
    remove: removeField,
  } = useFieldArray({
    control,
    name: 'outsidePhones',
  })

  return (
    <section
      data-step='phones info'
      style={{ display: isVisible ? 'block' : 'none' }}
    >
      <VStack spacing={8} w='100%'>
        {fields.map((field, index) => (
          <HStack
            marginBottom={index > 1 ? '3rem !important' : 0}
            key={field.id}
            width='100%'
            alignItems='flex-end'
          >
            <FormControl
              isRequired={index === 0}
              key={field.id}
              isInvalid={Object.keys(phoneError).includes(index.toString())}
            >
              <FormLabel>Phone Number inside UAE</FormLabel>
              <Controller
                name={`insidePhones.${index}`}
                control={control}
                render={({ field: { value, onChange } }) => (
                  <PhoneInput
                    placeholder='Enter phone number'
                    international
                    defaultCountry='AE'
                    countryCallingCodeEditable={false}
                    initialValueFormat='national'
                    value={value.phone}
                    onChange={(value) => {
                      if (!value?.startsWith('+971') || value === '+971') {
                        setPhoneError({
                          ...phoneError,
                          [index]: 'Please enter a valid UAE phone number',
                        })
                        return onChange({
                          phone: value,
                          isPrimary: index === 0,
                        })
                      }
                      onChange({ phone: value, isPrimary: index === 0 })
                      setPhoneError({})
                    }}
                    inputComponent={Input}
                  />
                )}
              />
              {phoneError[index] && (
                <FormErrorMessage>{phoneError[index]}</FormErrorMessage>
              )}
            </FormControl>
            {index > 0 && (
              <IconButton
                aria-label='remove the last Phone number'
                variant='ghost'
                onClick={() => remove(index)}
                icon={<MinusCircleIcon color='gray.600' />}
              />
            )}
          </HStack>
        ))}
      </VStack>
      {fields.length < 3 && (
        <Flex justifyContent='flex-end' width='100%' mt={2}>
          <IconButton
            aria-label='add another Phone number'
            variant='ghost'
            onClick={() => append({ phone: '', isPrimary: false })}
            icon={<PlusCircleIcon color='gray.600' />}
          />
        </Flex>
      )}
      {/* OUTSIDE PHONES  */}
      <VStack spacing={8} w='100%'>
        {outSidesFields.map((field, index) => (
          <HStack key={field.id} width='100%' alignItems='flex-end'>
            <FormControl key={field.id}>
              <FormLabel>Phone Number outside UAE</FormLabel>
              <Controller
                name={`outsidePhones.${index}`}
                control={control}
                render={({ field: { value, onChange } }) => (
                  <PhoneInput
                    placeholder='Enter phone number'
                    international
                    countryCallingCodeEditable={false}
                    initialValueFormat='national'
                    value={value.phone}
                    onChange={(value) => onChange({ phone: value })}
                    inputComponent={Input}
                  />
                )}
              />
            </FormControl>
            {index > 0 && (
              <IconButton
                aria-label='remove the last Phone number'
                variant='ghost'
                onClick={() => removeField(index)}
                icon={<MinusCircleIcon color='gray.600' />}
              />
            )}
          </HStack>
        ))}
      </VStack>
      {fields.length < 3 && (
        <Flex justifyContent='flex-end' width='100%' mt={2}>
          <IconButton
            aria-label='add another Phone number'
            variant='ghost'
            onClick={() => add({ phone: '' })}
            icon={<PlusCircleIcon color='gray.600' />}
          />
        </Flex>
      )}
    </section>
  )
}
