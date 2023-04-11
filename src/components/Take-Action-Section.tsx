import { Box, Container, Flex } from '@chakra-ui/react'
import { useRouter } from 'next/router'
import TakeAction from './Take-Action'

interface ITakeActionSectionProps {}

export default function TakeActionSection(props: ITakeActionSectionProps) {
  const router = useRouter()
  return (
    <Box
      position='relative'
      py={20}
      backgroundImage='/images/take-action-bg.png'
      backgroundSize='cover'
      backgroundRepeat='no-repeat'
      backgroundPosition='center'
    >
      <Box
        position='absolute'
        top={0}
        left={0}
        width='100%'
        height='100%'
        backgroundColor='#fff'
        opacity={0.9}
        zIndex='1'
      ></Box>
      <Container minW='95%' p={{ base: 2, sm: 4, md: 8, xl: 14 }}>
        <Flex
          direction={{ base: 'column' }}
          alignItems='center'
          justifyContent='center'
          position='relative'
          zIndex='22'
          gap={{ base: 8 }}
        >
          <TakeAction
            title='Ready to take the next step with Swtle?'
            content={`If you have any questions or would like to learn more about our products/services, our team of experts is ready to help. Whether you need a consultation or a quote, we've got you covered. Fill out our online contact form and we'll get back to you soon. Thanks for visiting!`}
            cta={{
              label: 'Get Started for Free',
              href: '/login',
            }}
            width={{
              base: '100%',
              md: '75%',
              xl: '50%',
            }}
          />
        </Flex>
      </Container>
    </Box>
  )
}
