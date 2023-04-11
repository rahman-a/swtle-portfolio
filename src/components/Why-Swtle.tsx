import * as React from 'react'
import FeatureCard from './Feature-Card'
import { Box, Container, Flex, Text } from '@chakra-ui/react'

interface IWhySwtleProps {}

const cards = [
  {
    id: 1,
    title:
      'Proving finance transactions and setting reminders of payment dates',
    description:
      'Our platform provides a secure way to prove your financial transactions from debts, electronic bills, securities, or physical rights. With the latest technological methods, you can track your debts locally and internationally, ensuring protection and tracking of your funds. We also make sure to pay you on time without any additional fees or bargaining, even if the debtor changes its place of residence.',
    image: '/images/feature-1.png',
  },

  {
    id: 2,
    title: 'Save the Environment with Electronic Invoices.',
    description:
      'Our system offers electronic invoicing to preserve the environment, reduce paper invoice costs, and avoid paper loss or damage. With our easy-to-use electronic invoicing system, you can create, send, and receive invoices, all in one place.',
    image: '/images/feature-2.png',
  },
  {
    id: 3,
    title: 'Providing credit indicators',
    description:
      'Providing credit indicators, creditworthiness, and risk ratios for new customers to identify their payment obligation level through statistical business analyses.',
    image: '/images/feature-3.png',
  },
  {
    id: 4,
    title: 'Helping in Making a Suitable Decisions ',
    description:
      'Helping you make decisions suitable for your clients credit lines to increase sales and protect your money.',
    image: '/images/feature-4.png',
  },
]

export default function WhySwtle(props: IWhySwtleProps) {
  return (
    <Container minW='95%' py={20}>
      <Flex
        direction='column'
        justifyContent='space-between'
        alignItems='center'
        gap={20}
      >
        <Box textAlign='center'>
          <Text
            as='h3'
            fontSize={{ base: '3xl', xl: '4xl' }}
            fontWeight='bold'
            color='secondary'
          >
            Why SWTLE
          </Text>
          <Text as='p' fontSize={{ base: 'xl', xl: '2xl' }} width={80}>
            Specially Design for All Your Electronic Transactions
          </Text>
        </Box>
        <Flex
          direction={{ base: 'column', md: 'row' }}
          justifyContent='center'
          alignItems='center'
          width='100%'
          flexWrap='wrap'
          gap={4}
        >
          {cards.map((card) => (
            <FeatureCard key={card.id} {...card} />
          ))}
        </Flex>
      </Flex>
    </Container>
  )
}
