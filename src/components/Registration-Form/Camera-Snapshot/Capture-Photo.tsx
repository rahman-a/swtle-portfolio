import { CropIcon, PortraitIcon } from '@/src/icons'
import { ArrowBackIcon } from '@chakra-ui/icons'
import {
  Box,
  Modal,
  ModalBody,
  ModalHeader,
  ModalContent,
  ModalOverlay,
  Button,
  HStack,
  VStack,
  Heading,
  Text,
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
  useToast,
} from '@chakra-ui/react'
import Image from 'next/image'
import { useFormContext } from 'react-hook-form'
import { useState, useRef, useCallback, useEffect } from 'react'
import Webcam from 'react-webcam'
import { v4 as uuidV4 } from 'uuid'
import PhotoCropper from './Crop-Photo'

interface ICapturePhotoProps {
  isOpen: boolean
  onClose: () => void
}

export default function CapturePhoto({ isOpen, onClose }: ICapturePhotoProps) {
  const [isCaptureEnable, setCaptureEnable] = useState<boolean>(false)
  const [mediaError, setMediaError] = useState(null)
  const [isCropEnable, setCropEnable] = useState<boolean>(false)
  const [fileBlob, setFileBlob] = useState<File | null>(null)
  const webcamRef = useRef<Webcam>(null)
  const [url, setUrl] = useState<string | null>(null)
  const [isFileLarge, setFileLarge] = useState<boolean>(false)
  const toast = useToast()
  const { setValue } = useFormContext()
  const capture = useCallback(() => {
    if (!mediaError) {
      const imageSrc = webcamRef.current?.getScreenshot()
      if (imageSrc) {
        fetch(imageSrc)
          .then((res) => res.blob())
          .then((blob) => {
            const file = new File([blob], 'personal_image_selected.png', {
              type: 'image/png',
            })
            setFileBlob(file)
            setCaptureEnable(false)
            setUrl(imageSrc)
          })
      }
    }
  }, [webcamRef, mediaError])

  const mediaErrorHandler = (error: any) => {
    setMediaError(error.message)
  }

  const selectCurrentPhotoHandler = (file?: File): void => {
    const selectedPhoto = file ? file : fileBlob
    if (selectedPhoto && selectedPhoto?.size > 2000000) {
      setFileLarge(true)
      return
    }
    setValue('avatar', selectedPhoto)
    setCaptureEnable(false)
    setCropEnable(false)
    setUrl(null)
    onClose()
  }

  const closeCameraShot = () => {
    setCaptureEnable(false)
    setUrl(null)
    onClose()
  }
  const videoConstraints = {
    width: 415,
    height: 300,
    facingMode: 'user',
  }

  useEffect(() => {
    if (isFileLarge) {
      toast({
        title: 'File too large',
        description: 'Please upload a file smaller than 2MB',
        position: 'top',
        status: 'error',
        duration: 10000,
        isClosable: true,
        onCloseComplete: () => setFileLarge(false),
      })
    }
  }, [isFileLarge, toast])
  return (
    <Modal isOpen={isOpen} onClose={onClose} size='lg'>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader bg='gray.500' color='white'>
          <HStack spacing={2}>
            <PortraitIcon boxSize={6} />
            <Heading as='h4' fontSize={{ base: 'sm', md: 'md' }}>
              Take Photo via Camera
            </Heading>
          </HStack>
        </ModalHeader>
        <ModalBody px={2}>
          {!isCaptureEnable && !url && (
            <Box py={4}>
              <Button onClick={() => setCaptureEnable(true)}>Run Camera</Button>
            </Box>
          )}
          {mediaError && (
            <Alert status='error'>
              <AlertIcon />
              <AlertTitle>{mediaError}</AlertTitle>
              <AlertDescription>
                Please Allow Access to your camera.
              </AlertDescription>
            </Alert>
          )}
          <Box>
            {!mediaError && isCaptureEnable && (
              <>
                <Webcam
                  key={uuidV4()}
                  audio={false}
                  screenshotFormat='image/png'
                  videoConstraints={videoConstraints}
                  ref={webcamRef}
                  style={{ width: '100%' }}
                  imageSmoothing={true}
                  minScreenshotHeight={300}
                  minScreenshotWidth={415}
                  onUserMediaError={(error) => mediaErrorHandler(error)}
                />
                <HStack spacing={4} py={4}>
                  <Button
                    leftIcon={<PortraitIcon />}
                    variant='primary'
                    onClick={capture}
                    size='sm'
                  >
                    Take Shot
                  </Button>
                  <Button size='sm' onClick={closeCameraShot}>
                    Close
                  </Button>
                </HStack>
              </>
            )}
          </Box>
          {url && !isCaptureEnable && !isCropEnable && (
            <VStack spacing={4} w='100%'>
              <Button
                leftIcon={<ArrowBackIcon />}
                alignSelf='flex-start'
                onClick={() => setUrl(null)}
                size='sm'
                variant='ghost'
              >
                back
              </Button>
              <Box position='relative' w='100%' height='315px'>
                <Image
                  src={url}
                  alt='avatar user'
                  fill
                  style={{ objectFit: 'cover' }}
                />
              </Box>
              <HStack spacing={4} py={2} w='100%' justifyContent='flex-start'>
                <Button
                  size='sm'
                  leftIcon={<CropIcon />}
                  colorScheme='gray'
                  onClick={() => setCropEnable(true)}
                >
                  Crop Photo
                </Button>
                <Button
                  size='sm'
                  onClick={() => selectCurrentPhotoHandler(undefined)}
                  variant='primary'
                >
                  Select Photo
                </Button>
              </HStack>
            </VStack>
          )}
          {isCropEnable && url && (
            <VStack>
              <Button
                leftIcon={<ArrowBackIcon />}
                alignSelf='flex-start'
                onClick={() => {
                  setCropEnable(false)
                  setUrl(null)
                }}
                size='sm'
                variant='ghost'
              >
                back
              </Button>
              <PhotoCropper
                defaultSrc={url}
                selectCurrentPhotoHandler={selectCurrentPhotoHandler}
              />
            </VStack>
          )}
        </ModalBody>
      </ModalContent>
    </Modal>
  )
}
