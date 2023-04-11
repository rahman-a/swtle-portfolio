import Head from 'next/head'
import {
  FAQ,
  HowItWorkDiagram,
  MainHeroSection,
  SpecialAboutSwtle,
  TakeAction,
  TakeActionSection,
  TextImageSection,
  WhySwtle,
} from '@components'
import { NextSeo } from 'next-seo'
import { Container } from '@chakra-ui/react'

export default function Home() {
  return (
    <>
      <NextSeo
        title='Swtle | Home'
        description='Swtle is an electronic-transaction complex, licensed by the department of economics and tourism in Dubai and authorized by the telecommunications and digital government regulatory authority, used to prove forward sales, advanced payments and electronic invoices, Thus, we help save the environment and make data accessibility fast and effiecient anytime and anywhere...'
        canonical='https://www.swtle.com'
      />
      <MainHeroSection isStatistics />
      <WhySwtle />
      <TakeAction
        content='Sign up today and enjoy the peace of mind that comes with organized, secure financial transactions and electronic invoicing.'
        cta={{ label: 'Sign up', href: '/login' }}
        width={{ base: '100%', md: '80%', xl: '60%' }}
        styles={{ padding: '2.5rem 0', backgroundColor: '#F9F9F9' }}
      />
      <SpecialAboutSwtle />
      <HowItWorkDiagram
        images={{
          base: '/images/diagram-sm.svg',
          sm: '/images/diagram-md.svg',
          lg: '/images/diagram.svg',
        }}
      />
      <Container minWidth='95%'>
        <TextImageSection
          header='About us'
          isSubHeaderLine={true}
          title='Simplify Your Financial Transactions with Swtle'
          subtitle='Your Trusted Legal Electronic Complex'
          description={`Swtle is an electronic-transaction complex, licensed by the
        department of economics and tourism in Dubai and authorized by
        the telecommunications and digital government regulatory
        authority, used to prove forward sales, advanced payments and
        electronic invoices, Thus, we help save the environment and make
        data accessibility fast and effiecient anytime and anywhere...`}
          descriptionFontSize={{ base: 'sm', md: 'md' }}
          sectionButton={{
            label: 'Read more...',
            href: '/about-us',
            variant: 'primary',
            borderRadius: 8,
          }}
          sectionImage={{
            image: '/images/about-swtle.png',
            radius: 'top left',
            radiusValue: '12rem',
            outline: 'bottom left',
          }}
        />
      </Container>
      <FAQ />
      <TakeActionSection />
    </>
  )
}
