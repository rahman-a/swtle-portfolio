import {
  BusinessServices,
  HeroSection,
  IndividualServices,
  TextImageSection,
} from '@/src/components'
import {
  Box,
  Container,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  HStack,
  Text,
  TabIndicator,
  Divider,
} from '@chakra-ui/react'
import { UserIcon, SuitCaseIcon } from '@icons'
import { NextSeo } from 'next-seo'

interface IServicesProps {}

export default function Services(props: IServicesProps) {
  return (
    <>
      <NextSeo title='Swtle | Services' />
      <HeroSection
        image={{
          base: './images/services-sm.png',
          md: './images/services-md.png',
          xl: './images/services.png',
        }}
        title='Our Services'
      />
      <Container minWidth='95%'>
        <Box pt={{ base: 4, md: 12, lg: 16, xl: 20 }} position='relative'>
          <Tabs isFitted>
            <TabList>
              <Tab color='gray.400' _selected={{ color: 'primary' }}>
                <HStack spacing={4}>
                  <UserIcon boxSize={8} />
                  <Text
                    as='h2'
                    fontSize={{ base: 'xl', md: '2xl', lg: '3xl', xl: '4xl' }}
                  >
                    Individual
                  </Text>
                </HStack>
              </Tab>
              <Tab color='gray.400' _selected={{ color: 'primary' }}>
                <HStack spacing={4}>
                  <SuitCaseIcon boxSize={8} />
                  <Text
                    as='h2'
                    fontSize={{ base: 'xl', md: '2xl', lg: '3xl', xl: '4xl' }}
                  >
                    Business
                  </Text>
                </HStack>
              </Tab>
            </TabList>
            <TabIndicator
              mt='-1.5px'
              height={{ base: '2px', md: '3px' }}
              bg='primary'
              borderRadius='1px'
            />
            <TabPanels>
              <TabPanel>
                <IndividualServices />
              </TabPanel>
              <TabPanel>
                <BusinessServices />
              </TabPanel>
            </TabPanels>
          </Tabs>
        </Box>
        <Divider height='2px' my={4} backgroundColor='gray.500' />
        <Text
          as='h2'
          fontWeight='bold'
          fontSize={{ base: 'xl', md: '2xl', lg: '3xl' }}
        >
          Discover the Benefits of Our Professional Services
        </Text>
        <Box>
          <TextImageSection
            title='Prioritization'
            description={`Organizing all your financial obligations in one place so you can prioritize basics and delay secondaries to save time and effort and facilitates the payment of your duties according to the due date.`}
            descriptionFontSize={{ base: 'sm', md: 'md', xl: 'xl' }}
            sectionImage={{
              image: '/images/prioritization.png',
            }}
            styles={{
              padding: '0.5rem 0',
            }}
          />
        </Box>
        <Box>
          <TextImageSection
            title='Payment guarantee'
            description={`Tracking and protecting you financial dues and notifying the debtor of payment day to guarantee to receive them on time. In case of delay, his account will be blocked, and his credit rating will be downgraded; more over, he will pay a financial penalty, and will take legal procedures against him. Also, he will bear all the coasts of these legal procedures. Moreover, extending services scope includes tracking the debtor internationally if he traveled to evade payment and taking legal procedures against him wherever he was.`}
            descriptionFontSize={{ base: 'sm', md: 'md', xl: 'xl' }}
            sectionImage={{
              image: '/images/payment-guarantee.png',
            }}
            styles={{
              padding: '0.5rem 0',
            }}
            isReverse
          />
        </Box>
        <Box>
          <TextImageSection
            title='Increase Sales'
            description={`Providing financial merit indicators and credit rating for customers through their financial transactions helps to decide about future sales and maintain reasonable levels of risk. In case of stumbling over and non-repayment, the site takes appropriate procedures without incurring the creditor any fees.`}
            descriptionFontSize={{ base: 'sm', md: 'md', xl: 'xl' }}
            sectionImage={{
              image: '/images/increase-sales.png',
            }}
            styles={{
              padding: '0.5rem 0',
            }}
          />
        </Box>
      </Container>
    </>
  )
}
