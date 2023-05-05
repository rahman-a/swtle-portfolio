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
import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { GetStaticPropsContext } from 'next'
interface IContactUsProps {}

export default function ContactUs(props: IContactUsProps) {
  const { t } = useTranslation('contact')
  const { t: tf } = useTranslation('footer')
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
        title={t('contact')}
      />
      <Container minW='95%' mb='14'>
        <Flex flexDirection={{ base: 'column', lg: 'row' }} gap={{ base: 20 }}>
          <VStack alignItems='flex-start' spacing={4}>
            <Text as='h2' fontSize='3xl'>
              {t('contact.header')}
            </Text>
            <Text as='p' fontSize='xl'>
              {t('contact.subheader')}
            </Text>
            <List spacing={6} py={4}>
              <ListItem>
                <ListIcon as={LocationIcon} color='secondary' />
                {tf('footer.location')}
              </ListItem>
              <ListItem>
                <ListIcon as={PhoneIcon} color='secondary' />
                +971566325325
              </ListItem>
              <ListItem>
                <ListIcon as={EmailIcon} color='secondary' />
                {t('contact.email')} : &nbsp;
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
export const getStaticProps = async ({ locale }: GetStaticPropsContext) => {
  return {
    props: {
      ...(await serverSideTranslations(locale!, [
        'common',
        'home',
        'navigation',
        'contact',
        'footer',
      ])),
    },
  }
}
