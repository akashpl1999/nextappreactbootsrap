import React, { useState } from 'react'
import { Button, Container, Row, Carousel } from 'react-bootstrap'
import Card from 'react-bootstrap/Card';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styles from './Main.module.css'


function Main() {


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


    // const cards = [
    //     { id: 1, title: "Card 1", text: "This is the first card." },
    //     { id: 2, title: "Card 2", text: "This is the second card." },
    //     { id: 3, title: "Card 3", text: "This is the third card." },
    //     { id: 4, title: "Card 4", text: "This is the fourth card." },
    //     { id: 5, title: "Card 5", text: "This is the fifth card." },
    //     { id: 6, title: "Card 6", text: "This is the sixth card." },
    //     { id: 7, title: "Card 7", text: "This is the seventh card." },
    //     { id: 8, title: "Card 8", text: "This is the eighth card." },
    //     { id: 9, title: "Card 9", text: "This is the ninth card." },
    //     { id: 10, title: "Card 10", text: "This is the tenth card." },
    // ];


    // const cardsPerScreen = 5; // number of cards to display on screen

    // const items = [];

    // for (let i = 0; i < cards.length; i += cardsPerScreen) {

    //     const screenCards = cards.slice(i, i + cardsPerScreen);

    //     const item = (

    //         <Carousel.Item key={i}>

    //             <div className="d-flex justify-content-center">
    //                 <Card style={{ width: "18rem" }}>
    //                     <Card.Body>
    //                         <Card.Title>{screenCards[0].title}</Card.Title>
    //                         <Card.Text>{screenCards[0].text}</Card.Text>
    //                     </Card.Body>
    //                 </Card>

    //                 <Card style={{ width: "18rem" }}>
    //                     <Card.Body>
    //                         <Card.Title>{screenCards[1].title}</Card.Title>
    //                         <Card.Text>{screenCards[1].text}</Card.Text>
    //                     </Card.Body>
    //                 </Card>

    //                 <Card style={{ width: "18rem" }}>
    //                     <Card.Body>
    //                         <Card.Title>{screenCards[2].title}</Card.Title>
    //                         <Card.Text>{screenCards[2].text}</Card.Text>
    //                     </Card.Body>
    //                 </Card>
    //                 <Card style={{ width: "18rem" }}>
    //                     <Card.Body>
    //                         <Card.Title>{screenCards[3].title}</Card.Title>
    //                         <Card.Text>{screenCards[3].text}</Card.Text>
    //                     </Card.Body>
    //                 </Card>
    //                 <Card style={{ width: "18rem" }}>
    //                     <Card.Body>
    //                         <Card.Title>{screenCards[4].title}</Card.Title>
    //                         <Card.Text>{screenCards[4].text}</Card.Text>
    //                     </Card.Body>
    //                 </Card>
    //             </div>
    //         </Carousel.Item>
    //     );

    //     items.push(item);
    // }



    return (


        <div style={{ "overflow-x": 'hidden' }}>

            <Container className='py-3 m-4 py-4 px-5 text-light w-100  ' style={{ backgroundColor: "green", borderRadius: "10px" }}>

                <h1>Shop Your Favourite Products On Online</h1>


                <Button className='bg-light text-dark m-4 '>

                    Shop</Button>

            </Container>


            <div className={styles.container}>

                <Card className=" m-1 bg-dark text-white" style={{ minWidth: '300px', borderRadius: "10px" }}>
                    <Card.Img src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=50,metadata=none,w=540/layout-engine/2023-03/beauty-WEB.jpg" alt="Card image" />

                    <Card.ImgOverlay>
                        {/* <Card.Title>Card title</Card.Title>
                        <Card.Text>
                            This is a wider card with supporting text below as a natural lead-in
                            to additional content. This content is a little bit longer.
                        </Card.Text>
                        <Card.Text>Last updated 3 mins ago</Card.Text> */}
                    </Card.ImgOverlay>
                </Card>



                <Card className=" m-1 bg-dark text-white" style={{ minWidth: '300px', borderRadius: "10px" }}>
                    <Card.Img src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=50,metadata=none,w=540/layout-engine/2023-03/Pet-Care_WEB.jpg" alt="Card image" />

                    <Card.ImgOverlay>
                        {/* <Card.Title>Card title</Card.Title>
                        <Card.Text>
                            This is a wider card with supporting text below as a natural lead-in
                            to additional content. This content is a little bit longer.
                        </Card.Text>
                        <Card.Text>Last updated 3 mins ago</Card.Text> */}
                    </Card.ImgOverlay>
                </Card>

                <Card className=" m-1 bg-dark text-white" style={{ minWidth: '300px', borderRadius: "10px" }}>
                    <Card.Img src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=50,metadata=none,w=540/layout-engine/2023-03/summer_WEB.jpg" alt="Card image" />

                    <Card.ImgOverlay>
                        {/* <Card.Title>Card title</Card.Title>
                        <Card.Text>
                            This is a wider card with supporting text below as a natural lead-in
                            to additional content. This content is a little bit longer.
                        </Card.Text>
                        <Card.Text>Last updated 3 mins ago</Card.Text> */}
                    </Card.ImgOverlay>
                </Card>

                <Card className=" m-1 bg-dark text-white" style={{ minWidth: '300px', borderRadius: "10px" }}>
                    <Card.Img src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=50,metadata=none,w=540/layout-engine/2023-03/electronic-WEB-1.jpg" alt="Card image" />

                    <Card.ImgOverlay>
                        {/* <Card.Title>Card title</Card.Title>
                        <Card.Text>
                            This is a wider card with supporting text below as a natural lead-in
                            to additional content. This content is a little bit longer.
                        </Card.Text>
                        <Card.Text>Last updated 3 mins ago</Card.Text> */}
                    </Card.ImgOverlay>
                </Card>

                <Card className=" m-1 bg-dark text-white" style={{ minWidth: '300px', borderRadius: "10px" }}>
                    <Card.Img src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=50,metadata=none,w=540/layout-engine/2023-03/pharmacy-WEB.jpg" alt="Card image" />

                    <Card.ImgOverlay>
                        {/* <Card.Title>Card title</Card.Title>
                        <Card.Text>
                            This is a wider card with supporting text below as a natural lead-in
                            to additional content. This content is a little bit longer.
                        </Card.Text>
                        <Card.Text>Last updated 3 mins ago</Card.Text> */}
                    </Card.ImgOverlay>
                </Card>

                <Card className=" m-1 bg-dark text-white" style={{ minWidth: '300px', borderRadius: "10px" }}>
                    <Card.Img src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=50,metadata=none,w=540/layout-engine/2023-03/beauty-WEB.jpg" alt="Card image" />

                    <Card.ImgOverlay>
                        {/* <Card.Title>Card title</Card.Title>
                        <Card.Text>
                            This is a wider card with supporting text below as a natural lead-in
                            to additional content. This content is a little bit longer.
                        </Card.Text>
                        <Card.Text>Last updated 3 mins ago</Card.Text> */}
                    </Card.ImgOverlay>
                </Card>

                <Card className=" m-1 bg-dark text-white" style={{ minWidth: '300px', borderRadius: "10px" }}>
                    <Card.Img src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=50,metadata=none,w=540/layout-engine/2023-03/beauty-WEB.jpg" alt="Card image" />

                    <Card.ImgOverlay>
                        {/* <Card.Title>Card title</Card.Title>
                        <Card.Text>
                            This is a wider card with supporting text below as a natural lead-in
                            to additional content. This content is a little bit longer.
                        </Card.Text>
                        <Card.Text>Last updated 3 mins ago</Card.Text> */}
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

                    <Card.Img src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=50,metadata=none,w=225/layout-engine/2022-12/Slice-26.png" style={{ width: '100px' }} />

                </Card>
                <Card className='m-2 p-2 border-0'>

                    <Card.Img src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=50,metadata=none,w=225/layout-engine/2022-12/Slice-22_0.png" style={{ width: '100px' }} />

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

                    <Card.Img src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=50,metadata=none,w=225/layout-engine/2022-12/Slice-22_0.png" style={{ width: '100px' }} />

                </Card>
                <Card className='m-2 p-2 border-0'>

                    <Card.Img src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=50,metadata=none,w=225/layout-engine/2022-12/Slice-23.png" style={{ width: '100px' }} />

                </Card>

                <Card className='m-2 p-2 border-0'>

                    <Card.Img src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=50,metadata=none,w=225/layout-engine/2022-12/paan-corner_mweb.png" style={{ width: '100px' }} />

                </Card>
                <Card className='m-2 p-2 border-0'>

                    <Card.Img src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=50,metadata=none,w=225/layout-engine/2022-12/Slice-26.png" style={{ width: '100px' }} />

                </Card>
                <Card className='m-2 p-2 border-0'>

                    <Card.Img src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=50,metadata=none,w=225/layout-engine/2022-12/Slice-22_0.png" style={{ width: '100px' }} />

                </Card>
                <Card className='m-2 p-2 border-0'>

                    <Card.Img src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=50,metadata=none,w=225/layout-engine/2022-12/Slice-23.png" style={{ width: '100px' }} />

                </Card>

            </div>


            <div className='d-flex flex-column '>

                <h2>Dairy, Bread & Eggs</h2>

                <div  className={styles.container}>

                    <Card style={{minWidth:"200px" ,margin:"10px"}}>

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

                    <Card style={{minWidth:"200px", margin:"10px"}}>

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



                    <Card style={{minWidth:"200px" , margin:"10px"}}>

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



                    <Card style={{minWidth:"200px",margin:"10px"}}> 

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



                    <Card style={{minWidth:"200px",margin:"10px"}}>

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



                    <Card style={{minWidth:"200px", margin:"10px"}}>

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



                    <Card  style={{minWidth:"200px",margin:"10px"}}>

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



                    <Card style={{minWidth:"200px",margin:"10px"}}>

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



                    <Card style={{minWidth:"200px"}}>

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



                    <Card style={{minWidth:"200px"}} >

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








            <div className='d-flex flex-column '>

                <h2>Mouth fresheners</h2>

                <div  className={styles.container}>

                    <Card style={{minWidth:"200px" ,margin:"10px"}}>

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

                    <Card style={{minWidth:"200px", margin:"10px"}}>

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



                    <Card style={{minWidth:"200px" , margin:"10px"}}>

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



                    <Card style={{minWidth:"200px",margin:"10px"}}> 

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



                    <Card style={{minWidth:"200px",margin:"10px"}}>

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



                    <Card style={{minWidth:"200px", margin:"10px"}}>

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



                    <Card  style={{minWidth:"200px",margin:"10px"}}>

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



                    <Card style={{minWidth:"200px",margin:"10px"}}>

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



                    <Card style={{minWidth:"200px"}}>

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



                    <Card style={{minWidth:"200px"}} >

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