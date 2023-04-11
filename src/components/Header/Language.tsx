import { ChevronDownIcon } from '@chakra-ui/icons'
import { Image } from '@chakra-ui/react'
import { Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react'
import * as React from 'react'

interface ILanguageProps {}

export default function Language(props: ILanguageProps) {
  const [language, setLanguage] = React.useState('EN')

  return (
    <Menu>
      <MenuButton fontSize={{ base: 'sm', lg: 'md' }}>
        {language} <ChevronDownIcon />
      </MenuButton>
      <MenuList color='#000'>
        <MenuItem
          minH='48px'
          onClick={() => setLanguage('EN')}
          fontSize={{ base: 'sm', lg: 'md' }}
        >
          <Image
            boxSize='2rem'
            borderRadius='full'
            src='./images/usa.png'
            alt='Fluffybuns the destroyer'
            mr='12px'
          />
          <span>English</span>
        </MenuItem>
        <MenuItem
          minH='40px'
          onClick={() => setLanguage('AR')}
          fontSize={{ base: 'sm', lg: 'md' }}
        >
          <Image
            boxSize='2rem'
            borderRadius='full'
            src='./images/uae.png'
            alt='Simon the pensive'
            mr='12px'
          />
          <span>Arabic</span>
        </MenuItem>
      </MenuList>
    </Menu>
  )
}
