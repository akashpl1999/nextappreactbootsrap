import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

import { AiFillFacebook, AiFillInstagram, AiFillYoutube, AiFillTwitterSquare } from 'react-icons/ai';




function Foot1() {


    return (


        <div>



            <Container fluid  className='mt-5'>

                <Container fluid className='d-flex justify-content-between mb-2 py-2 bg-dark text-light' >

                    <div className='me-5'>

                        <h4>Get connected with us on social networks:</h4>


                    </div>



                    <div>

                        <AiFillFacebook className='me-5' style={{ fontSize: "50px" }} />
                        <AiFillInstagram className='me-5' style={{ fontSize: "50px" }} />
                        <AiFillYoutube className='me-5' style={{ fontSize: "50px" }} />
                        <AiFillTwitterSquare className='me-5' style={{ fontSize: "50px" }} />

                    </div>

                </Container>



                <Container  fluid style={{backgroundColor:'lightgray'}}>


                    <Row>


                        <Col className='text-center' md={3} lg={3} xs={12} mb-2 mx-auto>

                         
                            <h2 className='text-uppercase fw-bold'>Company name</h2>
                            <hr className='d-inline-block mb-2 mx-auto' style={{ width: '60px', height: '3px', color: 'red', }} />


                            <p>ndbwjwejjjn jnejndjne nnjrnf jnfrjnf iijiijirii iionnojnmfkvfmvkfm irfrnrn fvfnfvfj</p>




                        </Col>


                        <Col className='text-center' md={3} lg={3} xs={12} mb-2 mx-auto>

                            <h2 className='text-uppercase fw-bold'>Company name</h2>

                            <hr className='mb-2 mt-0 mx-auto d-inline-block' style={{ width: '60px', height: "2px", backgroundColor: 'red' }} />

                            <p>
                                <a href='jdnjnd' className='text-dark'>MDBootstrap</a>
                            </p>
                            <p> <p>
                                <a href='jdnjnd' className='text-dark' >MDBootstrap</a>
                            </p>
                                <p>
                                    <a href='jdnjnd' className='text-dark'>MDBootstrap</a>

                                </p>

                                <a href='jdnjnd' className='text-dark'>MDBootstrap</a>
                            </p>



                        </Col>

                        <Col className='text-center'  md={3} lg={3} xs={12} mb-2 mx-auto>

                            <h2 className='text-uppercase fw-bold'>Company name</h2>

                            <hr className='mb-2 mt-0 mx-auto d-inline-block' style={{ width: '60px', height: "2px", backgroundColor: 'red' }} />

                            <p>
                                <a href='jdnjnd' className='text-dark'>MDBootstrap</a>
                            </p>
                            <p> <p>
                                <a href='jdnjnd' className='text-dark' >MDBootstrap</a>
                            </p>
                                <p>
                                    <a href='jdnjnd' className='text-dark'>MDBootstrap</a>

                                </p>

                                <a href='jdnjnd' className='text-dark'>MDBootstrap</a>
                            </p>



                        </Col>

                        <Col className='text-center'  md={3} lg={3} xs={12} mb-2 mx-auto>

                            <h2 className='text-uppercase fw-bold'>Company name</h2>

                            <hr className='mb-2 mt-0 mx-auto d-inline-block' style={{ width: '60px', height: "2px", backgroundColor: 'red' }} />

                            <p>
                                <a href='jdnjnd' className='text-dark'>MDBootstrap</a>
                            </p>
                            <p> <p>
                                <a href='jdnjnd' className='text-dark' >MDBootstrap</a>
                            </p>
                                <p>
                                    <a href='jdnjnd' className='text-dark'>MDBootstrap</a>

                                </p>

                                <a href='jdnjnd' className='text-dark'>MDBootstrap</a>
                            </p>



                        </Col>



                    </Row>



                </Container>


                <Container fluid className='text-center d-flex bg-secondary justify-content-center text-white py-2'>


                    <span>@copyright 2023-2024</span>


                </Container>









            </Container>














        </div>


    )
}

export default Foot1