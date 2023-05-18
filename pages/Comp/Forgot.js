import React, { useState } from 'react'

import { Container, Button } from 'react-bootstrap'
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { useFormik } from 'formik'
import * as Yup from 'yup';
import axios from 'axios';
import { useRouter } from 'next/router';





export default function Forgot() {




    const router = useRouter();



    const loginschema = Yup.object().shape({
        email: Yup.string().email('required proper').required(),


    })


   

    const formik = useFormik({
        initialValues: {
            email: '',

        },



        validationSchema: loginschema,

        onSubmit: values => {

            console.log(values)

            axios.post('http://localhost:3000/api/otp', values)
                .then(response => {
                    console.log(response.data)
                    if(response.data.err==0){
                        alert(response.data.msg)

                        router.push({
                            pathname: '/Comp/Change',
                            query:  {token:response.data.token, email:response.data.email}
                          })
                        
                     

                    }
                })

        }


    })





    return (



        <div style={{ minHeight: '500px' }}>


            <div>

                <Container className='d-flex  bg-dark text-light justify-content-center align-items-center' style={{ maxWidth: "500px", padding: '20px', marginTop: '30px', borderRadius: "10px", height: "400px" }} >


                    <Form onSubmit={formik.handleSubmit} >

                        <Form.Group as={Row} className='mb-3' controlId='formplaintextEmail'>

                            <Form.Label column sm="3">Email</Form.Label>

                            <Col sm="9">


                                <Form.Control type='email' name="email" placeholder='name@gmail.com' onChange={formik.handleChange}
                                    value={formik.values.email}
                                />

                                {formik.errors.email ? <div style={{ color: "red" }}>{formik.errors.email}</div> : null}


                            </Col>
                        </Form.Group>









                        <Button type="submit" variant='primary'>Get otp</Button>




                    </Form>


                </Container>




            </div>
        </div>



    )
}

