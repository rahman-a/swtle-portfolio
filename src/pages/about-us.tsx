import {
  Container,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  TabIndicator,
} from '@chakra-ui/react'
import { HeroSection, TextImageSection } from '@components'
import { NextSeo } from 'next-seo'

interface IAboutUsProps {}

export default function AboutUs(props: IAboutUsProps) {
  return (
    <>
      <NextSeo title='Swtle | About Us' />
      <HeroSection
        image={{
          base: './images/about-us-sm.png',
          md: './images/about-us-md.png',
          xl: './images/about-us.png',
        }}
        title='About Us'
      />
      <Container minW='95%'>
        <TextImageSection
          header='About Swtle'
          title={
            'Simplify Your Financial Transactions with Swtle Your Trusted Legal Electronic Complex'
          }
          description={`Swtle is an electronic-transaction complex, licensed by the department of economics and tourism in Dubai and authorized by the telecommunications and digital government regulatory authority, used to prove forward sales, advanced payments and electronic invoices, Thus, we help save the environment and make data accessibility fast and effiecient anytime and anywhere.`}
          verticalLine={{
            color: 'variation',
            width: 4,
          }}
          HGap={{
            base: 4,
          }}
          sectionImage={{
            image: '/images/about-swtle.png',
            radius: 'bottom left',
            radiusValue: '10rem',
          }}
          list={[
            {
              id: 1,
              text: `Swtle notifies you of payment dates and gives instant updates on what you have and owe.`,
            },
            {
              id: 2,
              text: `Swtle takes responsibility for all measurements so you can get your money on time without incurring any fees or collection charges.`,
            },
          ]}
        />
        <Tabs
          isFitted
          variant={{ base: 'soft-rounded', sm: 'line' }}
          pt={{ base: '4rem', lg: 0 }}
          colorScheme='teal'
        >
          <TabList
            flexDirection={{ base: 'column', sm: 'row' }}
            color='gray.500'
            _selected={{ color: 'primary' }}
          >
            <Tab
              fontSize={{ base: 'sm', lg: 'lg' }}
              _hover={{ color: 'primary' }}
            >
              Philosophy
            </Tab>
            <Tab
              fontSize={{ base: 'sm', lg: 'lg' }}
              _hover={{ color: 'primary' }}
            >
              Values
            </Tab>
            <Tab
              fontSize={{ base: 'sm', lg: 'lg' }}
              _hover={{ color: 'primary' }}
            >
              Vision
            </Tab>
            <Tab
              fontSize={{ base: 'sm', lg: 'lg' }}
              _hover={{ color: 'primary' }}
            >
              Mission
            </Tab>
            <Tab
              fontSize={{ base: 'sm', lg: 'lg' }}
              _hover={{ color: 'primary' }}
            >
              Goals
            </Tab>
          </TabList>
          <TabIndicator
            mt='-1.5px'
            height='2px'
            bg='primary'
            borderRadius='1px'
          />
          <TabPanels>
            {[...Array(5)].map((_, i) => (
              <TabPanel key={i}>
                <TextImageSection
                  header='Our Philosophy'
                  isSubHeaderLine={true}
                  description={`Harnessing our expertise to provide accurate financial data, undertaking all debt recovery and financial tasks on behalf of creditors, and following them up to find the most convenient solutions to help them enjoy life without worrying about the accumulated debt or incurring any payment fees or commissions.`}
                  descriptionFontSize={{
                    base: 'md',
                    xl: 'lg',
                  }}
                  sectionImage={{
                    image: '/images/philosophy.png',
                    radius: 'top left',
                    radiusValue: '10rem',
                  }}
                />
              </TabPanel>
            ))}
          </TabPanels>
        </Tabs>
      </Container>
    </>
  )
}
