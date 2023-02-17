import React from 'react'
import { Navbar,Container } from 'react-bootstrap'

const Header = () => {
  return (
    <div>
        <Navbar bg="light" variant="light" className=' py-3 '>
          <Container fluid>
            <Navbar.Brand href="#home">
              <img
                alt=""
                src="/images/logo.png"
                width="480"
                height="90"
                className="d-inline-block align-top"
              /></Navbar.Brand>
              <Navbar.Brand href="#home">
              <img
                alt=""
                src="/images/20230209_152205.png"
                width="480"
                height="90"
                className="d-inline-block ms-auto align-top"
              />

              
            </Navbar.Brand>
          </Container>
        </Navbar>
    </div>
  )
}

export default Header