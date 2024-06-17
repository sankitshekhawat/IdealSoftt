import React from 'react'
import Breadcrumb from '../components/blogsidebar/Breadcrumb'
import { Outlet } from 'react-router-dom'
import BlogSection from '../components/blogsidebar/BlogSection'

const Blogsidebar = () => {
  return (
<>
    <Breadcrumb/>
    <BlogSection/>
    {/* <Outlet/>  */}
</>

)
}

export default Blogsidebar