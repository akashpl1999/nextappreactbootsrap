import React, { useEffect, useState } from 'react'
import styles1 from './Cart.module.css'
import { Button, ListGroup } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux';
import { addtocart, removefromcart } from '../../Redux/Action';

import Allauth from'../Allauth'
import axios from 'axios';



const Cart=({ isSidebarOpen })=> {



     const [cart, setcart]=useState([])

    const rdata = useSelector((data) => data?.cart?.cartitems)

     console.log(rdata)

     

    const bill = useSelector((data)=>data?.cart?.cartitems.reduce((total, item) =>  total + item.price * item.count , 0))
     
    console.log(bill)







     const dispatch =useDispatch()
     const handlecartadd=(data)=>{
  
       dispatch(addtocart(data))
   
    }

    const handlecartremove=(data)=>{

        console.log(data)

       dispatch(removefromcart(data))
    }



     useEffect(()=>{

        let userid=JSON.parse(localStorage.getItem('userdata'))
         console.log({userid})

        axios.post('http://localhost:3000/api/Cart/cartget', {userid})
        .then(res=>{
            console.log(res.data.result)
            setcart(res.data.result.cart)
        })

     },[cart])




     console.log(cart)



    return (

        <>


            <div className={styles1.main}>

                <div className={`${styles1.Cart} ${isSidebarOpen ? styles1.open : ""}`}>

                  
                    <div className='m-2 p-2 text-dark bg-light border-2'>

                        <h1>Cart</h1>

                    </div>



                  
                    {
                       
                       cart.length > 0 ? cart?.map((data) => {
                            
                                return (

                                <>

                                    <div className='d-flex m-2 text-dark bg-light justify-content-between align-items-center'>

                                        <img src={data.image} style={{ width: '100px' }} />

                                        <div>

                                            <h5>{data.name}</h5>
                                            <p>{data.description}</p>
                                            <h6>{data.price}</h6>
                                     
                                            <div className='d-flex m-2'>
                                                <Button onClick={()=>{handlecartremove(data)}}>-</Button>

                                                <p className='p-2'>{data.count}</p>

                                                <Button onClick={()=>{handlecartadd(data)}}>+</Button>
                                            </div>
                                        </div>



                                    </div>


                                </>
                            )

                        }) :(<p>add products</p>)
                    }




                    <div className='d-flex flex-column m-2 p-2 text-dark bg-light'> 
                      
                        <h5>Bill Details</h5>

                        <div className='d-flex justify-content-between'>
                         
                            <div>

                                <p>MRP</p>
                                <p>Discount</p>
                                <p>Total</p>


                            </div>


                            <div>

                                <p className='fw-bold'>₹ {bill}</p>
                                <p>12% its is 1023</p>
                                <p className='fw-bold'>₹ {bill}</p>

                            </div>


                        </div>



                    </div>



                    <div className='d-flex flex-column m-2 p-2 text-dark bg-light' >
                     
                     
                          <h5>Cancellation Policy</h5>

                          <p>Orders cannot be cancelled once packed for delivery. In case of unexpected delays, a refund will be provided, if applicable.

                        </p>



                    </div>


                    <Button variant='success' className='m-2 p-4 text-light'>Place Order</Button>


                </div>



            </div>

        </>

    )
}







export default Cart