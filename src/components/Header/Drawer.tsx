import { ElementType, RefObject, forwardRef } from 'react'
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Button,
  VStack,
  HStack,
} from '@chakra-ui/react'
import Language from './Language'
import Navigation from './Navigation'
import CTA from './CTA'

interface IDrawerProps {
  isOpen: boolean
  onClose: () => void
}

const DrawerComponent = forwardRef<HTMLButtonElement, IDrawerProps>(
  ({ isOpen, onClose }, ref) => {
    return (
      <Drawer
        isOpen={isOpen}
        placement='right'
        onClose={onClose}
        finalFocusRef={ref as RefObject<HTMLButtonElement>}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>
            <HStack spacing={2} alignItems={'flex-start'}>
              <Language />
            </HStack>
          </DrawerHeader>
          <DrawerBody p='0'>
            <Navigation isOpen={isOpen} onClose={onClose} />
            <CTA isOpen={isOpen} onClose={onClose} label='Try Swtle Today' />
          </DrawerBody>
          <DrawerFooter>
            <Button size='md' variant='outline' mr={3} onClick={onClose}>
              Close
            </Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    )
  }
)

DrawerComponent.displayName = 'DrawerComponent'
export default DrawerComponent
