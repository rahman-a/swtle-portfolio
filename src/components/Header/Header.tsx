import { useRef } from 'react'
import Image from 'next/image'
import Navigation from './Navigation'
import Language from './Language'
import classnames from 'classnames'
import {
  Box,
  Button,
  Container,
  Flex,
  HStack,
  Link,
  useDisclosure,
} from '@chakra-ui/react'
import NextLink from 'next/link'
import { HamburgerIcon } from '@chakra-ui/icons'
import { useRouter } from 'next/router'
import Drawer from './Drawer'
import CTA from './CTA'

interface IHeaderProps {}

export default function Header(props: IHeaderProps) {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = useRef<HTMLButtonElement>(null)
  const router = useRouter()
  const headerClassNames = classnames('header', {
    'header--bg': router.asPath === '/login' || router.asPath === '/register',
  })
  return (
    <header className={headerClassNames}>
      <Drawer isOpen={isOpen} onClose={onClose} ref={btnRef!} />
      <Container maxW='95%' mx='auto'>
        <Flex justifyContent='space-between'>
          <Box>
            <Link as={NextLink} href='/'>
              <Image
                src='./images/logo.svg'
                alt='logo'
                width={100}
                height={100}
              />
            </Link>
          </Box>
          <Navigation />
          <HStack spacing='20'>
            <Box
              position='relative'
              display={{ base: 'none', sm: 'none', lg: 'none', xl: 'block' }}
            >
              <Language />
            </Box>
            {router.asPath !== '/login' && router.asPath !== '/register' && (
              <CTA label='Try Swtle Today' />
            )}
            <Button
              display={{ base: 'block', sm: 'block', lg: 'block', xl: 'none' }}
              bg={'transparent'}
              cursor={'pointer'}
              onClick={onOpen}
              ref={btnRef!}
            >
              <HamburgerIcon w={10} h={10} />
            </Button>
          </HStack>
        </Flex>
      </Container>
    </header>
  )
}
