import React, { useState } from 'react';
import Calendar from 'react-calendar';
import Header from '../Header/Header'
import NavbarMenu from '../NavbarMenu/NavbarMenu'
import Footer from '../Footer/Footer'
import CustomBreadCumb from '../CustomBreadCumb/CustomBreadCumb'
const Acadmenic = () => {
  const [value, onChange] = useState(new Date());
  return (
    <div>
        <Header />
        <NavbarMenu />
        <CustomBreadCumb breadname="Academic Calendar" />
        <div className='d-flex justify-content-center'>
        <h1 className='text-center mt-3 mb-3'>School <span className='underline'> Calendar</span></h1>
        <Calendar 
              startAccessor="start"
              endAccessor="end"
              style={{ height: 500 }}
        onChange={onChange} value={value} />
        </div>
        <Footer />
    </div>
  )
}

export default Acadmenic