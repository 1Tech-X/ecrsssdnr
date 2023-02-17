import React from 'react'
import Header from '../Header/Header'
import NavbarMenu from '../NavbarMenu/NavbarMenu'
import Footer from '../Footer/Footer'
import CustomBreadCumb from '../CustomBreadCumb/CustomBreadCumb'
const Infrastructure = () => {
  return (
    <div>
        <Header />
        <NavbarMenu />
        <CustomBreadCumb breadname="Infrastructure" />
        <div className='d-flex justify-content-center'>
        {/* <h1 className='text-center mt-3 mb-3'>School <span className='underline'>Image Gallery</span></h1> */}
        </div>
        <Footer />
    </div>
  )
}

export default Infrastructure