import React from 'react'
import { Card, Col, Container, Row } from 'react-bootstrap'

const Principal = () => {
  return (
    <div>
        <Container className='mt-4'>
            <h2 className='fw-bold mt-2 mb-4'>About Principal</h2>
            <Row>
                <Col lg={3} >
                    <Card className='p-2 rounded-0'>
                        <Card.Img src='images/1.jpg'className='rounded-0'/>
                        <Card.Body>
                            <Card.Title className='text-center'>Principal</Card.Title>
                            <Card.Text className='text-center'>Message</Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col lg={9} >
                    <p>East central railway sr. secondary school (ECRSSS) located at Danapur Po+Ps Khagaul Distt. Patna Pin-801 105 Patna Bihar is one of the popular schools in India. The School has been rated by 3 people on iCBSE. The School has been recognized by Central Board of Secondary Education since a long time. The East central railway sr. secondary school has been viewed 852 times by the visitors on iCBSE. This School is counted among the top-rated Schools in Bihar with an excellent academic track record. If you're looking for more details regarding syllabus, admission procedure, examinations schedule, results and application forms, kindly contact the relevant department of the school.
Source: https://www.icbse.com</p>
                </Col>
            </Row>
        </Container>
    </div>
  )
}

export default Principal