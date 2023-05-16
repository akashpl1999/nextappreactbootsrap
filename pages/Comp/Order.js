import React, { useState, useEffect } from 'react'
import { Button, Row, Col, ListGroup, Card,ButtonGroup } from 'react-bootstrap'

import style from '../../pages/Comp/Home/Main.module.css'

import axios from 'axios'
import  { useRouter } from 'next/router'

function Order() {


    const router =useRouter()


    const [cart, setcart] = useState()

    useEffect(()=>{
        handlecart()

    },[])


    useEffect(() => {

        let userid = JSON.parse(localStorage.getItem('userdata'))

        console.log({ userid })

        axios.post('http://localhost:3000/api/Cart/cartget', { userid })

            .then(res => {

                console.log(res.data.result)
                setcart(res.data.result)
            })

    }, [cart])





    const handlecart = (data) => {
       
        console.log(data)
        // dispatch(addtocart(data))
        const userid = JSON.parse(localStorage.getItem('userdata'))
        const cdata = { userid, cartitem:data}
        axios.post('http://localhost:3000/api/Cart/cartapi', cdata)
            .then(res => {
                console.log(res.data)
            })


        }
    
         





    const handlefilter=(data)=>{

        console.log(data)

        // dispatch(addtocart(data))


        const userid = JSON.parse(localStorage.getItem('userdata'))
        const cdata = { userid, cartitem:data}
        axios.post('http://localhost:3000/api/Cart/cartdelete', cdata)
            .then(res => {
                
                console.log(res.data)
            })



        }







    return (
        <div className='d-flex ' style={{ width: '100%' }}>




            <div className={style.container2} style={{ width: "65%", display: "flex", flexDirection: "column", alignItems: "start", justifyContent: 'start', margin: '5px' }} >


                <div className=' d-flex justify-content-around shadow-lg py-4 m-2' style={{ width: "100%" }}  >


                    <div>

                        <h6>Delivery to : user name </h6>
                        <h6>Address : to abcd street near to xyz complex  in  cityname statename ...</h6>

                    </div>

                    <Button variant="outline-primary" >

                        Change address

                    </Button>


                </div>


                {
                    cart?.cart.length > 0 && cart?.cart?.map((data) => {
                        return (
                            <>
                                <div className='d-flex flex-column  m-2' style={{ width: "100%" }}>

                                    <div className='d-flex shadow-lg m-4' >

                                        <div>


                                            <img src={data.image} />

                                        </div>

                                        <div className='ml-4 p-4' style={{ width: '70%' }}>

                                            <h5>
                                                {data.name}
                                            </h5>

                                            <h6>
                                                {data.description}

                                            </h6>

                                            <Row className='text-start py-3' style={{ width: "100%" }}>

                                                <Col> {data.price} </Col>

                                                <Col> 
                                                
                                                  <ButtonGroup aria-label="Basic example">

                                                    <Button variant="secondary" onClick={()=>{handlefilter(data)}} >-</Button>
                                                 
                                                 
                                                    <Button variant="secondary">{data.count}</Button>


                                                    <Button variant="secondary" onClick={()=>{handlecart(data)}}>+</Button>

                                                </ButtonGroup>

                                                </Col>

                                            </Row>

                                        </div>



                                    </div>


                                </div>


                            </>
                        )
                    })
                }



                <div className='d-flex justify-content-end shadow-lg p-3 m-2 ' style={{ width: '100%' }}>

                    <Button className='p-2' style={{ backgroundColor: "orangered", text: 'light', width: '250px' }} onClick={()=>{router.push('/Comp/Payment')}}>PLACE ORDER</Button>


                </div>


            </div >


            <div className='d-flex flex-column'>


                <div className='d-flex m-2' style={{ width: '30%', position: 'fixed', top: "90px", right: '0' }}>

                    <Card className='shadow-lg' style={{ width: '100%', height: "100%" }}>

                        <Card.Header className='mb-2 text-black-50'>Priceing</Card.Header>

                        <Row className='text-start m-3'>

                            <Col>

                                <h4>

                                    Price <span>item</span>{cart?.totalCount}

                                </h4>
                            </Col>


                            <Col>
                                <h5>

                                    ₹{cart?.totalPrice}

                                </h5>
                            </Col>

                        </Row>

                        <Row className='text-start m-3'>

                            <Col>

                                <h4>
                                    Discount

                                </h4>
                            </Col>


                            <Col>
                                <h5>

                                    15% off

                                </h5>
                            </Col>

                        </Row>
                        <Row className='text-start m-3'>

                            <Col>

                                <h4>
                                    Delivery  charges

                                </h4>
                            </Col>


                            <Col>
                                <h5>

                                    ₹ 25

                                </h5>
                            </Col>

                        </Row>

                        <div className='d-flex flex-column m-2 p-2 text-dark bg-light' >


                            <h5>Cancellation Policy</h5>

                            <p>Orders cannot be cancelled once packed for delivery. In case of unexpected delays, a refund will be provided, if applicable.

                            </p>

                        </div>

                    </Card>

                </div>

            </div>




        </div>


    )
}

export default Order