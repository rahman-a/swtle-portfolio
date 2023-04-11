import { HeroSection } from '@components'

interface IAboutUsProps {}

export default function AboutUs(props: IAboutUsProps) {
  return (
    <>
      <HeroSection
        image={{
          base: './images/about-us-sm.png',
          md: './images/about-us-md.png',
          xl: './images/about-us.png',
        }}
        title='About Us'
      />
    </>
  )
}
