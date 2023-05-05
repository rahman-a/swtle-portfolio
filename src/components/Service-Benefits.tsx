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
import { useTranslation } from 'next-i18next'

interface IServiceBenefitsProps {}

export default function ServiceBenefits(props: IServiceBenefitsProps) {
  const { t } = useTranslation('services')
  return (
    <Card boxShadow='lg' borderRadius='lg' p={4} bg='white'>
      <CardHeader>
        <Text as='h2' fontSize='2xl'>
          {t('service.benefits')}
        </Text>
      </CardHeader>
      <CardBody>
        <List spacing={4}>
          <ListItem>
            <ListIcon as={CheckIcon} color='green.500' />
            {t('service.1.benefits.1')}
          </ListItem>
          <ListItem>
            <ListIcon as={CheckIcon} color='green.500' />
            {t('service.1.benefits.2')}
          </ListItem>
          <ListItem>
            <ListIcon as={CheckIcon} color='green.500' />
            {t('service.1.benefits.3')}
          </ListItem>
          {/* You can also use custom icons from react-icons */}
          <ListItem>
            <ListIcon as={CheckIcon} color='green.500' />
            {t('service.1.benefits.4')}
          </ListItem>
          <ListItem>
            <ListIcon as={CheckIcon} color='green.500' />
            {t('service.1.benefits.5')}
          </ListItem>
        </List>
      </CardBody>
    </Card>
  )
}
