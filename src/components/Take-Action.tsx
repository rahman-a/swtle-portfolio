import { Button, Flex, HStack, Text, VStack } from '@chakra-ui/react'
import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons'
import { useRouter } from 'next/router'
import { useTranslation } from 'next-i18next'
import NextLink from 'next/link'
interface ITakeActionProps {
  title?: string
  content: string
  cta?: {
    label: string
    href: string
  }
  width?: {
    base?: string
    md?: string
    xl?: string
  }
  isContactUs?: boolean
  styles?: React.CSSProperties
}

export default function TakeAction({
  title,
  content,
  cta,
  width,
  isContactUs,
  styles,
}: ITakeActionProps) {
  const router = useRouter()
  const locale = router.locale
  const { t } = useTranslation('common')
  return (
    <Flex justifyContent='center' style={{ ...styles }}>
      <VStack spacing={8} width={width}>
        {title && (
          <Text
            as='h2'
            fontSize='3xl'
            fontWeight='bold'
            textAlign={{ base: 'center', md: 'left' }}
          >
            {title}
          </Text>
        )}
        <Text
          as='p'
          fontSize={{ base: 'md', xl: 'lg' }}
          color='gray.500'
          textAlign='center'
        >
          {content}
        </Text>
        <HStack>
          {isContactUs && (
            <Button
              as={NextLink}
              variant='outline'
              borderRadius='3xl'
              borderColor='secondary'
              color='secondary'
              href='/contact-us'
            >
              {t('contact_us')}
            </Button>
          )}
          {cta && (
            <Button
              as={NextLink}
              rightIcon={
                locale === 'ar' ? <ChevronLeftIcon /> : <ChevronRightIcon />
              }
              variant='primary'
              borderRadius='3xl'
              href={cta.href}
            >
              {cta.label}
            </Button>
          )}
        </HStack>
      </VStack>
    </Flex>
  )
}
