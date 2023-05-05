import {
  Box,
  Flex,
  HStack,
  VStack,
  Text,
  Button,
  useDisclosure,
} from '@chakra-ui/react'
import { useTranslation } from 'next-i18next'
import CTA from './Header/CTA'
import Video from './Videos'
import { PlayIcon } from '../icons'
import Partners from './Partners'

interface IMainHeroSectionProps {
  isStatistics?: boolean
}

export default function MainHeroSection({
  isStatistics,
}: IMainHeroSectionProps) {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const { t: tHome } = useTranslation('home')
  const stats = [
    { id: 1, label: tHome('hero.stats.transactions'), value: '60.000+' },
    { id: 2, label: tHome('hero.stats.member'), value: '75K+' },
    {
      id: 3,
      label: tHome('hero.stats.current_payments'),
      value: '1.7M+',
      currency: 'aed',
    },
    {
      id: 4,
      label: tHome('hero.stats.settled_payments'),
      value: '2.4M+',
      currency: 'aed',
    },
  ]
  return (
    <>
      <Video isOpen={isOpen} onClose={onClose} />
      <Box
        className='hero-section'
        height='100vh'
        width='100%'
        backgroundImage={{
          base: 'url(/images/main-hero-section-sm.png)',
          md: 'url(/images/main-hero-section-md.png)',
          xl: 'url(/images/main-hero-section.png)',
        }}
        backgroundSize='cover'
        backgroundPosition={{ base: 'inherit', md: 'center' }}
        backgroundRepeat={'no-repeat'}
        position={'relative'}
        top='-70px'
        left={0}
        z-index={-1}
      >
        <Flex
          position={'relative'}
          top={0}
          left={0}
          width={'100%'}
          height={'100%'}
          justifyContent={'center'}
          alignItems={'center'}
        >
          <VStack spacing={{ base: 24, md: 28 }}>
            <VStack spacing={6}>
              <Text
                as='h1'
                color='white'
                fontWeight='bold'
                textAlign='center'
                fontSize={{ base: '25px', md: '40px', lg: '60px' }}
              >
                {tHome('hero.title')} &nbsp;
                <Text as='span' color='secondary' textDecoration='underline'>
                  {tHome('hero.swtle')}
                </Text>
              </Text>
              <Text
                as='p'
                color='white'
                textAlign={{ base: 'center', md: 'left' }}
                width={{ base: '80%', md: '100%' }}
                fontSize={{ base: '16px', md: '18px', lg: '20px' }}
              >
                {tHome('hero.subtitle')}
              </Text>
              <HStack spacing={3}>
                <Button
                  variant='outline'
                  color='white'
                  _hover={{ background: '#000', borderColor: '#000' }}
                  borderRadius='5rem'
                  onClick={onOpen}
                >
                  {tHome('hero.video_btn')}
                  <PlayIcon width='1.5rem' height='1.5rem' />
                </Button>
                <CTA label={tHome('hero.cta')} />
              </HStack>
            </VStack>
            {isStatistics && (
              <HStack
                w='100%'
                justifyContent='space-between'
                alignItems='center'
                flexWrap='wrap'
              >
                {stats.map((stat) => (
                  <VStack
                    key={stat.id}
                    spacing={3}
                    color='white'
                    w={{ base: '10rem', sm: '14rem', md: '18rem' }}
                    mb={{ base: '2rem !important', xl: '0' }}
                  >
                    <Text
                      as='p'
                      fontSize={{
                        base: '12px',
                        sm: '14px',
                        md: '16px',
                        lg: '20px',
                        xl: '24px',
                      }}
                    >
                      {stat.label}
                    </Text>
                    <Text
                      as='p'
                      fontSize={{
                        base: '16px',
                        sm: '18px',
                        md: '20px',
                        lg: '24px',
                        xl: '28px',
                      }}
                      fontWeight='bold'
                    >
                      {stat.currency ? (
                        <Text as='span' fontSize={{ base: '20' }}>
                          {stat.currency.toUpperCase()} &nbsp;
                        </Text>
                      ) : (
                        ''
                      )}
                      {stat.value}
                    </Text>
                  </VStack>
                ))}
              </HStack>
            )}
          </VStack>
        </Flex>
        <Partners />
      </Box>
    </>
  )
}
