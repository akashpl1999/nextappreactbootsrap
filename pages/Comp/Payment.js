import React, { useState, useEffect } from 'react'

import axios from 'axios'

import { Button, FloatingLabel, InputGroup, Collapse, Form, Row, Col } from 'react-bootstrap'

function Payment() {


    const [cart, setcart] = useState([])

    const [open, setopen] = useState(false)

    const [open1, setopen1] = useState(false)


    //const [disable1, setdisable1]=useState(true)

    const [disable2, setdisable2] = useState(true)

    const [disable3, setdisable3] = useState(true)

    const [disable4, setdisable4] = useState(true)




    const handleorder=()=>{

        let userid = JSON.parse(localStorage.getItem('userdata'))
        let email = JSON.parse(localStorage.getItem('login'))

         axios.post('http://localhost:3000/api/order', {userid,email})
         .then((res)=>{
            console.log(res.data)
            if(res.data.msg="done"){
                 alert('order placed successfully')
            }
         })

    }



    useEffect(() => {

        let userid = JSON.parse(localStorage.getItem('userdata'))

        console.log({ userid })

        axios.post('http://localhost:3000/api/Cart/cartget', { userid })

            .then(res => {

                console.log(res.data.result)

                setcart(res.data.result)


            })

    }, [cart])


    console.log(cart)


    return (


        <div className='d-flex justify-content-start m-3 p-2 ' style={{ width: "100%" }}>











            <div className='d-flex flex-column m-2 p-2' style={{ width: '70%' }}>






                <div className='shadow-lg' style={{ minHeight: "130px" }}>



                    <Button style={{ backgroundColor: 'inherit', border: 0, color: 'black', width: '100%' }}  >

                        <Row>

                            <Col className='d-flex' >

                                <InputGroup >

                                    <InputGroup.Text className='m-2'>1</InputGroup.Text>

                                    <h4 className='m-2'>Login</h4>

                                </InputGroup>

                            </Col>


                            <Col text-end>

                                <Button onClick={() => setdisable2(!disable2)} size='lg' variant="outline-info">

                                    Change

                                </Button>

                            </Col>

                        </Row>

                    </Button>


                </div>




                <div className='d-flex shadow-lg flex-column justify-content-bettween' style={{ minHeight: "150px" }} >


                    <Button

                        disabled={disable2}

                        onClick={() => setopen(!open)}

                        style={{ backgroundColor: 'inherit', border: 0, color: 'black' }}

                    >
                        <InputGroup>

                            <InputGroup.Text className='m-2'>2</InputGroup.Text>
                            <h4 className='m-2'>  Delivary address</h4>


                        </InputGroup>

                        <Button onClick={() => setdisable3(!disable3)}>submit</Button>
                    </Button>


                    <Collapse in={open}>

                        <Form className='p-4 m-2' style={{ width: '100%' }}>

                            <Row>


                                <Form.Group as={Col}>

                                    <Form.Label>Name</Form.Label>

                                    <Form.Control className='p-4' type="text" placeholder="First name" />


                                </Form.Group>


                                <Form.Group as={Col}>


                                    <Form.Label>Phone</Form.Label>

                                    <Form.Control className='p-4' type="text" placeholder="Phone Number" />

                                </Form.Group>



                            </Row>




                            <Row>


                                <Form.Group as={Col} >

                                    <Form.Label>Pincode</Form.Label>


                                    <Form.Control className='p-4' type="text" placeholder="First name" />


                                </Form.Group>

                                <Form.Group as={Col}  >

                                    <Form.Label>Locality</Form.Label>

                                    <Form.Control className='p-4' type="text" placeholder="Phone Number" />

                                </Form.Group>

                            </Row>

                            <Row className='mt-4'>

                                <FloatingLabel
                                    controlId="floatingTextarea"
                                    label="Commentmddcds"
                                    className="mb-4"
                                >
                                    <Form.Control style={{ height: '100px' }} as="textarea" placeholder="Leave a comment here" />
                                </FloatingLabel>
                            </Row>


                            <Row>
                                <Form.Group as={Col} >


                                    <Form.Label>City</Form.Label>

                                    <Form.Control className='p-4' type="text" placeholder=" city" />

                                </Form.Group>
                                <Form.Group as={Col}>

                                    <Form.Label>State</Form.Label>

                                    <Form.Control className='p-4' type="text" placeholder="state" />

                                </Form.Group>



                            </Row>



                            <Row>
                                <Form.Group as={Col} >

                                    <Form.Label>Landmark</Form.Label>

                                    <Form.Control className='p-4' type="text" placeholder="Landmark" />

                                </Form.Group>

                                <Form.Group as={Col}>


                                    <Form.Label>Alternative number</Form.Label>

                                    <Form.Control className='p-4' type="text" placeholder="Alternative number" />


                                </Form.Group>


                            </Row>


                            <Button className='m-2 p-4' style={{ backgroundColor: 'orangered', fontSize: '25px' }}>

                                SAVE AND DELIVER HERE

                            </Button>


                        </Form>




                    </Collapse>

                </div>



                <div className=' shadow-lg d-flex flex-column justify-content-bettween' style={{ minHeight: "150px" }} >

                    <Button style={{ backgroundColor: 'inherit', border: 0, color: 'black' }} disabled={disable3}>


                        <InputGroup>
                            <InputGroup.Text className='m-2'>3</InputGroup.Text>


                            <h4 className='m-2'> Order summery </h4>




                        </InputGroup>
                        <Button onClick={() => setdisable4(!disable4)}>submit</Button>
                    </Button>

                    <div>

                
                  {  cart?.cart?.length > 0 && cart?.cart?.map((elm) => {
                  
                            return (
                                <>
                                    <div className='d-flex  flex-wrap'>

                                        <img src={elm.image} />

                                        <div>
                                            <p>{elm.name}</p>

                                            <p>
                                                {elm.description}
                                            </p>

                                            <p>
                                                {elm.price}
                                            </p>
                                        </div>



                                    </div>


                                </>
                            )
                        })

                        }


                </div>
                </div>




                <div className='d-flex shadow-lg flex-column justify-content-bettween' style={{ minHeight: "130px" }} >


                    <Button

                        disabled={disable4}

                        onClick={() => setopen1(!open1)}

                        style={{ backgroundColor: 'inherit', border: 0, color: 'black' }} >




                        <InputGroup>


                            <InputGroup.Text className='m-2'>4</InputGroup.Text>

                            <h4 className='m-2'>  Payment meothed </h4>



                        </InputGroup>

                    </Button>


                    <Collapse in={open1}>


                        <Form>

                            <div className='d-flex flex-column' >



                                <div className='shadow-lg d-flex  m-4  p-3'>


                                    <Form.Check className='m-3' />

                                    <img className='m-3' src="https://img1a.flixcart.com/linchpin-web/fk-cp-zion/img/phonepe_logo_28.svg" />

                                    <p className='m-3'>Phonepay upi 8966549499  </p>




                                </div>



                                <div className='shadow-lg d-flex  m-4  p-3'>


                                    <Form.Check className='m-3' />



                                    <img className='m-3' src="https://img1a.flixcart.com/linchpin-web/fk-cp-zion/img/phonepe_logo_28.svg" />


                                    <p className='m-3'>Phonepay upi 8966549499  </p>


                                </div>


                                <div className=' shadow-lg d-flex  m-4  p-3'>


                                    <Form.Check className='m-3' />

                                    <img className='m-3' src="https://img1a.flixcart.com/linchpin-web/fk-cp-zion/img/phonepe_logo_28.svg" />

                                    <p className='m-3'>Phonepay upi 8966549499  </p>




                                </div>

                                <div className=' shadow-lg d-flex  m-4  p-3'>


                                    <Form.Check className='m-3' />

                                    <img className='m-3' src="https://img1a.flixcart.com/linchpin-web/fk-cp-zion/img/phonepe_logo_28.svg" />


                                    <p className='m-3'>Phonepay upi 8966549499  </p>




                                </div>




                            </div>


                        </Form>



                    </Collapse>



                </div>




            </div>











            <div className='d-flex flex-column shadow-lg p-3 m-2' style={{ height: '200px', width: '24%', position: "fixed", top: "140px", right: "10px", margin: "10px", padding: '5px' }}>

                <h5>Price</h5>

                <Row text-center>
                    <Col>
                        price
                    </Col>


                    <Col>

                        {cart?.totalPrice}rs

                    </Col>

                </Row>
                <Row>
                    <Col>
                        Discount
                    </Col>
                    <Col>
                        10%
                    </Col>

                </Row>

                <Row>
                    <Col>
                        Total payable
                    </Col>

                    <Col>


                        {cart?.totalPrice}rs


                    </Col>

                </Row>



                <Button size='lg' style={{ backgroundColor: "orangered" }} onClick={handleorder}> Order  </Button>




            </div>



        </div>


    )
}

export default Payment