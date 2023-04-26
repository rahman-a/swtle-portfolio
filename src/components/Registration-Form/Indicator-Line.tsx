import { Box } from '@chakra-ui/react'
import * as React from 'react'

interface IIndicatorLineProps {
  step: number
}

export default function IndicatorLine({ step }: IIndicatorLineProps) {
  return (
    <Box
      position='absolute'
      top='1rem'
      left={{ base: '0.5rem', sm: '1rem' }}
      transform={{ base: 'translateX(0)', md: 'translateX(-50%)' }}
      w={{ base: '90%', md: '0.3rem' }}
      h={{ base: '0.5rem', md: `89%` }}
      bg='gray.300'
      zIndex='-1'
      display='block'
    >
      <Box
        position='absolute'
        top='0'
        left='0'
        width={{ base: `${step * 25}%`, md: '100%' }}
        height={{ base: '0.5rem', md: `${step * 25}%` }}
        bgGradient='linear(to-b, primary, secondary)'
        transition='all 0.5s ease'
      ></Box>
    </Box>
  )
}
