import {
  Box,
  Flex,
  HStack,
  Text,
  VStack,
  Link,
  Container,
} from '@chakra-ui/react'
import * as React from 'react'
import { HeroSection } from '@components'
import Image from 'next/image'
import NextLink from 'next/link'
import { FacebookIcon, LinkedinIcon, TwitterIcon } from '@/src/icons'
import { NextSeo } from 'next-seo'

interface ITeamProps {}

export default function Team(props: ITeamProps) {
  return (
    <>
      <NextSeo title='Swtle | Dr. Abdulrahim Madi' />
      <HeroSection
        image={{
          base: '/images/team-sm.png',
          md: '/images/team-md.png',
          xl: '/images/team.png',
        }}
        title='Our Team'
      />
      <Container minW='95%' py={14}>
        <Flex
          justifyContent='space-between'
          gap={20}
          flexDirection={{ base: 'column', md: 'row' }}
        >
          <VStack width={{ base: '100%', md: '30%' }}>
            <Image
              src='/images/team-member.png'
              alt='team member'
              width={450}
              height={450}
              style={{ borderRadius: '50%' }}
            />
            <Text
              as='h2'
              color='secondary'
              fontWeight='bold'
              textAlign='center'
              fontSize={{ base: 'xl', md: '2xl', xl: '4xl' }}
            >
              Dr. Abdulrahim Madi
            </Text>
            <HStack spacing={4}>
              <Link
                as={NextLink}
                color='gray.500'
                href='https://www.facebook.com'
                target='_blank'
              >
                <FacebookIcon boxSize={6} />
              </Link>
              <Link
                as={NextLink}
                color='gray.500'
                href='https://www.facebook.com'
                target='_blank'
              >
                <LinkedinIcon boxSize={6} />
              </Link>
              <Link
                as={NextLink}
                color='gray.500'
                href='https://www.facebook.com'
                target='_blank'
              >
                <TwitterIcon boxSize={6} />
              </Link>
            </HStack>
          </VStack>
          <VStack
            alignItems='flex-start'
            spacing={8}
            width={{ base: '100%', md: '70%' }}
          >
            <Text as='p' maxWidth='40rem'>
              Assistant Professor of Law Faculty Kind Saud University Doctorate
              in private law Faculty of Law University of Menoufia, Egypt...
            </Text>
            <Box>
              <Text as='h3' color='secondary'>
                Lorem ipsum
              </Text>
              <Text as='p'>
                dolor sit amet consectetur. Eget ut convallis elementum
                hendrerit imperdiet ut. Proin volutpat commodo velit praesent
                aenean quis mollis. Dignissim sed sagittis scelerisque duis ac
                consectetur quis. Aliquet id tempor placerat metus. Sit ac
                viverra lobortis amet vestibulum quam commodo feugiat in. Diam
                netus imperdiet nisi arcu pulvinar et pellentesque. Euismod eget
                ac volutpat vulputate porttitor. Aliquam adipiscing pharetra
                mattis elementum nec porttitor aliquam mauris.
              </Text>
            </Box>
            <Box>
              <Text as='h3' color='secondary'>
                Lorem ipsum
              </Text>
              <Text as='p'>
                dolor sit amet consectetur. Eget ut convallis elementum
                hendrerit imperdiet ut. Proin volutpat commodo velit praesent
                aenean quis mollis. Dignissim sed sagittis scelerisque duis ac
                consectetur quis. Aliquet id tempor placerat metus. Sit ac
                viverra lobortis amet vestibulum quam commodo feugiat in. Diam
                netus imperdiet nisi arcu pulvinar et pellentesque. Euismod eget
                ac volutpat vulputate porttitor. Aliquam adipiscing pharetra
                mattis elementum nec porttitor aliquam mauris.
              </Text>
            </Box>
          </VStack>
        </Flex>
      </Container>
    </>
  )
}
