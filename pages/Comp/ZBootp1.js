import React from 'react'
import { Button, Card, Col, Container, ListGroup, Row,ProgressBar } from 'react-bootstrap'

function Bootp1() {
    return (


        <div>

            <Container className='d-flex mt-4 ' style={{border:'1px solid black'}}>


                <div className='d-flex flex-column' style={{width:'40%'}}>


                    <Card className='text-center align-items-center ' >

                        <Card.Img src="https://media.istockphoto.com/id/1406197730/photo/portrait-of-a-young-handsome-indian-man.jpg?b=1&s=170667a&w=0&k=20&c=KtmKHyOE6MJV0w2DiGX8P4399KHNbZ3p8lCjTEabGcY=" style={{ width: '200px', height: '200px', borderRadius: "50%", }} />
                        <Card.Body>


                            <Card.Title>Title</Card.Title>
                            <Card.Text>fullstack develaper</Card.Text>

                            <Button className='m-3' variant="primary" >
                                Primary
                            </Button>


                            <Button variant="primary" >
                                Primary
                            </Button>



                        </Card.Body>
                    </Card>


                   
                        <ListGroup className='m-2 p-4' >

                            <ListGroup.Item className='py-3'>  hbhb   <span style={{ float: "right" }}>hhhh</span>     </ListGroup.Item>
                            <ListGroup.Item className='py-3'>  hbhb    <span style={{ float: "right" }}>jjm</span>  </ListGroup.Item>
                            <ListGroup.Item className='py-3'>  hbhb    <span style={{ float: "right" }}>jjm</span>  </ListGroup.Item>

                        </ListGroup>

                 


                </div>

                <div className='d-flex flex-column' style={{width:'60%'}}>


                        <ListGroup className='m-2 p-4' variant="flash">

                            <ListGroup.Item>
                            <Row className='py-2'>
                                <Col>bhbh</Col>
                                <Col>bhbh</Col>
                          
                            </Row>
                            </ListGroup.Item>


                            <ListGroup.Item>
                            <Row className='py-2'>
                                <Col>bhbh</Col>
                                <Col>bhbh</Col>
                          
                            </Row>
                            </ListGroup.Item>
                         
                            <ListGroup.Item>
                            <Row className='py-2'>
                                <Col>bhbh</Col>
                                <Col>bhbh</Col>
                          
                            </Row>
                            </ListGroup.Item>
                         
                            <ListGroup.Item>
                            <Row className='py-2'>
                                <Col>bhbh</Col>
                                <Col>bhbh</Col>
                          
                            </Row>
                            </ListGroup.Item>
                        
                         
                          </ListGroup>
               
                       
                       <div className='d-flex flex-row  '>

                        <Card className='m-4 p-4' style={{width:'20rem'}}>
                            <Card.Title>assignment Project Status</Card.Title>

                            <Card.Body>

                                <Card.Subtitle>web design</Card.Subtitle>
                                <ProgressBar variant="success" now={40} className='mb-3' />
                                <Card.Subtitle>web design</Card.Subtitle>
                                <ProgressBar variant="success" now={78} className='mb-3' />
                                <Card.Subtitle>web design</Card.Subtitle>
                                <ProgressBar variant="success" now={80} className='mb-3' />

                                <Card.Subtitle>web design</Card.Subtitle>
                                <ProgressBar variant="success" now={90} className='mb-3' />


                            </Card.Body>
                        </Card>

                        
                        <Card className='m-4 p-4' style={{width:'20rem'}}>
                            <Card.Title>assignment Project Status</Card.Title>

                            <Card.Body>

                                <Card.Subtitle>web design</Card.Subtitle>
                                <ProgressBar variant="success" now={40} className='mb-3' />
                                <Card.Subtitle>web design</Card.Subtitle>
                                <ProgressBar variant="success" now={78} className='mb-3' />
                                <Card.Subtitle>web design</Card.Subtitle>
                                <ProgressBar variant="success" now={80} className='mb-3' />

                                <Card.Subtitle>web design</Card.Subtitle>
                                <ProgressBar variant="success" now={90} className='mb-3' />


                            </Card.Body>
                        </Card>



                       </div>

                </div>



            </Container>








        </div>


    )
}

export default Bootp1