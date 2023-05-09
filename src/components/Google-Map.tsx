import * as React from 'react'
import { useBreakpointValue } from '@chakra-ui/react'

export interface IGoogleMapProps {}

export default function GoogleMap(props: IGoogleMapProps) {
  const width = useBreakpointValue({ base: '100%', md: '600px' })
  return (
    <iframe
      src='https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d3012.339176113886!2d55.317913646271926!3d25.262041543941017!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2seg!4v1683650144773!5m2!1sen!2seg'
      width={width}
      height='450'
      style={{ border: 0 }}
      allowFullScreen={true}
      loading='lazy'
      referrerPolicy='no-referrer-when-downgrade'
    ></iframe>
  )
}
