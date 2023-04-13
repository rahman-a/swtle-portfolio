import { NextSeo } from 'next-seo'
import { ContactForm, HeroSection } from '../components'
import {
  Container,
  Flex,
  List,
  Link,
  ListIcon,
  ListItem,
  Text,
  VStack,
  Box,
} from '@chakra-ui/react'
import { EmailIcon, PhoneIcon } from '@chakra-ui/icons'
import NextLink from 'next/link'
import { LocationIcon } from '../icons'
import Image from 'next/image'

interface IContactUsProps {}

export default function ContactUs(props: IContactUsProps) {
  return (
    <>
      <NextSeo title='Swtle | Contact Us' />
      <HeroSection
        image={{
          base: './images/contact-us-sm.png',
          md: './images/contact-us-md.png',
          xl: './images/contact-us.png',
        }}
        position={{ base: 'inherit', md: 'center' }}
        title='Contact Us'
      />
      <Container minW='95%' mb='14'>
        <Flex flexDirection={{ base: 'column', lg: 'row' }} gap={{ base: 20 }}>
          <VStack alignItems='flex-start' spacing={4}>
            <Text as='h2' fontSize='3xl'>
              We would love to hear from you...
            </Text>
            <Text as='p' fontSize='xl'>
              We’ll get back to you as soon as possible.
            </Text>
            <List spacing={6} py={4}>
              <ListItem>
                <ListIcon as={LocationIcon} color='secondary' />
                United Arab Emirates, Dubai, Deira, Al Maktoum Road, M M Tower
                office no. 303
              </ListItem>
              <ListItem>
                <ListIcon as={PhoneIcon} color='secondary' />
                +971566325325
              </ListItem>
              <ListItem>
                <ListIcon as={EmailIcon} color='secondary' />
                Email:
                <Link as={NextLink} href='mailto:info@swtle.com'>
                  info@swtle.com
                </Link>
              </ListItem>
            </List>
            {/* Google Map */}
            <Box width={{ base: '100%', lg: 'auto' }}>
              <Image
                src='/images/map.png'
                alt='Google Map'
                width={600}
                height={400}
              />
            </Box>
          </VStack>
          <ContactForm />
        </Flex>
      </Container>
    </>
  )
}
