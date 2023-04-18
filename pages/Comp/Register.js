import React from 'react'
import { Button, Container, Form, Row ,Col} from 'react-bootstrap'
import Link from 'next/router'
export default function Register() {


    return (


        <div className='d-flex  bg-dark text-light'  style={{ maxWidth: "500px", margin: 'auto', marginTop: '10px', marginBottom: '10px', padding: '20px', borderRadius: "10px", }} >

            <Container >

                <Form>
                    <Form.Group className="mb-3" controlId="formControls">

                        <Form.Label>name<span style={{ color: "red" }}>*</span></Form.Label>

                        <Form.Control type='text' placeholder="name" />

                    </Form.Group>



                    <Form.Group className="mb-3" controlId="formControls">
                        <Form.Label>Email<span style={{ color: "red" }}>*</span></Form.Label>
                        <Form.Control type='email' placeholder="name@gmail.com" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formControls">

                        <Form.Label>Password<span style={{ color: "red" }}>*</span></Form.Label>
                        <Form.Control type='password' placeholder="name@gmail.com" />

                    </Form.Group>


                    <Form.Group className="mb-3" controlId="formControls">

                        <Form.Label>Conformpassword<span style={{ color: "red" }}>*</span></Form.Label>
                    
                        <Form.Control type='email' placeholder="name@gmail.com" />

                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formControls">

                    <Form.Label>Gender<span style={{ color: "red" }}>*</span></Form.Label>
               

                        <Form.Check
                            inline
                            label="Female"
                            name="Female"
                            type="radio"
                        />

                        <Form.Check
                            inline
                            label="male"
                            name="Female"
                            type="radio"
                        />


                    </Form.Group>
                    <Container>
                     
                     <Row text-center>


                        <Col sm={6}>
     
                         <Button variant='primary'>Submit</Button>

                        </Col>

                        <Col sm={6}>

                            <Button style={{backgroundColor:'transparent'}} href='Login'>if your already Refister Login Here </Button>

                        </Col>
                
                     </Row>


                     </Container>
   




                </Form>

            </Container>





        </div>
    )
}
