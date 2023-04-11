import { Box, Text, position } from '@chakra-ui/react'
import * as React from 'react'

interface IHeroSectionProps {
  image: {
    base: string
    md: string
    xl: string
  }
  title: string
  position?: {
    base?: string
    md?: string
    xl?: string
  }
}

export default function HeroSection({
  image,
  title,
  position,
}: IHeroSectionProps) {
  return (
    <Box
      display='flex'
      alignItems='flex-end'
      height='45vh'
      width='100%'
      backgroundImage={{
        base: `url(${image.base})`,
        md: `url(${image.md})`,
        xl: `url(${image.xl})`,
      }}
      backgroundSize='cover'
      backgroundPosition={position ? position : 'center'}
      backgroundRepeat='no-repeat'
      position={'relative'}
      top='-70px'
      left={0}
      z-index={-1}
    >
      <Box p='2rem'>
        <Text
          as='h1'
          fontWeight='bold'
          letterSpacing='2px'
          color='white'
          fontSize={{ base: '2.5rem', md: '3rem', lg: '3.5rem' }}
        >
          {title.toLocaleUpperCase()}
        </Text>
      </Box>
    </Box>
  )
}
