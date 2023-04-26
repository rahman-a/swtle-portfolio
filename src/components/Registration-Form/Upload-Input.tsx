import { UploadCloudIcon } from '@/src/icons'
import {
  Box,
  FormControl,
  FormLabel,
  Text,
  VStack,
  useMergeRefs,
  useToast,
} from '@chakra-ui/react'
import { useRef, forwardRef, useState, useEffect } from 'react'
import { useFormContext } from 'react-hook-form'

interface IUploadInputProps {
  name: string
  text: string
  label: string
  id: string
  iconSize?: number
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const UploadInput = forwardRef<HTMLInputElement, IUploadInputProps>(
  ({ name, text, label, id, iconSize, ...rest }, ref) => {
    const inputRef = useRef<HTMLInputElement>(null)
    const inputRefs = useMergeRefs(inputRef, ref)
    const { setValue, getValues } = useFormContext()
    const [error, setError] = useState<{
      title: string
      description: string
    } | null>(null)
    const toast = useToast()

    const isFileValid = (file: File) => {
      const allowedTypes = ['image/png', 'image/jpeg', 'image/jpg']
      if (!allowedTypes.includes(file.type)) {
        setError({
          title: 'Invalid file type',
          description: 'Please upload a valid image file (png, jpg or jpeg)',
        })
        return false
      }
      if (file.size > 2000000) {
        setError({
          title: 'File too large',
          description: 'Please upload a file smaller than 2MB',
        })
        return false
      }
      return true
    }
    useEffect(() => {
      if (error) {
        toast({
          title: error.title,
          description: error.description,
          position: 'top',
          status: 'error',
          duration: 10000,
          isClosable: true,
          onCloseComplete: () => setError(null),
        })
      }
    }, [error, toast])
    return (
      <FormControl id={id} isRequired>
        <FormLabel w='inherit' htmlFor={id}>
          {label}
        </FormLabel>
        <Box
          width='100%'
          height={{ base: '8rem' }}
          border='2px dashed'
          borderColor='gray.300'
          rounded='3xl'
          display='flex'
          justifyContent='center'
          alignItems='center'
          cursor='pointer'
          bg='rgba(63,165,186,0.1)'
          color='secondary'
          onClick={() => inputRef.current?.click()}
        >
          <VStack spacing={6}>
            <VStack spacing={2}>
              <UploadCloudIcon boxSize={iconSize ?? 14} />
              <Text as='p' fontSize='sm' textAlign='center'>
                {getValues(name)?.name ? getValues(name).name : text}
              </Text>
            </VStack>
            <input
              style={{ display: 'none' }}
              {...rest}
              accept='image/*'
              ref={inputRefs}
              value=''
              type='file'
              id={id}
              onChange={(e) => {
                const file = e.target.files?.[0]
                if (file && isFileValid(file)) {
                  setValue(name, file)
                }
              }}
            />
          </VStack>
        </Box>
      </FormControl>
    )
  }
)

UploadInput.displayName = 'UploadInput'
export default UploadInput
