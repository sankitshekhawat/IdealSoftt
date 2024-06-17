import React from 'react'
import BreadcrumbWrapper from '../components/servicedetails/BreadcrumbWrapper'
import { Outlet } from 'react-router-dom'
import ServiceDetails from '../components/servicedetails/ServiceDetails'

const Servicesd = () => {
  return (
<>
    <div>
    <BreadcrumbWrapper/>
    <ServiceDetails/>
        <Outlet/>
    </div>
</>

)
}

export default Servicesd