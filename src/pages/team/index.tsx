import { Container, Flex, Text } from '@chakra-ui/react'
import * as React from 'react'
import {
  HeroSection,
  TakeAction,
  TeamMemberCard,
  TextImageSection,
} from '@components'
import { NextSeo } from 'next-seo'

interface ITeamProps {}

export default function Team(props: ITeamProps) {
  return (
    <>
      <NextSeo title='Swtle | Our Team' />
      <HeroSection
        image={{
          base: '/images/team-sm.png',
          md: '/images/team-md.png',
          xl: '/images/team.png',
        }}
        title='Our Team'
      />
      <Container minW='95%'>
        <TextImageSection
          header='Meet  Our Team'
          description={`Our team consists of highly qualified individuals with master's and doctoral degrees, specializing in a diverse range of fields. From law to artificial intelligence, from psychology to traditional and behavioral economy, we have experts in all disciplines. At Swtle, we believe that our team is our greatest asset. We prioritize hiring the best talent in the industry to provide our clients with unparalleled service and results.`}
          descriptionFontSize={{
            base: 'md',
            md: 'xl',
          }}
          isVectorOne={true}
          isVectorTwo={true}
          HGap={{
            base: 8,
          }}
          sectionImage={{
            image: '/images/team-text.png',
            overlayText: 'team',
          }}
          verticalLine={{
            color: 'variation',
            width: 4,
          }}
        />
        <Flex flexWrap='wrap' justifyContent='center' gap={{ base: 8 }}>
          {[...Array.from({ length: 6 })].map((_, i) => (
            <TeamMemberCard key={i} />
          ))}
        </Flex>

        <TakeAction
          content={`Thank you for taking the time to learn more about our team at Swtle.
          We are proud to have assembled a group of highly qualified and dedicated professionals who are committed to providing our clients with exceptional service and results.`}
          isContactUs={true}
          width={{
            base: '100%',
            md: '75%',
            xl: '50%',
          }}
          styles={{
            padding: '3rem 0',
          }}
        />
      </Container>
    </>
  )
}
