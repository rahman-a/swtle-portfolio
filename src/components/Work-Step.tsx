import { Box, Flex, Text, VStack, useBreakpointValue } from '@chakra-ui/react'
import Image from 'next/image'
import { forwardRef } from 'react'

interface IWorkStepProps {
  step: number
  title: string
  description: string
  image: string
  isReverse?: boolean
}

const WorkStep = forwardRef<HTMLDivElement, IWorkStepProps>(
  ({ step, title, description, image, isReverse }, ref) => {
    const width = useBreakpointValue({ base: 500, sm: 300 })
    return (
      <Flex
        ref={ref}
        flexDirection={
          isReverse
            ? { base: 'column', sm: 'row-reverse' }
            : { base: 'column', sm: 'row' }
        }
        width={{ sm: '30rem', md: '41rem' }}
        gap={12}
        py={8}
        px={{ base: 4, sm: 0 }}
      >
        <VStack
          width={{ base: '100%', sm: '300px' }}
          spacing={2}
          alignItems={
            isReverse
              ? { base: 'flex-start' }
              : { base: 'flex-start', sm: 'flex-end' }
          }
        >
          <HexaGon step={step} />
          <Text as='h3' color='primary' fontSize={{ base: 'xl', md: '2xl' }}>
            {title}
          </Text>
          <Text as='p' fontSize={{ base: 'sm', md: 'md' }}>
            {description}
          </Text>
        </VStack>
        <Image
          src={image}
          alt={title}
          width={width ?? 300}
          height={150}
          style={{
            objectFit: 'cover',
            borderRadius: '1rem',
            transform: 'rotateX(25deg)',
            clipPath: isReverse
              ? 'polygon(12% 0, 100% 0, 100% 100%, 0% 100%)'
              : 'polygon(0 0, 88% 0, 100% 100%, 0% 100%)',
          }}
        />
      </Flex>
    )
  }
)

function HexaGon({ step }: { step: number }) {
  return (
    <Box className='hexagon'>
      <VStack>
        <Text as='p' fontSize={{ base: 'sm' }} letterSpacing={1}>
          STEP
        </Text>
        <Text as='h4' fontSize={{ base: '2xl' }}>
          {step < 10 ? `0${step}` : step}
        </Text>
      </VStack>
    </Box>
  )
}

WorkStep.displayName = 'WorkStep'
export default WorkStep
