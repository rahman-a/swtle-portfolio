import {
  Box,
  Container,
  Flex,
  HStack,
  Text,
  VStack,
  Link,
  Divider,
} from '@chakra-ui/react'
import Image from 'next/image'
import NextLink from 'next/link'
import { PhoneIcon } from '@chakra-ui/icons'
import {
  LocationIcon,
  EnvelopeIcon,
  FacebookIcon,
  LinkedinIcon,
  TwitterIcon,
  MessengerIcon,
} from '@icons'

interface IFooterProps {}

export default function Footer(props: IFooterProps) {
  return (
    <footer className='footer'>
      <Container maxW='95%' mx='auto'>
        <Flex direction={'column'} gap={10} alignItems='center'>
          <Image src='./images/logo.svg' alt='logo' width={100} height={100} />
          <Flex
            gap={{
              base: 10,
              sm: 10,
              md: 20,
              xl: 40,
            }}
            alignItems='flex-start'
            direction='row'
            flexWrap='wrap'
          >
            <VStack alignItems='flex-start' spacing={4}>
              <HStack spacing={4}>
                <LocationIcon />
                <Text as='p' w={{ sm: '20rem', xl: '25rem' }}>
                  United Arab Emirates, Dubai, Deira, Al Maktoum Road, M M Tower
                  office no. 303
                </Text>
              </HStack>
              <HStack spacing={4}>
                <PhoneIcon />
                <Text as='p'>+971 4 295 0000</Text>
              </HStack>
              <HStack spacing={4}>
                <EnvelopeIcon />
                <Text as='p'>
                  <Link href='mailto:info@swtle.com'>info@swtle.com</Link>
                </Text>
              </HStack>
              <HStack>
                <Flex gap={4}>
                  <Link href='https://www.facebook.com/swtle'>
                    <FacebookIcon />
                  </Link>
                  <Link href='https://www.facebook.com/swtle'>
                    <LinkedinIcon />
                  </Link>
                  <Link href='https://www.facebook.com/swtle'>
                    <TwitterIcon />
                  </Link>
                  <Link href='https://www.facebook.com/swtle'>
                    <MessengerIcon />
                  </Link>
                </Flex>
              </HStack>
            </VStack>
            <VStack alignItems='flex-start' spacing={1}>
              <Link as={NextLink} href='/'>
                Home
              </Link>
              <Link as={NextLink} href='/services' w='fit-content'>
                Our Services
              </Link>
              <Link as={NextLink} href='/about-us'>
                About us
              </Link>
              <Link as={NextLink} href='/contact-us'>
                FAQs
              </Link>
            </VStack>
            <VStack alignItems='flex-start' spacing={4}>
              <Link as={NextLink} href='/team'>
                Our Team
              </Link>
              <Link as={NextLink} href='/privacy-policy'>
                Privacy Policy
              </Link>
              <Link as={NextLink} href='/terms-conditions'>
                Terms & Conditions
              </Link>
              <Link as={NextLink} href='/contact-us'>
                Contact Us
              </Link>
            </VStack>
          </Flex>
          <Box>
            <Divider mb={3} opacity={0.5} />
            <Text
              fontSize={{ base: 'sm' }}
              as='p'
              opacity={0.5}
              textAlign='center'
            >
              © {new Date().getFullYear()} Copyright Swtle. All content on this
              website is owned by Swtle.
            </Text>
          </Box>
        </Flex>
      </Container>
    </footer>
  )
}
