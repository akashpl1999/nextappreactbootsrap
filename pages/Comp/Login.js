import React from 'react'
import { Container, Button } from 'react-bootstrap'
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';



export default function Login() {
 
 
 
    return (
 
 
          <div style={{minHeight:'500px'}}>

      
        <div>
 
             <Container className='d-flex  bg-dark text-light justify-content-center align-items-center '   style={{ maxWidth: "500px",  padding: '20px', marginTop:'30px', borderRadius: "10px", height:"400px"  }} >

                 
                <Form >

                    <Form.Group as={Row} className='mb-3' controlId='formplaintextEmail'>
                        
                        <Form.Label column sm="3">Email</Form.Label>

                        <Col sm="9">


                            <Form.Control type='email' placeholder='name@gmail.com'></Form.Control>


                        </Col>


                    </Form.Group>

                    <Form.Group as={Row} className='mb-3' controlId='formplaintextEmail'>
                        <Form.Label column sm="3">Password</Form.Label>

                        <Col sm="9">


                            <Form.Control type='password' placeholder='password'></Form.Control>

                            
                        </Col>


                    </Form.Group>

                    <Button variant='primary'>Submit</Button>

              
                </Form>

             </Container>




        </div>
        </div>
 


  )
}

