import { Text } from '@chakra-ui/react'
import * as React from 'react'
import { HeroSection } from '../components'

interface ITeamProps {}

export default function Team(props: ITeamProps) {
  return (
    <>
      <HeroSection
        image={{
          base: './images/team-sm.png',
          md: './images/team-md.png',
          xl: './images/team.png',
        }}
        title='Our Team'
      />
    </>
  )
}
