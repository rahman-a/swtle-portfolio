import { Box, Flex, HStack, Text } from '@chakra-ui/react'
import Image from 'next/image'
import { useTranslation } from 'next-i18next'
import { motion } from 'framer-motion'
import { fadeUp } from '@animation-variants'

export interface IPartnerProps {}

export default function Partner(props: IPartnerProps) {
  const { t } = useTranslation('home')
  return (
    <Box
      display='flex'
      justifyContent='center'
      position='relative'
      top={{ base: '-5rem' }}
    >
      <Flex
        direction='column'
        alignItems='center'
        gap={6}
        w={{ base: '85%', md: '60%', lg: '40%', xl: '30%' }}
        backgroundColor='white'
        borderRadius='xl'
        p={{ base: 4, md: 8 }}
      >
        <Text
          color='primary'
          as={motion.h3}
          initial='hide'
          whileInView='show'
          exit='show'
          variants={fadeUp}
        >
          {t('hero.partner_success')}
        </Text>
        <HStack justifyContent='space-evenly' w='100%'>
          <Image
            data-aos='zoom-in'
            src='/images/tdra.png'
            alt='TDRA'
            width={100}
            height={100}
          />
          <Image
            data-aos='zoom-in'
            src='/images/economytourism.png'
            alt='Economy and Tourism'
            width={100}
            height={100}
          />
        </HStack>
      </Flex>
    </Box>
  )
}
