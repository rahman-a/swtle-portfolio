import { Box, List, ListItem, Stack, Text } from '@chakra-ui/react'
import IndicatorCircle from './Indicator-Circle'
import IndicatorLine from './Indicator-Line'

const steps = [
  { id: 1, name: 'Credential', phase: 0 },
  { id: 2, name: 'Personal Info', phase: 1 },
  { id: 3, name: 'Addresses', phase: 2 },
  { id: 4, name: 'Phones', phase: 3 },
  { id: 5, name: 'Verification Documents', phase: 4 },
]

export interface IRegistrationProgressIndicatorProps {
  step: number
}

export default function RegistrationProgressIndicator({
  step,
}: IRegistrationProgressIndicatorProps) {
  return (
    <Box position='relative'>
      <IndicatorLine step={step} />
      <List
        spacing={{ base: 0, md: 12 }}
        display={{ base: 'flex', md: 'block' }}
        w={{ base: '98vw', md: 'auto' }}
        alignItems='center'
        justifyContent={{ base: 'space-between', md: 'center' }}
        transform={{ base: 'translateX(-10px)', md: 'translateX(0)' }}
      >
        {steps.map((s) => (
          <ListItem key={s.id}>
            <Stack
              gap={2}
              alignItems='center'
              justifyContent='center'
              flexDirection={{ base: 'column', md: 'row' }}
            >
              <IndicatorCircle
                state={
                  s.phase === step
                    ? 'current'
                    : s.phase > step
                    ? 'undone'
                    : 'done'
                }
                step={s.phase + 1}
              />
              <Text
                opacity={s.phase <= step ? 1 : 0.4}
                w={{ base: 16, sm: 20, md: 40 }}
                h={{ base: 20, md: 'auto' }}
                fontWeight={{ base: 'normal', md: 'bold' }}
                as='p'
                margin='0'
                fontSize={{ base: 'xs', sm: 'sm', md: 'lg', lg: 'xl' }}
                textAlign={{ base: 'center', md: 'left' }}
              >
                {s.name}
              </Text>
            </Stack>
          </ListItem>
        ))}
      </List>
    </Box>
  )
}
