import * as React from 'react'
import {
  Button,
  ButtonGroup,
  Card,
  CardBody,
  CardFooter,
  Flex,
  HStack,
  Link,
  Text,
  VStack,
} from '@chakra-ui/react'
import Image from 'next/image'
import { useRouter } from 'next/router'
import NextLink from 'next/link'
import { FacebookIcon, LinkedinIcon, TwitterIcon } from '../icons'

export interface ITeamMemberCardProps {}

const par = `Professor of Law Sadat University in Egypt - Doctorate in Law
Specializing in Commercial Law from the Faculty of Law Menoufia
Univesity in Egypt...`

export default function TeamMemberCard(props: ITeamMemberCardProps) {
  const router = useRouter()
  return (
    <Card boxShadow='lg' width={96}>
      <CardBody alignItems='center' display='flex' flexDirection='column'>
        <Image
          src='/images/team-member.png'
          alt='Team Member'
          width={300}
          height={300}
        />
        <VStack mt={3} spacing={4}>
          <Text
            as='h3'
            fontSize='2xl'
            color='secondary'
            fontWeight='bold'
            textAlign='center'
          >
            Legal Accountant. Ahmed Al-Agbari
          </Text>
          <Text as='p' fontSize='md' height={20}>
            {par.length > 200 ? par.slice(0, 200) + '...' : par}
          </Text>
        </VStack>
      </CardBody>
      <CardFooter>
        <Flex w='100%' justifyContent='space-between'>
          <HStack spacing={4}>
            <Link
              as={NextLink}
              color='gray.500'
              href='https://www.facebook.com'
              target='_blank'
            >
              <FacebookIcon />
            </Link>
            <Link
              as={NextLink}
              color='gray.500'
              href='https://www.facebook.com'
              target='_blank'
            >
              <LinkedinIcon />
            </Link>
            <Link
              as={NextLink}
              color='gray.500'
              href='https://www.facebook.com'
              target='_blank'
            >
              <TwitterIcon />
            </Link>
          </HStack>
          <Link
            as={NextLink}
            href='/team/ahmed-al-agbari'
            color='secondary'
            size='sm'
          >
            Read More
          </Link>
        </Flex>
      </CardFooter>
    </Card>
  )
}
