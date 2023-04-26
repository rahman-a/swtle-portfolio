import { CameraIcon } from '@/src/icons'
import { Box, Text, VStack, useDisclosure } from '@chakra-ui/react'
import CapturePhoto from './Camera-Snapshot/Capture-Photo'
import * as React from 'react'

interface ICameraShotProps {
  iconSize?: number
}

export default function CameraShot({ iconSize }: ICameraShotProps) {
  const { isOpen, onOpen, onClose } = useDisclosure()
  return (
    <>
      <CapturePhoto isOpen={isOpen} onClose={onClose} />
      <Box
        mt='2rem !important'
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
        onClick={onOpen}
      >
        <VStack spacing={2}>
          <CameraIcon boxSize={iconSize ?? 14} />
          <Text as='p' fontSize='sm' textAlign='center'>
            Upload via Camera
          </Text>
        </VStack>
      </Box>
    </>
  )
}
