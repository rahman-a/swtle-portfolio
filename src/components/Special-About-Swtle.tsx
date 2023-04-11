import {
  Container,
  Flex,
  HStack,
  List,
  ListIcon,
  ListItem,
  Text,
} from '@chakra-ui/react'
import { CheckIcon } from '@chakra-ui/icons'
import SectionImage from './Section-Image'

interface ISpecialAboutSwtleProps {}

const features = [
  {
    id: 1,
    title: 'Empowering Your Business with the Best Team',
    description: `Hiring an elite work team with master’s and doctoral degrees,
  specialized in all disciplines, including law, negotiation, legal
  accounting, auditing, international arbitration, statistics,
  traditional and behavioral economy, artificial intelligence
  cybersecurity, psychology, and sociology.`,
  },
  {
    id: 2,
    title: 'Time Management Tools for Better Cash Flow and Business Continuity',
    description: `Collecting debt as fast as possible using time management tools to
  provide cash flow to ensure that clients’ business continues
  smoothly.`,
  },
  {
    id: 3,
    title: 'The Art of Amicable Debt Recovery Without Incurring Legal Costs',
    description: `Attempting to recover debts amicably, regardless of the cases
  requiring legal procedures against the debtor if he evades payment
  at no cost to the creditor.`,
  },
  {
    id: 4,
    title: 'International Debt Recovery with Free Updates for Creditors',
    description: `Tracking the debtor internationally by our partners in case he
  travels abroad to avoid payment while keeping direct contact with
  the creditor to give him updates without any required fees.`,
  },
]

export default function SpecialAboutSwtle(props: ISpecialAboutSwtleProps) {
  return (
    <Container minW='95%' py={20}>
      <Flex direction='column' gap={16} alignItems='center'>
        <Text
          as='h2'
          fontSize={{ base: '2xl', xl: '3xl' }}
          fontWeight='bold'
          color='secondary'
        >
          What Special About Swtle?!
        </Text>
        <Flex
          gap={{ base: 14, xl: 20 }}
          alignItems='flex-start'
          flexDirection={{ base: 'column', xl: 'row' }}
        >
          <SectionImage
            image='/images/special-swtle.png'
            radius='top right'
            outline='bottom right'
          />
          <List width={{ base: '100%', xl: '45%' }} spacing={8}>
            {features.map((feature) => (
              <ListItem key={feature.id}>
                <HStack>
                  <ListIcon
                    width='1.5rem'
                    height='1.5rem'
                    as={CheckIcon}
                    color='green.500'
                  />
                  <Text
                    as='h3'
                    fontSize={{ base: 'md', sm: 'lg', xl: 'xl' }}
                    mb={2}
                    display='inline-block'
                  >
                    {feature.title}
                  </Text>
                </HStack>
                <Text
                  as='p'
                  fontSize={{ base: 'sm', sm: 'md' }}
                  color='gray.600'
                  ml={{ base: '2.5rem', xl: 12 }}
                >
                  {feature.description}
                </Text>
              </ListItem>
            ))}
          </List>
        </Flex>
      </Flex>
    </Container>
  )
}
