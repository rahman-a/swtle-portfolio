import {
  Box,
  Button,
  Container,
  Flex,
  HStack,
  Text,
  VStack,
  type ButtonProps,
} from '@chakra-ui/react'
import { useRouter } from 'next/router'
import SectionImage from './Section-Image'
import Image from 'next/image'
import { ISectionImageProps } from './Section-Image'

type SectionButton = ButtonProps & {
  label: string
  href: string
}

interface ITextImageSectionProps {
  header?: string
  isSubHeaderLine?: boolean
  title?: string
  subtitle?: string
  description: string
  sectionButton?: SectionButton
  isVectorOne?: boolean
  isVectorTwo?: boolean
  isReverse?: boolean
  descriptionFontSize?: {
    base?: string
    md?: string
    lg?: string
    xl?: string
    '2xl'?: string
  }
  sectionImage: ISectionImageProps
  styles?: React.CSSProperties
}

export default function TextImageSection({
  header,
  isSubHeaderLine,
  title,
  subtitle,
  description,
  sectionButton,
  isVectorOne,
  isVectorTwo,
  sectionImage,
  isReverse,
  descriptionFontSize,
  styles,
}: ITextImageSectionProps) {
  const router = useRouter()
  return (
    <Box
      py={{ base: 4, md: 8, lg: 12, xl: 16, '2xl': 20 }}
      style={{ ...styles }}
      position='relative'
    >
      {isVectorOne && (
        <Box
          position='absolute'
          display={{ base: 'none', xl: 'block' }}
          left={{ base: '45rem' }}
          top={{ base: '8rem' }}
        >
          <Image
            src='/images/vector-one.png'
            alt='vector one'
            width={50}
            height={50}
          />
        </Box>
      )}
      {isVectorTwo && (
        <Box
          position='absolute'
          left={{ base: '2rem' }}
          top={{ base: '12rem', xl: '5rem' }}
        >
          <Image
            src='/images/vector-two.png'
            alt='vector two'
            width={50}
            height={50}
          />
        </Box>
      )}
      <Flex
        gap={{ base: 14 }}
        alignItems='flex-start'
        flexDirection={{ base: 'column' }}
      >
        <Text
          as='h2'
          color='secondary'
          fontSize={{ base: '2xl', xl: '3xl' }}
          fontWeight='bold'
          w='100%'
        >
          {header && (
            <HStack
              spacing={1}
              width='100%'
              display={{ base: 'flex', xl: 'block' }}
              justifyContent={{ base: 'center' }}
            >
              <Text
                as='span'
                width='14'
                height='5px'
                backgroundColor='secondary'
                display={{ base: 'inline-block', xl: 'none' }}
              ></Text>
              <Text as='span'>{header}</Text>
              {isSubHeaderLine && (
                <Text
                  as='span'
                  width='14'
                  height='5px'
                  display='inline-block'
                  backgroundColor='secondary'
                ></Text>
              )}
            </HStack>
          )}
        </Text>
        <Flex
          gap={{ base: 8, xl: 0 }}
          flexDirection={{
            base: 'column-reverse',
            xl: isReverse ? 'row-reverse' : 'row',
          }}
          justifyContent={{ base: 'space-between' }}
        >
          <VStack
            spacing={4}
            alignItems='flex-start'
            width={{ base: '100%', xl: '45%' }}
          >
            {title && (
              <Text
                as='h3'
                fontSize={{ base: 'xl', sm: '2xl', md: '3xl' }}
                fontWeight='bold'
              >
                {title}
              </Text>
            )}
            {subtitle && (
              <Text as='h4' fontSize={{ base: 'lg', sm: 'xl', md: '2xl' }}>
                {subtitle}
              </Text>
            )}
            <Text
              as='p'
              color='gray.500'
              lineHeight={{ base: '1.8', md: '1.6' }}
              fontSize={descriptionFontSize}
              //   fontSize={{ base: 'sm', md: 'md', xl: 'xl' }}
            >
              {description}
            </Text>
            {sectionButton && (
              <Button
                onClick={() => router.push(sectionButton.href)}
                {...sectionButton}
              >
                {sectionButton.label}
              </Button>
            )}
          </VStack>
          <SectionImage
            image={sectionImage?.image}
            radius={sectionImage.radius}
            radiusValue={sectionImage.radiusValue}
            outline={sectionImage.outline}
            styles={sectionImage.styles}
          />
        </Flex>
      </Flex>
    </Box>
  )
}
