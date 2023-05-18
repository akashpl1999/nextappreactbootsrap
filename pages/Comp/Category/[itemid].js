import React, { useEffect, useState } from 'react'

import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

import { Container, ListGroup, Card } from 'react-bootstrap';
import styles from '../Home/Main.module.css'
import { useRouter } from 'next/router';
import Button from 'react-bootstrap';
import axios from 'axios';

import Link from 'next/link';




function Category() {


    const firstdiv = useState(null)
    const seconddiv = useState(null)


    const router = useRouter()

    const [firstDivHeight, setfirstDivHeight] = useState(0);

    const [filter, setfilter] = useState()

    const { itemid } = router.query;
    console.log(itemid)




    useEffect(() => {

        console.log(`http://localhost:3000/api/Item/${itemid}`)

        axios.get(`http://localhost:3000/api/Item/${itemid}`)
            .then(response => {
                console.log(response.data)
                setfilter(response.data.result)


            })

    }, [])

    // useEffect(() => {

    //     if (firstdiv.current && seconddiv.current) {

    //         setfirstDivHeight(seconddiv.current.clientHeight)
    //     }


    // }, [seconddiv, firstdiv])

    // console.log(firstDivHeight)



    return (


        <div className='m-4 p-4 d-flex align-items-center justify-content-center overflowX-hidden ' style={{ width: '100%' }}>



            <Container className='d-flex py-2 px-2 m-3'>


                <div style={{ width: "25%", margin: "10px", padding: '5px' }}>

                    <ListGroup as="ol" className={styles.container2} style={{ height: "500px" }}>


                        <ListGroup.Item action variant="success" style={{ borderLeft: "10px solid green" }}
                            className="d-flex justify-content-start align-items-start">
                            <img src="https://cdn.grofers.com/app/images/category/cms_images/icon/1489_1643613620694.png" style={{ width: "50px", height: '50px' }} />
                            <div>       <p>Fresh Vegitables</p>        </div>

                        </ListGroup.Item>
                        <ListGroup.Item action variant="success" style={{ borderLeft: "10px solid green" }}
                            className="d-flex justify-content-start align-items-start">
                            <img src="https://cdn.grofers.com/app/images/category/cms_images/icon/1489_1643613620694.png" style={{ width: "50px", height: '50px' }} />
                            <div>       <p>Fresh Vegitables</p>        </div>

                        </ListGroup.Item>
                        <ListGroup.Item action variant="success" style={{ borderLeft: "10px solid green" }}
                            className="d-flex justify-content-start align-items-start">
                            <img src="https://cdn.grofers.com/app/images/category/cms_images/icon/1489_1643613620694.png" style={{ width: "50px", height: '50px' }} />
                            <div>       <p>Fresh Vegitables</p>        </div>

                        </ListGroup.Item>
                        <ListGroup.Item action variant="success" style={{ borderLeft: "10px solid green" }}
                            className="d-flex justify-content-start align-items-start">
                            <img src="https://cdn.grofers.com/app/images/category/cms_images/icon/1489_1643613620694.png" style={{ width: "50px", height: '50px' }} />
                            <div>       <p>Fresh Vegitables</p>        </div>

                        </ListGroup.Item>
                        <ListGroup.Item action variant="success" style={{ borderLeft: "10px solid green" }}
                            className="d-flex justify-content-start align-items-start">
                            <img src="https://cdn.grofers.com/app/images/category/cms_images/icon/1489_1643613620694.png" style={{ width: "50px", height: '50px' }} />
                            <div>       <p>Fresh Vegitables</p>        </div>

                        </ListGroup.Item>
                        <ListGroup.Item action variant="success" style={{ borderLeft: "10px solid green" }}
                            className="d-flex justify-content-start align-items-start">
                            <img src="https://cdn.grofers.com/app/images/category/cms_images/icon/1489_1643613620694.png" style={{ width: "50px", height: '50px' }} />
                            <div>       <p>Fresh Vegitables</p>        </div>

                        </ListGroup.Item>   <ListGroup.Item action variant="success" style={{ borderLeft: "10px solid green" }}
                            className="d-flex justify-content-start align-items-start">
                            <img src="https://cdn.grofers.com/app/images/category/cms_images/icon/1489_1643613620694.png" style={{ width: "50px", height: '50px' }} />
                            <div>       <p>Fresh Vegitables</p>        </div>

                        </ListGroup.Item>
                        <ListGroup.Item action variant="success" style={{ borderLeft: "10px solid green" }}
                            className="d-flex justify-content-start align-items-start">
                            <img src="https://cdn.grofers.com/app/images/category/cms_images/icon/1489_1643613620694.png" style={{ width: "50px", height: '50px' }} />
                            <div>       <p>Fresh Vegitables</p>        </div>

                        </ListGroup.Item>
                        <ListGroup.Item action variant="success" style={{ borderLeft: "10px solid green" }}
                            className="d-flex justify-content-start align-items-start">
                            <img src="https://cdn.grofers.com/app/images/category/cms_images/icon/1489_1643613620694.png" style={{ width: "50px", height: '50px' }} />
                            <div>       <p>Fresh Vegitables</p>        </div>

                        </ListGroup.Item>
                        <ListGroup.Item action variant="success" style={{ borderLeft: "10px solid green" }}
                            className="d-flex justify-content-start align-items-start">
                            <img src="https://cdn.grofers.com/app/images/category/cms_images/icon/1489_1643613620694.png" style={{ width: "50px", height: '50px' }} />
                            <div>       <p>Fresh Vegitables</p>        </div>

                        </ListGroup.Item>
                        <ListGroup.Item action variant="success" style={{ borderLeft: "10px solid green" }}
                            className="d-flex justify-content-start align-items-start">
                            <img src="https://cdn.grofers.com/app/images/category/cms_images/icon/1489_1643613620694.png" style={{ width: "50px", height: '50px' }} />
                            <div>       <p>Fresh Vegitables</p>        </div>

                        </ListGroup.Item>




                       
                    </ListGroup>

                </div>


                <div ref={seconddiv} className='d-flex flex-wrap' style={{ width: "75%" }}>


                    {
                        filter?.map((data) => {


                            const pid = data._id


                            return (


                                <>

                                    <Link href={`../Home/${pid}`}>

                                        <Card className='position-relative' style={{ maxWidth: "200px", margin: "10px" }}>

                                            <Card.Img src={data.image} variant='top' />

                                            <Card.Body>

                                                <Card.Subtitle>{data.name}</Card.Subtitle>

                                                <p>{data.description}</p>

                                            </Card.Body>


                                        </Card>

                                    </Link>




                                </>
                            )
                        })
                    }

                </div >




            </Container>












        </div>
    )
}

export default Category