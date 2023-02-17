import React from 'react'
import { Card, Carousel, Col, Container, ListGroup, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Hero.css';
const Hero = () => {
  return (
    <div>
     <Container className='hero mt-2 mb-2'>
       <Row>
         <Col md="9">
         <Carousel fade>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="images/1.jpg"
                alt="First slide"
              />
              <Carousel.Caption>
                <h3 className='text-light'>First slide label</h3>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="images/2.jpg"
                alt="Second slide"
              />

              <Carousel.Caption>
                <h3 className='text-light'>Second slide label</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="images/3.jpg"
                alt="Third slide"
              />

              <Carousel.Caption>
                <h3 className='text-light'>Third slide label</h3>
                <p>
                  Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="images/4.jpg"
                alt="Third slide"
              />

              <Carousel.Caption>
                <h3>Third slide label</h3>
                <p>
                  Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
         </Col>
         <Col md="3">
            <Card>
              <Card.Body>
              <img src="https://www.kindpng.com/picc/m/392-3927594_cork-board-pin-png-transparent-png.png" alt="Cork Board Pin Png, Transparent Png@kindpng.com" style={{height:"30px"}} />
                <Card.Header className='text-center mt-2'>Notice</Card.Header>
                <p class="marquee">
        <span>
        Notice is a piece of. <a href="#">Click Here</a><br />
        Notice is to be inform  <a href="#">Click Here</a><br />
        Notice is to be  infor<a href="#">Click Here</a><br />
        Notice is to be  infor<a href="#">Click Here</a><br />
        Notice is to be infor<a href="#">Click Here</a> <br />
        Notice is to be infor<a href="#">Click Here</a><br />
          
        </span>
</p>
              </Card.Body>
            </Card>
         </Col>
       </Row>
     </Container>
    </div>
  )
}

export default Hero