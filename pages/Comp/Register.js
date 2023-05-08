import React, { useState } from 'react'
import { Button, Container, Form, Row, Col } from 'react-bootstrap'
import Link, { useRouter } from 'next/router'

import { useFormik } from 'formik';
import * as Yup from 'yup';
import Router from 'next/router';
import axios from 'axios';




export default function Register() {


      const router =useRouter()

    const signupschema = Yup.object().shape({

        name: Yup.string().min(2, 'Too short').max(50, 'too long').required("need to fill this"),
        email: Yup.string().email("email should have proper syntex").required("this is needed"),
        password: Yup.string().required("please enter the password").matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/, "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character"),
        conformpassword: Yup.string().oneOf([Yup.ref('password'), null], "password must match").required(),
        gender: Yup.string().required()
    })



    const formik = useFormik({

        initialValues: {

            name: '',
            email: '',
            password: '',
            conformpassword: '',
            gender: ''

        },
        validationSchema: signupschema,
        onSubmit: values => {
            console.log(values)

              axios.post('http://localhost:3000/api/Register', values)
            
              .then(response => {

                console.log(response.data)
                alert(response.data.msg)
                router.push('/Comp/Login')
                
                
              })
        },


    })



    return (


        <div className='d-flex  bg-dark text-light' style={{ maxWidth: "500px", margin: 'auto', marginTop: '10px', marginBottom: '10px', padding: '20px', borderRadius: "10px", }} >

            <Container >

                <Form onSubmit={formik.handleSubmit} >

                    <Form.Group className="mb-3" controlId="formControls">

                        <Form.Label>name<span style={{ color: "red" }}>*</span></Form.Label>

                        <Form.Control type='text' placeholder="name" name="name" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.name} required />

                        {formik.touched.name && formik.errors.name ? (

                            <div style={{ color: "red" }}>{formik.errors.name}</div>

                        ) : null}


                    </Form.Group>



                    <Form.Group className="mb-3" controlId="formControls">
                        <Form.Label>Email<span style={{ color: "red" }}>*</span></Form.Label>
                        <Form.Control type='email' placeholder="name@gmail.com" required name="email" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.email} />

                        {formik.touched.email && formik.errors.email ? (
                            <div style={{ color: "red" }}>{formik.errors.email}</div>
                        ) : null}


                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formControls">

                        <Form.Label>Password<span style={{ color: "red" }}>*</span></Form.Label>
                        <Form.Control type='password' placeholder="name@gmail.com" required name="password" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.password} />

                        {formik.touched.password && formik.errors.password ? (
                            <div style={{ color: "red" }}>{formik.errors.password}</div>
                        ) : null}


                    </Form.Group>


                    <Form.Group className="mb-3" controlId="formControls">

                        <Form.Label>Conformpassword<span style={{ color: "red" }}>*</span></Form.Label>

                        <Form.Control type='email' placeholder="name@gmail.com" required name="conformpassword" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.conformpassword} />

                        {formik.touched.conformpassword && formik.errors.conformpassword ? (
                            <div style={{ color: "red" }}>{formik.errors.conformpassword}</div>
                        ) : null}

                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formControls">

                        <Form.Label>Gender<span style={{ color: "red" }}>*</span></Form.Label>


                        <Form.Check
                            inline
                            label="Female"
                            name="gender"
                            type="radio"
                            onChange={formik.handleChange} onBlur={formik.handleBlur}
                            value='female'
                         //   defaultChecked={formik.values.gender === "female"}


                        />

                        <Form.Check

                            inline
                            label="male"
                            name="gender"
                            type="radio"
                            onChange={formik.handleChange} onBlur={formik.handleBlur}
                            value="male"
                         //   defaultChecked={formik.values.gender === "male"}

                        />

                        {formik.touched.gender && formik.errors.gender ? (
                            <div style={{ color: "red" }}>{formik.errors.gender}</div>
                        ) : null}



                    </Form.Group>


                    <Container>

                        <Row text-center>


                            <Col sm={6}>

                                <Button type='submit' variant='primary' >Submit</Button>

                            </Col>

                            <Col sm={6}>

                                <Button style={{ backgroundColor: 'transparent' }} href='Login'>if your already Refister Login Here </Button>

                            </Col>

                        </Row>


                    </Container>






                </Form>


            </Container>





        </div>
    )
}
