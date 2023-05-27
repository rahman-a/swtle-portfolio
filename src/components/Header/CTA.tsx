import { Button } from '@chakra-ui/react'
import NextLink from 'next/link'

interface ICTAProps {
  label: string
  isOpen?: boolean
  isHeroSection?: boolean
  onClose?: () => void
}

export default function CTA({
  label,
  isOpen,
  onClose,
  isHeroSection,
}: ICTAProps) {
  return (
    <Button
      as={NextLink}
      href={`${process.env.NEXT_PUBLIC_APP_URL}`}
      display={{
        base: isOpen || isHeroSection ? 'flex' : 'none',
        xl: 'flex',
      }}
      onClick={() => onClose && onClose()}
      variant='primary'
      minW='8rem'
      width={isOpen ? '90%' : 'auto'}
      margin={isOpen ? '2rem auto' : '0'}
      borderRadius={isOpen ? '1rem' : '5rem'}
      fontSize={{ base: '12px', md: '14px' }}
      boxShadow='0px 1px 3px 1px rgba(0, 0, 0, 0.15)'
    >
      {label}
    </Button>
  )
}
