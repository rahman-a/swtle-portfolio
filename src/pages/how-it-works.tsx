import {
  Container,
  Box,
  Flex,
  HStack,
  Text,
  Button,
  useMediaQuery,
} from '@chakra-ui/react'
import { useEffect, useRef, useState } from 'react'
import { HeroSection, WorkStep } from '../components'
import { NextSeo } from 'next-seo'
import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { GetStaticPropsContext } from 'next'
export interface IHowItWorksProps {}

export default function HowItWorks(props: IHowItWorksProps) {
  const [timeLineHeight, setTimeLineHeight] = useState(0)
  const [indicatorOffset, setIndicatorOffset] = useState(0)
  const { t } = useTranslation('how-it-works')
  const { t: tn } = useTranslation('navigation')
  const timeLineRef = useRef<HTMLDivElement>(null)
  const timeLineSectionRef = useRef<HTMLDivElement>(null)
  const [isSmallerThan480] = useMediaQuery('(max-width:  480px)')
  const steps = [
    {
      id: 1,
      title: t('works.step.1.title'),
      description: t('works.step.1.content'),
      image: '/images/steps/work-step-1.png',
    },
    {
      id: 2,
      title: t('works.step.2.title'),
      description: t('works.step.2.content'),
      image: '/images/steps/work-step-2.png',
    },
    {
      id: 3,
      title: t('works.step.3.title'),
      description: t('works.step.3.content'),
      image: '/images/steps/work-step-3.png',
    },
    {
      id: 4,
      title: t('works.step.4.title'),
      description: t('works.step.4.content'),
      image: '/images/steps/work-step-4.png',
    },
    {
      id: 5,
      title: t('works.step.5.title'),
      description: t('works.step.5.content'),
      image: '/images/steps/work-step-5.png',
    },
    {
      id: 6,
      title: t('works.step.6.title'),
      description: t('works.step.6.content'),
      image: '/images/steps/work-step-6.png',
    },
    {
      id: 7,
      title: t('works.step.7.title'),
      description: t('works.step.7.content'),
      image: '/images/steps/work-step-7.png',
    },
  ]
  const indicatorOffsetHandler = () => {
    const stepsNumber = steps.length
    const offset = timeLineHeight / stepsNumber
    const indicatorOffsetValue = isSmallerThan480
      ? indicatorOffset + offset
      : indicatorOffset + offset + 0.5
    if (indicatorOffsetValue > timeLineHeight) return
    setIndicatorOffset(indicatorOffset + offset + 0.5)
  }

  useEffect(() => {
    if (timeLineRef.current?.offsetHeight) {
      setTimeLineHeight(timeLineRef.current?.offsetHeight)
    }
  }, [timeLineRef.current?.offsetHeight])
  return (
    <>
      <NextSeo title='Swtle | How it Works' />
      <HeroSection
        image={{
          base: '/images/how-it-works-sm.png',
          md: '/images/how-it-works-md.png',
          xl: '/images/how-it-works.png',
        }}
        title={tn('how_it_works')}
      />
      <Container minW='95%'>
        <Text
          as='h2'
          fontSize={{ base: '2xl', md: '3xl', xl: '4xl' }}
          width={{ base: '95%', md: '60%' }}
        >
          {t('works.header')}
        </Text>
        <Flex
          py={32}
          width='100%'
          flexDirection='column'
          alignItems='center'
          justifyContent='center'
          position='relative'
        >
          <Text as='p' width='fit-content' fontWeight='bold' fontSize='3xl'>
            {t('works.strategy')}
          </Text>
          <HStack
            ref={timeLineRef}
            width={{ base: '100%', sm: 'auto' }}
            alignItems={{ base: 'flex-start', sm: 'center' }}
            flexDirection='column'
            position='relative'
          >
            {steps.map((step, index) => (
              <WorkStep
                key={step.id}
                step={index + 1}
                isReverse={index % 2 === 1}
                title={step.title}
                description={step.description}
                image={step.image}
                ref={timeLineSectionRef}
              />
            ))}
            <Box
              width='0.3rem'
              height={{
                base: `${timeLineHeight}px`,
                sm: `${timeLineHeight}px`,
              }}
              position='absolute'
              bg='gray.300'
              borderRadius='md'
              top={{ base: '5rem', sm: 'unset' }}
              left={{ base: '-12px', sm: 'unset' }}
            >
              <Box
                position='absolute'
                width='0.3rem'
                transition='top 0.5s ease-in-out'
                top={`${indicatorOffset}px`}
                height={{ base: '16rem' }}
                bg='secondary'
                borderRadius='md'
              ></Box>
            </Box>
          </HStack>
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
        'how-it-works',
        'footer',
      ])),
    },
  }
}
