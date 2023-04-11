import { HeroSection } from '../components'

interface IContactUsProps {}

export default function ContactUs(props: IContactUsProps) {
  return (
    <>
      <HeroSection
        image={{
          base: './images/contact-us-sm.png',
          md: './images/contact-us-md.png',
          xl: './images/contact-us.png',
        }}
        position={{ base: 'inherit', md: 'center' }}
        title='Contact Us'
      />
    </>
  )
}
