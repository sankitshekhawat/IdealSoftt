import React from 'react'
import Breadcrumb from '../components/blog/Breadcrumb'
import NewsSection from '../components/blog/NewsSection'
import { Outlet } from 'react-router-dom'

const Blog = () => {
  return (
    <>
      <Breadcrumb/>
      <NewsSection/>
      <Outlet/>
    </>
  )
}

export default Blog