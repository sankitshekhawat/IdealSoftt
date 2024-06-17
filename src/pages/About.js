import React from 'react'
import AbChoose from '../components/about/AbChoose'
import TeamSection from '../components/about/AbTeamSection'
import AbCtaSection from '../components/about/AbCtaSection'
import AbFaqSection from '../components/about/AbFaqSection'
import AbGrowthSection from '../components/about/AbGrouthSection'
import AbTestimonialSection from '../components/about/AbTestimonialSection'
import AbserProductiveSec from '../components/about/AbSerProductiveSec'
import BreadCrumb from '../components/about/BreadCrumb'

const About = () => {
  return (
    <>
      <BreadCrumb/>
      <AbChoose/>
      <TeamSection/>
      <AbCtaSection/>
      <AbFaqSection/>
      <AbGrowthSection/>
      <AbTestimonialSection/>
      <AbserProductiveSec/>
      <AbCtaSection/>
    </>
  )
}

export default About