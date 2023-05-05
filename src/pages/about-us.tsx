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
import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { GetStaticPropsContext } from 'next'
interface IAboutUsProps {}

export default function AboutUs(props: IAboutUsProps) {
  const { t } = useTranslation('about-us')
  const { t: tn } = useTranslation('navigation')
  return (
    <>
      <NextSeo title='Swtle | About Us' />
      <HeroSection
        image={{
          base: './images/about-us-sm.png',
          md: './images/about-us-md.png',
          xl: './images/about-us.png',
        }}
        title={tn('about_us')}
      />
      <Container minW='95%'>
        <TextImageSection
          header={`${t('about.header')}`}
          title={`${t('about.title')}`}
          description={`${t('about.content')}`}
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
              text: t('about.point.1'),
            },
            {
              id: 2,
              text: t('about.point.2'),
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
              {t('about.philosophy.header')}
            </Tab>
            <Tab
              fontSize={{ base: 'sm', lg: 'lg' }}
              _hover={{ color: 'primary' }}
            >
              {t('about.values.header')}
            </Tab>
            <Tab
              fontSize={{ base: 'sm', lg: 'lg' }}
              _hover={{ color: 'primary' }}
            >
              {t('about.vision.header')}
            </Tab>
            <Tab
              fontSize={{ base: 'sm', lg: 'lg' }}
              _hover={{ color: 'primary' }}
            >
              {t('about.mission.header')}
            </Tab>
            <Tab
              fontSize={{ base: 'sm', lg: 'lg' }}
              _hover={{ color: 'primary' }}
            >
              {t('about.goals.header')}
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
                  header={`${t('about.philosophy.title')}`}
                  isSubHeaderLine={true}
                  description={`${t('about.philosophy.content')}`}
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
export const getStaticProps = async ({ locale }: GetStaticPropsContext) => {
  return {
    props: {
      ...(await serverSideTranslations(locale!, [
        'common',
        'home',
        'navigation',
        'about-us',
        'footer',
      ])),
    },
  }
}
