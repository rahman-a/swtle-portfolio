import { useRef } from 'react'
import Image from 'next/image'
import Navigation from './Navigation'
import Language from './Language'
import {
  Box,
  Button,
  Container,
  Flex,
  HStack,
  useDisclosure,
} from '@chakra-ui/react'
import { HamburgerIcon } from '@chakra-ui/icons'
import Drawer from './Drawer'
import CTA from './CTA'

interface IHeaderProps {}

export default function Header(props: IHeaderProps) {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = useRef<HTMLButtonElement>(null)
  return (
    <header className='header'>
      <Drawer isOpen={isOpen} onClose={onClose} ref={btnRef!} />
      <Container maxW='95%' mx='auto'>
        <Flex justifyContent='space-between'>
          <Box>
            <Image
              src='./images/logo.svg'
              alt='logo'
              width={100}
              height={100}
            />
          </Box>
          <Navigation />
          <HStack spacing='20'>
            <Box
              position='relative'
              display={{ base: 'none', sm: 'none', lg: 'none', xl: 'block' }}
            >
              <Language />
            </Box>
            <CTA label='Try Swtle Today' />
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
