import NextLink from 'next/link'
import {
  Box,
  Divider,
  HStack,
  Text,
  Link,
  Popover,
  PopoverContent,
  PopoverTrigger,
  Stack,
  PopoverArrow,
  PopoverCloseButton,
} from '@chakra-ui/react'
import { ChevronDownIcon } from '@chakra-ui/icons'
import classNames from 'classnames'
import {
  HomeIcon,
  BriefcaseIcon,
  GearIcon,
  EnvelopeIcon,
  TeamIcon,
  InfoIcon,
} from '@icons'

interface INavigationProps {
  isOpen?: boolean
  onClose?: () => void
}

const links = [
  { id: 1, label: 'Home', url: '/', icon: <HomeIcon color='teal' /> },
  {
    id: 2,
    label: 'Our Services',
    url: '/services',
    icon: <BriefcaseIcon color='teal' />,
    children: {
      individual: [
        {
          id: 1,
          label: 'Prepayment Recording',
          url: '/services/prepayment-recording',
        },
        {
          id: 2,
          label: 'Electronic Invoicing',
          url: '/services/electronic-invoicing',
        },
        { id: 3, label: 'Payment Tracking', url: '/services/payment-tracking' },
        { id: 4, label: 'Cashback & Offers', url: '/services/cashback-offers' },
      ],
      business: [
        { id: 1, label: 'Finance', url: '/services/finance' },
        { id: 2, label: 'Accounting', url: '/services/accounting' },
        {
          id: 3,
          label: 'Electronic Invoicing',
          url: '/services/electronic-invoicing',
        },
        {
          id: 4,
          label: 'Credit Indicators',
          url: '/services/credit-indicators',
        },
        { id: 5, label: 'Expenses', url: '/services/expenses' },
      ],
    },
  },
  {
    id: 3,
    label: 'How it works?',
    url: '/how-it-works',
    icon: <GearIcon color='teal' />,
  },
  { id: 4, label: 'Our Team', url: '/team', icon: <TeamIcon color='teal' /> },
  {
    id: 5,
    label: 'About us',
    url: '/about-us',
    icon: <InfoIcon color='teal' />,
  },
  {
    id: 6,
    label: 'Contact us',
    url: '/contact-us',
    icon: <EnvelopeIcon color='teal' />,
  },
]

export default function Navigation({ isOpen, onClose }: INavigationProps) {
  const navClassNames = classNames('navigation', {
    show: isOpen,
  })
  return (
    <nav className={navClassNames}>
      <Stack
        spacing={{ base: 6, xl: 12 }}
        direction={{ base: 'column', sm: 'column', lg: 'column', xl: 'row' }}
        alignItems={isOpen ? 'flex-start' : 'center'}
      >
        {links.map((link) => {
          if (link.children) {
            return (
              <Box key={link.id} width={isOpen ? '100%' : 'auto'}>
                <Popover trigger={'hover'} placement={'bottom-start'}>
                  <PopoverTrigger>
                    <HStack
                      spacing={2}
                      width={isOpen ? '100%' : 'auto'}
                      borderBottom={isOpen ? '2px solid #f4f4f4' : 'none'}
                      padding={isOpen ? '0 1rem' : '0'}
                    >
                      {isOpen && <Box>{link.icon}</Box>}
                      <Link
                        as={NextLink}
                        href={'#'}
                        p={2}
                        fontSize='md'
                        fontWeight={500}
                        color={isOpen ? 'primary' : 'white'}
                        borderBottom='2px solid transparent'
                        _hover={{
                          textDecoration: 'none'!,
                          borderColor: isOpen ? 'primary' : 'white',
                        }}
                      >
                        {link.label} <ChevronDownIcon />
                      </Link>
                    </HStack>
                  </PopoverTrigger>

                  {link.children && (
                    <PopoverContent
                      border={0}
                      boxShadow='xl'
                      position={'relative'}
                      bg='white'
                      rounded='xl'
                      minW={{ base: 'xs', sm: 'sm', lg: 'md', xl: 'lg' }}
                    >
                      <PopoverArrow />
                      <PopoverCloseButton color='primary' />
                      <HStack p={5} alignItems={'flex-start'}>
                        <SubNavItems
                          items={link.children.individual}
                          title='Individual'
                          onClose={onClose && onClose}
                        />
                        <Divider
                          orientation='vertical'
                          height={{ base: '350px', sm: '300px' }}
                          px={2}
                        />
                        <SubNavItems
                          items={link.children.business}
                          title='Business'
                          onClose={onClose && onClose}
                        />
                      </HStack>
                      <Link
                        as={NextLink}
                        href='/services'
                        color='secondary'
                        position={'absolute'}
                        right='2rem'
                        bottom='1rem'
                        fontSize='sm'
                      >
                        See More...
                      </Link>
                    </PopoverContent>
                  )}
                </Popover>
              </Box>
            )
          }
          return (
            <HStack
              key={link.id}
              width={isOpen ? '100%' : 'auto'}
              borderBottom={isOpen ? '2px solid #f4f4f4' : 'none'}
              padding={isOpen ? '0 1rem' : '0'}
            >
              {isOpen && <Box>{link.icon}</Box>}
              <Link
                as={NextLink}
                onClick={onClose}
                p={2}
                href={link.url ?? '#'}
                fontSize={'md'}
                fontWeight={500}
                color={isOpen ? 'primary' : 'white'}
                borderBottom='2px solid transparent'
                _hover={{
                  textDecoration: 'none',
                  borderColor: isOpen ? 'primary' : 'white',
                }}
              >
                {link.label}
              </Link>
            </HStack>
          )
        })}
      </Stack>
    </nav>
  )
}

type Item = {
  id: number
  label: string
  url: string
}

const SubNavItems = ({
  items,
  title,
  onClose,
}: {
  items: Item[]
  title: string
  onClose?: () => void
}) => {
  return (
    <Box>
      <Text p={2} fontSize={'md'} color='primary' fontWeight={900}>
        {title}
      </Text>
      <Stack spacing={0.5} direction={'column'} alignItems={'flex-start'}>
        {items.map((item) => (
          <Link
            as={NextLink}
            key={item.id}
            onClick={onClose ? onClose : undefined}
            p={2}
            color='primary'
            fontSize={{ base: 'sm', md: 'md' }}
            href={item.url}
            _hover={{
              color: 'white',
              bg: 'primary',
              borderRadius: 'md',
            }}
          >
            {item.label}
          </Link>
        ))}
      </Stack>
    </Box>
  )
}
