import {
  Box,
  Container,
  Flex,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Text,
  VStack,
  Button,
} from '@chakra-ui/react'
import { useRouter } from 'next/router'

interface IFAQProps {}

const questions = [
  {
    id: 1,
    title: 'How much does the subscription cost?',
    answer: `Subscription is free and does not cost any fees`,
  },
  {
    id: 2,
    title: 'Is payment made in or off-site?',
    answer: `Payment made on both website and off-website`,
  },
  {
    id: 3,
    title: 'What procedures do you take in case of default?',
    answer: ``,
  },
]

export default function FAQ(props: IFAQProps) {
  const router = useRouter()
  return (
    <Box
      position='relative'
      py={20}
      backgroundImage='/images/faq-bg.png'
      backgroundSize='cover'
      backgroundRepeat='no-repeat'
      backgroundPosition='center'
    >
      <Box
        position='absolute'
        top={0}
        left={0}
        width='100%'
        height='100%'
        backgroundImage='linear-gradient(to right, rgba(33,89, 127, 1), rgba(33,89, 127, 0.8))'
        zIndex='1'
      ></Box>
      <Container minW='95%' p={{ base: 2, sm: 4, md: 8, xl: 14 }}>
        <Flex
          direction={{ base: 'column' }}
          alignItems='center'
          justifyContent='center'
          position='relative'
          zIndex='22'
          gap={{ base: 8 }}
        >
          <VStack>
            <Text
              as='p'
              color='white'
              fontSize={{ base: '2xl' }}
              fontWeight='300'
            >
              Frequently
            </Text>
            <Text as='h3' color='white' fontSize={{ base: '3xl' }}>
              Asked Questions
            </Text>
          </VStack>
          <Accordion
            allowToggle
            backgroundColor='white'
            borderRadius={8}
            width={{ base: '95%', md: '65%', xl: '50%' }}
          >
            {questions.map((question) => (
              <AccordionItem key={question.id} p='1rem 1rem 0 1rem'>
                <h2>
                  <AccordionButton>
                    <Box as='span' flex='1' textAlign='left'>
                      {question.title}
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel py={4} color='gray.500'>
                  {question.answer}
                </AccordionPanel>
              </AccordionItem>
            ))}
          </Accordion>
          <Button
            onClick={() => router.push('/contact-us')}
            variant='primary'
            borderRadius={20}
            my={8}
          >
            See more...
          </Button>
        </Flex>
      </Container>
    </Box>
  )
}
