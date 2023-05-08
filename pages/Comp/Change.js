import React, { useEffect, useState } from 'react'
import { Container, Button } from 'react-bootstrap'
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { useFormik } from 'formik'
import * as Yup from 'yup';
import axios from 'axios';
import { useRouter } from 'next/router';




export default function Change() {




    const router = useRouter()
    const token = router.query.token
    const email = router.query.email



    const loginschema = Yup.object().shape({

        otp: Yup.string().matches(/[0-9]{5,}/, 'otp must have 6 digits').required(),
        password: Yup.string().required("please enter the password").matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/, "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character"),
        conformpassword: Yup.string().oneOf([Yup.ref('password'), null], "password must match").required(),


    })

    const formik = useFormik({
        initialValues: {
            otp: '',
            password: '',
            conformpassword: ''

        },



        validationSchema: loginschema,

        onSubmit: values => {

            console.log(values)

            let data = { ...values, email, }

            console.log(data)


            axios.post('http://localhost:3000/api/otpmatch',data,  { headers: { Authorization: `Bearer ${token}` } })
            .then(response => {                                   
                console.log(response.data)
                alert(response.data.msg)
                router.push('/Comp/Login')
              })
        
        }


    })




    return (



        <div style={{ minHeight: '500px' }}>


            <div>

                <Container className='d-flex  bg-dark text-light justify-content-center align-items-center' style={{ maxWidth: "500px", padding: '20px', marginTop: '30px', borderRadius: "10px", height: "400px" }} >


                    <Form onSubmit={formik.handleSubmit} >







                        <Form.Group as={Row} className='mb-3' controlId='formplaintextEmail'>

                            <Form.Label column sm="3">otp</Form.Label>


                            <Col sm="9">


                                <Form.Control type='text' name="otp" placeholder='enter otp here' onChange={formik.handleChange}
                                    value={formik.values.otp}
                                />

                                {formik.errors.otp ? <div style={{ color: "red" }}>{formik.errors.otp}</div> : null}


                            </Col>


                        </Form.Group>




                        <Form.Group as={Row} className='mb-3' controlId='formplaintextEmail'>

                            <Form.Label column sm="3">password</Form.Label>


                            <Col sm="9">


                                <Form.Control type='email' name="password" placeholder='enter password here' onChange={formik.handleChange}
                                    value={formik.values.password}
                                />

                                {formik.errors.password ? <div style={{ color: "red" }}>{formik.errors.password}</div> : null}


                            </Col>


                        </Form.Group>


                        <Form.Group as={Row} className='mb-3' controlId='formplaintextEmail'>

                            <Form.Label column sm="3">conformpassword</Form.Label>


                            <Col sm="9">


                                <Form.Control type='email' name="conformpassword" placeholder='enter conformpassword here' onChange={formik.handleChange}
                                    value={formik.values.conformpassword}
                                />

                                {formik.errors.conformpassword ? <div style={{ color: "red" }}>{formik.errors.conformpassword}</div> : null}


                            </Col>


                        </Form.Group>







                        <Button type="submit" variant='primary'>Get otp</Button>




                    </Form>


                </Container>




            </div>
        </div>



    )
}

