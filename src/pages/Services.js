import React from 'react'
import BreadcrumbWrapper from '../components/service/BreadcrumbWrapper'
import ServiceProvideSection from '../components/service/ServiceProvideSection'
import CTASection from '../components/service/CtaSection'
import ProjectSuccessful from '../components/service/ProjectSuccessfull'
import PricingSection from '../components/service/PricingSection'
import ScrollUp from '../components/service/ScrollUp'

const Services = () => {
  return (
    <>
      <BreadcrumbWrapper/>
      <ServiceProvideSection/>
      <CTASection/>
      <ProjectSuccessful/>
      <PricingSection/>
      <ScrollUp/>
    </>
  )
}

export default Services