import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'
import ServiceCardTab from './Service-Card'
import { CheckCircleIcon } from '@chakra-ui/icons'
import { PlantIcon, RiseIcon, HandShakeIcon } from '@icons'
import TextImageSection from './Text-Image-Section'

export interface IBusinessServicesProps {}

export default function BusinessServices(props: IBusinessServicesProps) {
  return (
    <Tabs isFitted>
      <TabList gap={4} flexDirection={{ base: 'column', md: 'row' }}>
        <ServiceCardTab
          title='Proving finance transactions and setting reminders of payment dates'
          icon={<CheckCircleIcon boxSize={{ base: '2rem', lg: '4rem' }} />}
        />
        <ServiceCardTab
          title='Save the Environment with Electronic Invoices'
          icon={<PlantIcon boxSize={{ base: '2rem', lg: '4rem' }} />}
        />
        <ServiceCardTab
          title='Providing credit indicators'
          icon={<RiseIcon boxSize={{ base: '2rem', lg: '4rem' }} />}
        />
        <ServiceCardTab
          title='Helping in Making a Suitable Decisions'
          icon={<HandShakeIcon boxSize={{ base: '2rem', lg: '4rem' }} />}
        />
      </TabList>
      <TabPanels>
        <TabPanel>
          <TextImageSection
            title='Proving finance transactions and setting reminders of payment dates'
            description={`Our platform provides a secure way to prove your financial transactions from debts, electronic bills, securities, or physical rights. With the latest technological methods, you can track your debts locally and internationally, ensuring protection and tracking of your funds. We also make sure to pay you on time without any additional fees or bargaining, even if the debtor changes its place of residence.`}
            sectionImage={{
              image: '/images/service-card.png',
            }}
            styles={{
              paddingTop: '0.5rem',
            }}
          />
        </TabPanel>
        <TabPanel>
          <TextImageSection
            title='Proving finance transactions and setting reminders of payment dates'
            description={`Our platform provides a secure way to prove your financial transactions from debts, electronic bills, securities, or physical rights. With the latest technological methods, you can track your debts locally and internationally, ensuring protection and tracking of your funds. We also make sure to pay you on time without any additional fees or bargaining, even if the debtor changes its place of residence.`}
            sectionImage={{
              image: '/images/service-card.png',
            }}
            styles={{
              paddingTop: '0.5rem',
            }}
          />
        </TabPanel>
        <TabPanel>
          <TextImageSection
            title='Proving finance transactions and setting reminders of payment dates'
            description={`Our platform provides a secure way to prove your financial transactions from debts, electronic bills, securities, or physical rights. With the latest technological methods, you can track your debts locally and internationally, ensuring protection and tracking of your funds. We also make sure to pay you on time without any additional fees or bargaining, even if the debtor changes its place of residence.`}
            sectionImage={{
              image: '/images/service-card.png',
            }}
            styles={{
              paddingTop: '0.5rem',
            }}
          />
        </TabPanel>
        <TabPanel>
          <TextImageSection
            title='Proving finance transactions and setting reminders of payment dates'
            description={`Our platform provides a secure way to prove your financial transactions from debts, electronic bills, securities, or physical rights. With the latest technological methods, you can track your debts locally and internationally, ensuring protection and tracking of your funds. We also make sure to pay you on time without any additional fees or bargaining, even if the debtor changes its place of residence.`}
            sectionImage={{
              image: '/images/service-card.png',
            }}
            styles={{
              paddingTop: '0.5rem',
            }}
          />
        </TabPanel>
      </TabPanels>
    </Tabs>
  )
}
