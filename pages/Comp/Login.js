import React from 'react'
import { Container, Button } from 'react-bootstrap'
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import  { useRouter } from 'next/router';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';

import { loginstaus } from '../../Redux/Action';

export default function Login() {

    const router = useRouter()

     const dispatch = useDispatch()


    // const validate = values => {
    //     const errors = {};


    //     if (!values.email) {
    //         errors.email = 'Email is required';

    //     } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    //         errors.email = 'Invalid email address';

    //     }
    //     if (!values.password) {
    //         errors.password = 'Email is required';

    //     } else if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/i.test(values.password)) {
    //         errors.password = 'Invalid password ';

    //     }
    //     return errors;


    // }




    const loginschema = Yup.object().shape({



        email: Yup.string().email('required proper').required(),
      
      
        password: Yup.string().matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/i, "must match this ").required()
    
    
    
    })


    const formik = useFormik({

        initialValues: {
            email: '',
            password: ''
        },
        //  validate,
        validationSchema: loginschema,
    
        onSubmit: values => {

            console.log(values)

            axios.post('http://localhost:3000/api/Login', values)

                .then(response => {

                    console.log(response)

                    alert(response.data.msg)
                    if (response.data.err == 0) {   
                      
                        localStorage.setItem('userdata', JSON.stringify(response.data.user._id))
                   
                        localStorage.setItem('token', JSON.stringify(response.data.token))
                        localStorage.setItem('login', JSON.stringify(response.data.user.email))
                        dispatch(loginstaus())
                        router.push('/Comp/Home/Main')



                    }
                })
        },


    })






    return (


        <div style={{ minHeight: '500px' }}>


            <div>

                <Container className='d-flex  bg-dark text-light justify-content-center align-items-center ' style={{ maxWidth: "500px", padding: '20px', marginTop: '30px', borderRadius: "10px", height: "400px" }} >


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

                        <Form.Group as={Row} className='mb-3' controlId='formplaintextEmail'>
                            <Form.Label column sm="3">Password</Form.Label>

                            <Col sm="9">
                                <Form.Control type='password' name="password" placeholder='password' onChange={formik.handleChange}
                                    value={formik.values.password}
                                />

                                {formik.errors.password ? <div style={{ color: "red" }}>{formik.errors.password}</div> : null}


                            </Col>


                        </Form.Group>


                        <div>
                            <Row>
                                <Col sm="6">

                                <Button type="submit" variant='primary'>Submit</Button>

                                </Col>

                                <Col sm="6">

                                <Button onClick={()=>{router.push('/Comp/Forgot')}}  variant='primary'>forgot password</Button>

                                </Col>

                            </Row>
                        </div>
                    

                    </Form>

                </Container>




            </div>
        </div>



    )
}

