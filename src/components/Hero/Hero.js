import React,{useState,useEffect} from 'react'
import { Card, Carousel, Col, Container,  Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Hero.css';

const Hero = () => {
  const [getdata, setgetdata] = useState([]);
  console.log(getdata)
  const fetchData = () => {
    fetch("https://ecrsssdnr.in/admin/noticefetch")
      .then(response => {
        return response.json()
      })
      .then(data => {
        setgetdata(data)
      })
  }

  useEffect(() => {
    fetchData()
  }, [])

     

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
                <Card.Header className='text-center mt-2'>Notice</Card.Header>
                
                <marquee  direction="up"  height="400" scrollamount="5" onmouseover="this.stop();" onmouseleave="this.start();">
       
                {getdata.map(notice => (<>
                <Link  to={`/notice/${notice.id}`}>{notice.title}</Link><br></br>
                <hr></hr>
                </>))}
                
                </marquee>
              </Card.Body>
            </Card>
         </Col>
       </Row>
     </Container>
    </div>
  )
}

export default Hero