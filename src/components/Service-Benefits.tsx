import {
  Card,
  CardBody,
  CardHeader,
  List,
  ListIcon,
  ListItem,
  Text,
} from '@chakra-ui/react'
import * as React from 'react'
import { CheckIcon } from '@chakra-ui/icons'

interface IServiceBenefitsProps {}

export default function ServiceBenefits(props: IServiceBenefitsProps) {
  return (
    <Card boxShadow='lg' borderRadius='lg' p={4} bg='white'>
      <CardHeader>
        <Text as='h2' fontSize='2xl'>
          Benefits
        </Text>
      </CardHeader>
      <CardBody>
        <List spacing={4}>
          <ListItem>
            <ListIcon as={CheckIcon} color='green.500' />
            Prove the authenticity of your financial transactions with ease
          </ListItem>
          <ListItem>
            <ListIcon as={CheckIcon} color='green.500' />
            Track your finances both locally and internationally
          </ListItem>
          <ListItem>
            <ListIcon as={CheckIcon} color='green.500' />
            Protect your data and funds with advanced encryption techniques
          </ListItem>
          {/* You can also use custom icons from react-icons */}
          <ListItem>
            <ListIcon as={CheckIcon} color='green.500' />
            Receive timely payments without additional fees or bargaining
          </ListItem>
          <ListItem>
            <ListIcon as={CheckIcon} color='green.500' />
            Hassle-free management of your finances
          </ListItem>
        </List>
      </CardBody>
    </Card>
  )
}
