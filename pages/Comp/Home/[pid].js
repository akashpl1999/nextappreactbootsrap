import React, { useEffect, useState } from 'react'

import { Button, Card, Carousel, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import { useRouter } from 'next/router';
import axios from 'axios';


function Item() {


    //const images = ["https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=120,h=120/app/images/products/full_screen/pro_481020.jpg?ts=1644845159", "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=120,h=120/app/images/products/full_screen/pro_289152.jpg?ts=1668147531", "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=120,h=120/app/images/products/full_screen/pro_54056.jpg?ts=1660032971"]


    const [Data, setdata] = useState()

    const router = useRouter();

    const { pid } = router.query;

    const [previewImageUrl, setPreviewImageUrl] = useState('');





    useEffect(() => {

        axios.get(`http://localhost:3000/api/Item/Product/${pid}`)

            .then((res) => {
                console.log(res.data.result)
                setdata(res.data.result)
            })
        console.log(Data)

    }, [])

    const handleClick=(data)=>{
        setPreviewImageUrl(data)
    }


    
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



    return (


        <div className='d-flex  w-100  mt-3'>

            <div className='d-flex flex-column justify-content-center align-items-center ' style={{ width: '60%' }}>

                <img src={previewImageUrl ? previewImageUrl : Data?.image}  style={{ width: '400px', height: "400px" }} />

                <div className='d-flex flex-row align-items-center justify-content-center' >

                    {
                        Data?.imgarr?.map((img) => {
                            return (
                                <>
                                    <Card>

                                        <img src={img} onClick={() => handleClick(img)}
                                            style={{ width: '100px', height: '100px', margin: '5px' }}
                                        />

                                    </Card>



                                </>
                            )
                        })




                    }


                </div>




                <div className='d-flex flex-column align-items-center justify-content-center mt-5 '>

                    <div style={{ width: "500px", marginBottom: '10px' }}>

                        <h4>Product Detailes</h4>



                        <h5>Shelf Life   </h5>
                        <p>18 months</p>



                        <h5>
                            Manufacturer Details
                        </h5>

                        <p>

                            Hindustan Unilever Limited, Unilever House, B D Sawant Marg, Chakala, Anderi E, Mumbai - 400099

                        </p>

                        <h5>

                            Marketed By

                        </h5>


                        <p style={{ textAlign: 'left' }}>

                            Hindustan Unilever Ltd.
                            Unilever House, B D Sawant Marg, Chakala Andheri East, Mumbai-400099
                            FSSAI License

                            10013022001897
                            Country Of Origin

                            India
                        </p>

                        <h5>
                            Customer Care Details

                        </h5>
                        <p>  Email: info@blinkit.com
                            Customer Care Number: 1-800-208-8888

                        </p>

                        <h5>
                            Expiry Date

                        </h5>
                        <p>
                            Please refer to the packaging of the product for expiry date.

                        </p>

                        <h5>
                            Seller

                        </h5>

                        <p>
                            SUPERWELL COMTRADE PRIVATE LIMITED
                            Seller FSSAI

                            11222302001343


                        </p>


                        <h5>      Key Features </h5>

                        <p>

                            Real taste of South Indian coffee with a fine blend of Arabic & Robusta.
                            Perfect mix of 70% coffee and 30% chicory
                            Soluble instant coffee-chicory mix dissolves in milk/water
                            The packaging preserves the aroma and flavour Used for hot & cold coffee
                            Ingredients

                        </p>
                        <p>

                            Instant coffee-chicory mixture made from blends of coffee and chicory coffee.
                            Coffee 70% and Chicory 30 %.
                            Unit

                        </p>

                        <h5>
                            50 g

                        </h5>
                        <p>
                            Packaging Type

                        </p>

                        Pouch
                        Disclaimer
                        <p>
                            Every effort is made to maintain the accuracy of all information. However, actual product packaging and materials may contain more and/or different information. It is recommended not to solely rely on the information presented.
                            Description

                            Made from a fine blend of choicest plantations and robust beans, BRU Instant coffee offers a rich coffee taste. Its strong process ensures that the fresh coffee aroma is preserved so that you get the best coffee experience, instantly.
                        </p>
                        <p>
                            Every effort is made to maintain the accuracy of all information. However, actual product packaging and materials may contain more and/or different information. It is recommended not to solely rely on the information presented.
                            Description

                            Made from a fine blend of choicest plantations and robust beans, BRU Instant coffee offers a rich coffee taste. Its strong process ensures that the fresh coffee aroma is preserved so that you get the best coffee experience, instantly.
                        </p>
                        <p>
                            Every effort is made to maintain the accuracy of all information. However, actual product packaging and materials may contain more and/or different information. It is recommended not to solely rely on the information presented.
                            Description

                            Made from a fine blend of choicest plantations and robust beans, BRU Instant coffee offers a rich coffee taste. Its strong process ensures that the fresh coffee aroma is preserved so that you get the best coffee experience, instantly.
                        </p>
                        <p>
                            Every effort is made to maintain the accuracy of all information. However, actual product packaging and materials may contain more and/or different information. It is recommended not to solely rely on the information presented.
                            Description

                            Made from a fine blend of choicest plantations and robust beans, BRU Instant coffee offers a rich coffee taste. Its strong process ensures that the fresh coffee aroma is preserved so that you get the best coffee experience, instantly.
                        </p>
                        <p>
                            Every effort is made to maintain the accuracy of all information. However, actual product packaging and materials may contain more and/or different information. It is recommended not to solely rely on the information presented.
                            Description

                            Made from a fine blend of choicest plantations and robust beans, BRU Instant coffee offers a rich coffee taste. Its strong process ensures that the fresh coffee aroma is preserved so that you get the best coffee experience, instantly.
                        </p>
                        <p>
                            Every effort is made to maintain the accuracy of all information. However, actual product packaging and materials may contain more and/or different information. It is recommended not to solely rely on the information presented.
                            Description

                            Made from a fine blend of choicest plantations and robust beans, BRU Instant coffee offers a rich coffee taste. Its strong process ensures that the fresh coffee aroma is preserved so that you get the best coffee experience, instantly.
                        </p>
                        <p>
                            Every effort is made to maintain the accuracy of all information. However, actual product packaging and materials may contain more and/or different information. It is recommended not to solely rely on the information presented.
                            Description

                            Made from a fine blend of choicest plantations and robust beans, BRU Instant coffee offers a rich coffee taste. Its strong process ensures that the fresh coffee aroma is preserved so that you get the best coffee experience, instantly.
                        </p>
                        <p>
                            Every effort is made to maintain the accuracy of all information. However, actual product packaging and materials may contain more and/or different information. It is recommended not to solely rely on the information presented.
                            Description

                            Made from a fine blend of choicest plantations and robust beans, BRU Instant coffee offers a rich coffee taste. Its strong process ensures that the fresh coffee aroma is preserved so that you get the best coffee experience, instantly.
                        </p>
                        v
                    </div>

                </div>


            </div >



















            <div className='mt-4' style={{ position: 'fixed', top: "80px", right: '0px', width: '40%', overflow: 'hidden' }}>

                <div className='d-flex flex-column justify-content-start align-items-start m-3 p-3' style={{ width: "100%" }}>

                    <h4>

                        {Data?.name}
                        {Data?.description}
                        
                    </h4>

                    12 MINS


                    <h3 style={{ color: 'green' }}>

                      
                        View all by {Data?.name}


                    </h3>


                    <p>
                        {Data?.quantity}

                    </p>


                    <div style={{ width: "100%" }}>

                        <Row  >
                            <Col sm={6}>

                                <p>

                                    {Data?.price}


                                </p>

                            </Col>


                            <Col sm={6}>

                                <Button onClick={()=>{handlecart(Data)}} variant="outline-danger" >
                                    Add
                                </Button>


                            </Col>

                        </Row>
                    </div>

                    <h5>
                        Why shop from blinkit?

                    </h5>


                    <div className='d-flex flex-column m-2'>



                        <div className='d-flex flex-row'>
                            <img src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=50,metadata=none,w=90/assets/web/blinkit-promises/10_minute_delivery.png" style={{ width: '50px', height: '50px', borderRadius: "50%" }} />
                            <p>
                                best price
                                Best Prices & Offers
                                Best price destination with offers directly from the manufacturers.

                            </p>
                        </div>


                        <div className='d-flex flex-row'>
                            <img src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=50,metadata=none,w=90/assets/web/blinkit-promises/10_minute_delivery.png" style={{ width: '50px', height: '50px', borderRadius: "50%" }} />
                            <p>
                                best price
                                Best Prices & Offers
                                Best price destination with offers directly from the manufacturers.

                            </p>
                        </div>
                        <div className='d-flex flex-row'>
                            <img src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=50,metadata=none,w=90/assets/web/blinkit-promises/10_minute_delivery.png" style={{ width: '50px', height: '50px', borderRadius: "50%" }} />
                            <p>
                                best price
                                Best Prices & Offers
                                Best price destination with offers directly from the manufacturers.

                            </p>
                        </div>




                    </div>

                </div>



            </div>



        </div>






    )
}

export default Item