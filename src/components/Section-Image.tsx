import { Box } from '@chakra-ui/react'
import Image from 'next/image'
import classNames from 'classnames'
import React from 'react'

export interface ISectionImageProps {
  image: string
  radius?: 'all' | 'top right' | 'top left' | 'bottom right' | 'bottom left'
  radiusValue?: string
  outline?: 'bottom right' | 'bottom left'
  styles?: React.CSSProperties
}

export default function SectionImage({
  image,
  radius,
  radiusValue,
  outline,
  styles,
}: ISectionImageProps) {
  const outlineStyle = classNames({
    'outline-bottom-right': outline === 'bottom right',
    'outline-bottom-left': outline === 'bottom left',
  })
  const radiusStyle = {
    all: `${radiusValue ?? '8rem'}`,
    'top left': `${radiusValue ?? '8rem'} 0 0 0`,
    'top right': `0 ${radiusValue ?? '8rem'} 0 0`,
    'bottom right': `0 0 ${radiusValue ?? '8rem'} 0`,
    'bottom left': `0 0 0 ${radiusValue ?? '8rem'}`,
  }
  return (
    <Box
      position='relative'
      width={{ base: '100%', sm: '45%' }}
      className={outlineStyle}
      style={{ ...styles }}
    >
      <Image
        src={image}
        alt='section-image'
        width={1000}
        height={1000}
        style={{ borderRadius: radius ? radiusStyle[radius] : 'none' }}
      />
    </Box>
  )
}
