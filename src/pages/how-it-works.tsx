import { Text } from '@chakra-ui/react'
import * as React from 'react'
import { HeroSection } from '../components'

export interface IHowItWorksProps {}

export default function HowItWorks(props: IHowItWorksProps) {
  return (
    <>
      <HeroSection
        image={{
          base: './images/how-it-works-sm.png',
          md: './images/how-it-works-md.png',
          xl: './images/how-it-works.png',
        }}
        title='How it Works?'
      />
    </>
  )
}
