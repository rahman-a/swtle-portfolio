import {
  HeroSection,
  ServiceBenefits,
  TextImageSection,
} from '@/src/components'
import { TakeAction } from '@components'
import { Box, Container, Flex } from '@chakra-ui/react'
import { NextSeo } from 'next-seo'
import { useRouter } from 'next/router'

interface IServiceProps {}

export default function Service(props: IServiceProps) {
  const router = useRouter()
  const capitalizeService = (str: string) => {
    return str.charAt(0).toUpperCase() + str.slice(1)
  }
  return (
    <>
      <NextSeo
        title={`Swtle | ${capitalizeService(router.query.service as string)}`}
      />
      <HeroSection
        image={{
          base: './images/services-sm.png',
          md: './images/services-md.png',
          xl: './images/services.png',
        }}
        title='Our Services'
      />
      <Container minWidth='95%'>
        <TextImageSection
          title='Proving finance transactions and setting reminders of payment dates'
          description={`Our platform provides a secure way to prove your financial transactions from debts, electronic bills, securities, or physical rights. With the latest technological methods, you can track your debts locally and internationally, ensuring protection and tracking of your funds. We also make sure to pay you on time without any additional fees or bargaining, even if the debtor changes its place of residence.`}
          sectionImage={{
            image: '/images/service-card.png',
          }}
          styles={{
            paddingTop: '0.5rem',
          }}
        />
      </Container>
      <Flex justify='center'>
        <ServiceBenefits />
      </Flex>
      <Box py={12} px={{ base: 4, md: 0 }}>
        <TakeAction
          content='Sign up today and experience hassle-free management of your finances, secure transactions, and timely payments.'
          cta={{
            label: 'Try Swtle',
            href: '/login',
          }}
        />
      </Box>
    </>
  )
}
