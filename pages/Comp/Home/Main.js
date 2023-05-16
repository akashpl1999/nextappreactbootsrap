import React, { useEffect, useState } from 'react'
import { Button, Container, Row, Carousel, ButtonGroup } from 'react-bootstrap'
import Card from 'react-bootstrap/Card';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styles from './Main.module.css'
import axios from 'axios';
import Link from 'next/link';


import { useDispatch, useSelector } from 'react-redux';
import { addtocart, removefromcart } from '../../../Redux/Action';

import { useRouter } from 'next/router';


function Main() {

    //     const getCartData = () => {

    //     if (typeof window !== 'undefined') {
    //         const cartData = localStorage.getItem('cartData');

    //          if (cartData) {
    //           return JSON.parse(cartData);
    //         }
    //       }

    //       return [];
    // } 




    const [cartdata, setcartdata] = useState([])
    const [cart, setcart] = useState([])

    const router = useRouter()

    const rdata = useSelector((data) => data.cart.cartitems)
    console.log(rdata)

    const [index, setIndex] = useState(0); // State to keep track of the current index

    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        draggable: true, // Enable draggable scrolling
        swipeToSlide: true, // Enable swipe-to-slide
        touchThreshold: 10, // Number of pixels a touch move needs to exceed to prevent swipe

        afterChange: (current) => setIndex(current),
        // Update the index after a slide change

        customPaging: (i) => (
            <div
                style={{
                    width: '10px',
                    height: '10px',
                    margin: '0 5px',
                    backgroundColor: i === 0 ? 'red' : 'gray', // Set color based on index
                    borderRadius: '50%',
                }}
            ></div>
        ),

    };

    const handlecart = (data) => {

        console.log(data)
        // dispatch(addtocart(data))
        const userid = JSON.parse(localStorage.getItem('userdata'))
        const cdata = { userid, cartitem: data }
        axios.post('http://localhost:3000/api/Cart/cartapi', cdata)
            .then(res => {
                console.log(res.data)
            })


    }


    const handlefilter = (data) => {

        console.log(data)

        // dispatch(addtocart(data))

        const userid = JSON.parse(localStorage.getItem('userdata'))
        const cdata = { userid, cartitem: data }
        axios.post('http://localhost:3000/api/Cart/cartdelete', cdata)
            .then(res => {
                console.log(res.data)
            })

    }



    console.log(cartdata)





    const [item, setitem] = useState()


    const handleClick = (itemid) => {

        router.push(`/Comp/Category/${itemid}`)

    }



    useEffect(() => {

        axios.get('http://localhost:3000/api/Item/Itemget')

            .then(response => {
                setitem(response.data.result)
            })
        console.log(item)


        handlecart()


    }, [])



    useEffect(() => {

        let userid = JSON.parse(localStorage.getItem('userdata'))

        console.log({ userid })

        axios.post('http://localhost:3000/api/Cart/cartget', { userid })

            .then(res => {

                console.log(res.data.result)


                setcart(res.data.result.cart)

            })

    }, [cart])



    console.log(cart)







    return (


        <div style={{ "overflow-x": 'hidden' }}>

            <div className='py-3 mx-2 my-4  py-4 px-5 text-light w-89' style={{ backgroundColor: "green", borderRadius: "10px" }}>
                <h1>Shop Your Favourite Products On Online</h1>
                <Button className='bg-light text-dark m-4 '>Shop</Button>
            </div>




            <div className={styles.container}>
                <Card className=" m-1 bg-dark text-white" style={{ minWidth: '300px', borderRadius: "10px" }}>
                    <Card.Img src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=50,metadata=none,w=540/layout-engine/2023-03/beauty-WEB.jpg" alt="Card image" />

                    <Card.ImgOverlay>

                        Makeup

                    </Card.ImgOverlay>

                </Card>



                <Card className=" m-1 bg-dark text-white" style={{ minWidth: '300px', borderRadius: "10px" }}>
                    <Card.Img src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=50,metadata=none,w=540/layout-engine/2023-03/Pet-Care_WEB.jpg" alt="Card image" />

                    <Card.ImgOverlay>
                        pet care
                    </Card.ImgOverlay>

                </Card>

                <Card className=" m-1 bg-dark text-white" style={{ minWidth: '300px', borderRadius: "10px" }}>
                    <Card.Img src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=50,metadata=none,w=540/layout-engine/2023-03/summer_WEB.jpg" alt="Card image" />

                    <Card.ImgOverlay>

                    </Card.ImgOverlay>

                </Card>

                <Card className=" m-1 bg-dark text-white" style={{ minWidth: '300px', borderRadius: "10px" }}>

                    <Card.Img src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=50,metadata=none,w=540/layout-engine/2023-03/electronic-WEB-1.jpg" alt="Card image" />

                    <Card.ImgOverlay>

                        <Card.Text>Last updated 3 mins ago</Card.Text>

                    </Card.ImgOverlay>
                </Card>

                <Card className=" m-1 bg-dark text-white" style={{ minWidth: '300px', borderRadius: "10px" }}>
                    <Card.Img src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=50,metadata=none,w=540/layout-engine/2023-03/pharmacy-WEB.jpg" alt="Card image" />

                    <Card.ImgOverlay>
                        <Card.Text>Last updated 3 mins ago</Card.Text>
                    </Card.ImgOverlay>
                </Card>

                <Card className=" m-1 bg-dark text-white" style={{ minWidth: '300px', borderRadius: "10px" }}>
                    <Card.Img src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=50,metadata=none,w=540/layout-engine/2023-03/beauty-WEB.jpg" alt="Card image" />

                    <Card.ImgOverlay>
                        <Card.Text>Last updated 3 mins ago</Card.Text>
                    </Card.ImgOverlay>
                </Card>

                <Card className=" m-1 bg-dark text-white" style={{ minWidth: '300px', borderRadius: "10px" }}>

                    <Card.Img src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=50,metadata=none,w=540/layout-engine/2023-03/beauty-WEB.jpg" alt="Card image" />

                    <Card.ImgOverlay>
                        <Card.Text>Last updated 3 mins ago</Card.Text>
                    </Card.ImgOverlay>
                </Card>

            </div>


            <div className='d-flex justify-content-between flex-wrap mr-10 p-4'>

                <Card className='m-2 p-2 border-0'>

                    <Card.Img src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=50,metadata=none,w=225/layout-engine/2022-12/Slice-24.png" style={{ width: '100px' }} />

                </Card>


                <Card className='m-2 p-2 border-0'>

                    <Card.Img src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=50,metadata=none,w=225/layout-engine/2022-12/Slice-24.png" style={{ width: '100px' }} />

                </Card>
                <Card className='m-2 p-2 border-0'>

                    <Card.Img src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=50,metadata=none,w=225/layout-engine/2022-12/Slice-24.png" style={{ width: '100px' }} />

                </Card>
                <Card className='m-2 p-2 border-0'>

                    <Card.Img src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=50,metadata=none,w=135/layout-engine/2022-11/Slice-2_10.png" style={{ width: '100px' }} />

                </Card>
                <Card className='m-2 p-2 border-0'>

                    <Card.Img src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=50,metadata=none,w=225/layout-engine/2022-12/Slice-23.png" style={{ width: '100px' }} />

                </Card>

                <Card className='m-2 p-2 border-0'>

                    <Card.Img src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=50,metadata=none,w=225/layout-engine/2022-12/paan-corner_mweb.png" style={{ width: '100px' }} />

                </Card>

                <Card className='m-2 p-2 border-0'>

                    <Card.Img src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=50,metadata=none,w=225/layout-engine/2022-12/Slice-24.png" style={{ width: '100px' }} />

                </Card>

                <Card className='m-2 p-2 border-0'>

                    <Card.Img src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=50,metadata=none,w=225/layout-engine/2022-12/Slice-24.png" style={{ width: '100px' }} />

                </Card>

                <Card className='m-2 p-2 border-0'>

                    <Card.Img src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=50,metadata=none,w=225/layout-engine/2022-12/Slice-26.png" style={{ width: '100px' }} />

                </Card>

                <Card className='m-2 p-2 border-0'>

                    <Card.Img src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=50,metadata=none,w=225/layout-engine/2022-12/Slice-22_0.png" style={{ width: '100px' }} />

                </Card>


                <Card className='m-2 p-2 border-0'>

                    <Card.Img src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=50,metadata=none,w=225/layout-engine/2022-12/Slice-26.png" style={{ width: '100px' }} />

                </Card>













                <Card className='m-2 p-2 border-0'>

                    <Button style={{ backgroundColor: "transparent" }} onClick={() => handleClick('Dairy')}  >
                        <Card.Img src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=50,metadata=none,w=225/layout-engine/2022-12/Slice-22_0.png" style={{ width: '100px' }} />

                    </Button>



                </Card>

                <Card className='m-2 p-2 border-0'>

                    <Button style={{ backgroundColor: "transparent" }} onClick={() => handleClick('Drinks')}>

                        <Card.Img src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=50,metadata=none,w=225/layout-engine/2022-12/Slice-23.png" style={{ width: '100px' }} />

                    </Button>


                </Card>


                <Card className='m-2 p-2 border-0'>
                    <Button style={{ backgroundColor: "transparent" }} onClick={() => handleClick('Snacks')}  >


                        <Card.Img src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=50,metadata=none,w=225/layout-engine/2022-12/Slice-24.png" style={{ width: '100px' }} />

                    </Button>
                </Card>

                <Card className='m-2 p-2 border-0'>
                    <Button style={{ backgroundColor: "transparent" }} onClick={() => handleClick('Fruits')}  >

                        <Card.Img src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=50,metadata=none,w=180/app/images/products/sliding_image/495633a.jpg?ts=1674471372" style={{ width: '100px' }} />
                        <p>makeup</p>

                    </Button>
                </Card>

                <Card className='m-2 p-2 border-0'>

                    <Button style={{ backgroundColor: "transparent" }} onClick={() => handleClick('Vegetables')}  >


                        <Card.Img src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=50,metadata=none,w=180/app/images/products/sliding_image/491605a.jpg" style={{ width: '100px' }} />
                        <p>petcare</p>

                    </Button>
                </Card>


                <Card className='m-2 p-2 border-0'>

                    <Button style={{ backgroundColor: "transparent" }} onClick={() => handleClick('Makeup')}  >


                        <Card.Img src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=50,metadata=none,w=225/layout-engine/2022-12/Slice-23.png" style={{ width: '100px' }} />

                    </Button>

                </Card>



            </div>






            <div className='d-flex flex-column '>

                <h2>Dairy, Bread & Eggs</h2>


                <div className={styles.container}>


                    {
                        item?.map((elm) => {

                            const pid = elm._id

                            return (

                                <>
                                    <Card className='position-relative' style={{ minWidth: "200px", margin: "10px" }}>

                                        <Link href={`../Home/${pid}`}>

                                            <Card.Img variant='top' src={elm.image} />
                                        </Link>


                                        <Card.Body>


                                            <div className='m-3'>


                                                <Card.Title>{elm.name}</Card.Title>

                                                <Card.Subtitle>{elm.description}</Card.Subtitle>

                                                 <Card.Text className="font-weight-bold mt-2">

                                                    {elm.quantity}

                                                </Card.Text>

                                            </div>






                                            <div style={{ position: 'absolute', bottom: 0, left: 0, width: '100%', marginTop: '25px' }}>

                                                <div className="d-flex justify-content-evenly align-items-center">

                                              
                                                    <Card.Text className="font-weight-bold">{elm.price}</Card.Text>


                                                     {
                                                        cart.map(item => item._id).includes(elm._id) ?

                                                        (       
                                        
                                                      <ButtonGroup aria-label="Basic example" >

                                                        <Button variant="secondary" onClick={() => { handlefilter(elm) }} style={{ width: '50px' }}>-</Button>

                                                            {
                                                                cart.map((dt)=> dt._id === elm._id &&<Button variant="secondary"> {dt.count} </Button>
                                                                )
                                                            }
                                                      
                                                        <Button variant="secondary" onClick={() => { handlecart(elm) }} style={{ width: '50px' }}>+</Button>
                                                  
                                                      </ButtonGroup> 
                                                    
                                                    
                                                     ):(

                                                        
                                                        <Button variant="danger" onClick={() => { handlecart(elm) }}>add</Button>


                                                     )

                                                     }
                                                    
                                                             
                                                 
                                                </div>

                                            </div>

                                        </Card.Body>


                                    </Card>




                                </>
                            )
                        })
                    }






                </div>


            </div>

















            <div className='d-flex flex-column '>

                <h2>Mouth fresheners</h2>

                <div className={styles.container}>

                    <Card style={{ minWidth: "200px", margin: "10px" }}>

                        <Card.Img src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=50,metadata=none,w=225/app/images/products/sliding_image/28169a.jpg?ts=1678192659" />

                        <Card.Body>
                            <Card.Title>Milky mist Panner</Card.Title>

                            <Card.Text >
                                200g
                            </Card.Text>
                            <div className='d-flex justify-content-between'>
                                <Card.Text >
                                    ₹189
                                </Card.Text>
                                <Button variant="outline-danger" >
                                    ADD
                                </Button>


                            </div>




                        </Card.Body>


                    </Card>

                    <Card style={{ minWidth: "200px", margin: "10px" }}>

                        <Card.Img src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=50,metadata=none,w=225/app/images/products/sliding_image/28169a.jpg?ts=1678192659" />

                        <Card.Body>
                            <Card.Title>Milky mist Panner</Card.Title>

                            <Card.Text >
                                200g
                            </Card.Text>

                            <div className='d-flex justify-content-between'>
                                <Card.Text >
                                    ₹189
                                </Card.Text>
                                <Button variant="outline-danger" >
                                    ADD
                                </Button>
                            </div>




                        </Card.Body>


                    </Card>



                    <Card style={{ minWidth: "200px", margin: "10px" }}>

                        <Card.Img src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=50,metadata=none,w=225/app/images/products/sliding_image/28169a.jpg?ts=1678192659" />

                        <Card.Body>
                            <Card.Title>Milky mist Panner</Card.Title>

                            <Card.Text >
                                200g
                            </Card.Text>
                            <div className='d-flex justify-content-between'>
                                <Card.Text >
                                    ₹189
                                </Card.Text>
                                <Button variant="outline-danger" >
                                    ADD
                                </Button>


                            </div>




                        </Card.Body>


                    </Card>



                    <Card style={{ minWidth: "200px", margin: "10px" }}>

                        <Card.Img src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=50,metadata=none,w=225/app/images/products/sliding_image/28169a.jpg?ts=1678192659" />

                        <Card.Body>
                            <Card.Title>Milky mist Panner</Card.Title>

                            <Card.Text >
                                200g
                            </Card.Text>

                            <div className='d-flex justify-content-between'>
                                <Card.Text >
                                    ₹189
                                </Card.Text>
                                <Button variant="outline-danger" >
                                    ADD
                                </Button>


                            </div>




                        </Card.Body>


                    </Card>



                    <Card style={{ minWidth: "200px", margin: "10px" }}>

                        <Card.Img src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=50,metadata=none,w=225/app/images/products/sliding_image/28169a.jpg?ts=1678192659" />

                        <Card.Body>
                            <Card.Title>Milky mist Panner</Card.Title>

                            <Card.Text >
                                200g
                            </Card.Text>
                            <div className='d-flex justify-content-between'>
                                <Card.Text >
                                    ₹189
                                </Card.Text>
                                <Button variant="outline-danger" >
                                    ADD
                                </Button>


                            </div>




                        </Card.Body>


                    </Card>



                    <Card style={{ minWidth: "200px", margin: "10px" }}>

                        <Card.Img src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=50,metadata=none,w=225/app/images/products/sliding_image/28169a.jpg?ts=1678192659" />

                        <Card.Body>
                            <Card.Title>Milky mist Panner</Card.Title>

                            <Card.Text >
                                200g
                            </Card.Text>
                            <div className='d-flex justify-content-between'>
                                <Card.Text >
                                    ₹189
                                </Card.Text>
                                <Button variant="outline-danger" >
                                    ADD
                                </Button>


                            </div>




                        </Card.Body>


                    </Card>



                    <Card style={{ minWidth: "200px", margin: "10px" }}>

                        <Card.Img src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=50,metadata=none,w=225/app/images/products/sliding_image/28169a.jpg?ts=1678192659" />

                        <Card.Body>
                            <Card.Title>Milky mist Panner</Card.Title>

                            <Card.Text >
                                200g
                            </Card.Text>
                            <div className='d-flex justify-content-between'>
                                <Card.Text >
                                    ₹189
                                </Card.Text>
                                <Button variant="outline-danger" >
                                    ADD
                                </Button>


                            </div>




                        </Card.Body>


                    </Card>



                    <Card style={{ minWidth: "200px", margin: "10px" }}>

                        <Card.Img src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=50,metadata=none,w=225/app/images/products/sliding_image/28169a.jpg?ts=1678192659" />

                        <Card.Body>
                            <Card.Title>Milky mist Panner</Card.Title>

                            <Card.Text >
                                200g
                            </Card.Text>
                            <div className='d-flex justify-content-between'>
                                <Card.Text >
                                    ₹189
                                </Card.Text>
                                <Button variant="outline-danger" >
                                    ADD
                                </Button>


                            </div>




                        </Card.Body>


                    </Card>



                    <Card style={{ minWidth: "200px" }}>

                        <Card.Img src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=50,metadata=none,w=225/app/images/products/sliding_image/28169a.jpg?ts=1678192659" />

                        <Card.Body>
                            <Card.Title>Milky mist Panner</Card.Title>

                            <Card.Text >
                                200g
                            </Card.Text>
                            <div className='d-flex justify-content-between'>
                                <Card.Text >
                                    ₹189
                                </Card.Text>
                                <Button variant="outline-danger" >
                                    ADD
                                </Button>


                            </div>




                        </Card.Body>


                    </Card>



                    <Card style={{ minWidth: "200px" }} >

                        <Card.Img src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=50,metadata=none,w=225/app/images/products/sliding_image/28169a.jpg?ts=1678192659" />

                        <Card.Body>
                            <Card.Title>Milky mist Panner</Card.Title>

                            <Card.Text >
                                200g
                            </Card.Text>
                            <div className='d-flex justify-content-between'>
                                <Card.Text >
                                    ₹189
                                </Card.Text>
                                <Button variant="outline-danger" >
                                    ADD
                                </Button>


                            </div>




                        </Card.Body>


                    </Card>





                </div>



            </div>



        </div>
    )
}

export default Main