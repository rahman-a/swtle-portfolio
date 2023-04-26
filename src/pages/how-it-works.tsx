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

export interface IHowItWorksProps {}

const steps = [
  {
    id: 1,
    title: 'Online Debt Verification',
    description:
      'The creditor must prove the debt maturity electronically on the website by mentioning the amount of debt and the maturity date.',
    image: '/images/steps/work-step-1.png',
  },
  {
    id: 2,
    title: 'Debtor Accept',
    description: 'The debtor must accept the process of proving debt maturity.',
    image: '/images/steps/work-step-2.png',
  },
  {
    id: 3,
    title: 'Negotiation in Case of Delay',
    description:
      'In case of delaying maturity date, debtor and creditor negotiate with each other creditor can edit the maturity date.',
    image: '/images/steps/work-step-3.png',
  },
  {
    id: 4,
    title: 'Swtle Send Reminders',
    description:
      'The website sends reminders to the debtor when approaching the maturity date.',
    image: '/images/steps/work-step-4.png',
  },
  {
    id: 5,
    title: 'Prove Payment Electronically',
    description:
      'If the debtor paid off his dept, the creditor would prove it electronically.',
    image: '/images/steps/work-step-5.png',
  },
  {
    id: 6,
    title: 'Late payment consequences',
    description:
      'If the debtor does not pay on time, his account will be blocked And his credit rating will be downgraded; moreover the site will pay a 10% fine on the amount due.',
    image: '/images/steps/work-step-6.png',
  },
  {
    id: 7,
    title: 'Debt collection actions',
    description:
      'Our team will contact the debtor to pay it off if he insists on not paying, our team will take legal procedures against him also and he will bear all the costs of the legal procedures.',
    image: '/images/steps/work-step-7.png',
  },
]

export default function HowItWorks(props: IHowItWorksProps) {
  const [timeLineHeight, setTimeLineHeight] = useState(0)
  const [indicatorOffset, setIndicatorOffset] = useState(0)
  const timeLineRef = useRef<HTMLDivElement>(null)
  const timeLineSectionRef = useRef<HTMLDivElement>(null)
  const [isSmallerThan480] = useMediaQuery('(max-width:  480px)')

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
        title='How it Works?'
      />
      <Container minW='95%'>
        <Text
          as='h2'
          fontSize={{ base: '2xl', md: '3xl', xl: '4xl' }}
          width={{ base: '95%', md: '60%' }}
        >
          We&apos;re here to help you understand the process of proving debt
          maturity on our website...
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
            Work Strategy
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
