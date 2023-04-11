import Image from 'next/image'
import NextLink from 'next/link'
import { Flex, VStack, Text, Link, Box } from '@chakra-ui/react'
import * as React from 'react'

interface IFeatureCardProps {
  title: string
  description: string
  image: string
}

export default function FeatureCard({
  title,
  description,
  image,
}: IFeatureCardProps) {
  return (
    <Flex
      gap={8}
      flexDirection={{ base: 'column', md: 'row' }}
      width={{ base: '100%', xl: '45%' }}
    >
      <Image src={image} alt='feature' width={217} height={165} />
      <VStack alignItems='flex-start'>
        <Text as='h3' fontSize='xl' fontWeight='bold'>
          {title}
        </Text>
        <Text
          as='p'
          fontSize='md'
          color='gray.500'
          height={32}
          overflow='hidden'
        >
          {description.length > 250
            ? description.substring(0, 250) + ' . . . .'
            : description}
        </Text>
        <Box textAlign='right' w='100%'>
          <Link as={NextLink} href='#' color='secondary'>
            Read More...
          </Link>
        </Box>
      </VStack>
    </Flex>
  )
}
