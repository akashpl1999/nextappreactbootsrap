import { request } from 'express'
import Cartmodule from '../../../Models/Cart'
import connectDb from '../../../middleware/Connect'
import nextConnect from 'next-connect'
import mongoose from "mongoose"

const handler = nextConnect({
    onError: (err, req, res, next) => {
        console.log(err)
        res.status(500).send('Internal Server Error')
    },
    onNoMatch: (req, res) => {
        res.status(404).send('Not Found')
    }
})




    // .post(async (req, res) => {

    //     console.log(req.body)
    //     const { userid, cartitem } = req.body



    //     try {

    //         if (req.body.userid) {

    //             const cartdata = await Cartmodule.findOne({ userid: userid })

    //             //  console.log(cartdata.cart.map(dt => console.log(dt._id.toString())),"ghj")
    //             //     console.log(cartitem._id)


    //              if (cartdata) {


    //                 const itemsdata = cartdata.cart.find((dt) => dt._id.toString() === cartitem._id) 

    //                 console.log(itemsdata)


    //                 if (itemsdata) {


    //                     itemsdata.count += 1;


    //                //  itemsdata.count = itemsdata.count ? itemsdata.count + 1 : 1;

    //                //  itemsdata.count = itemsdata.count !== undefined && itemsdata.count !== null ? itemsdata.count + 1 : 1;

    //                 } else {

    //                     cartitem.count = 1;

    //                     cartdata.cart.push(cartitem)


    //                 }

    //                 const updatedCartData = await cartdata.save();


    //                 res.status(200).send({ msg: 'done', result: updatedCartData })


    //             } else {


    //                 cartitem.count = 1

    //                 const results = new Cartmodule({

    //                     userid,
    //                     cart: [cartitem]

    //                 })

    //                 const data = await results.save()


    //                 if (data) {

    //                       res.status(201).send({ msd: 'done POST', result: data })

    //                 } else {

    //                     results.status(400).send({ msg: "err accured" })
    //                 }
    //             }
    //         }


    //     } catch (err) {


    //         console.log(err)

    //         res.status(500).send({ msg: 'internal server error' })


    //     }
    // })





    .post(async (req, res) => {

        console.log(req.body)

        const { userid, cartitem } = req.body

        try {

            if (req.body.userid) {

                const cartdata = await Cartmodule.findOne({ userid: userid })

                if (cartdata) {

                    const itemsdata = cartdata.cart.find((dt) => dt._id.toString() === cartitem._id)

                    if (itemsdata) {


                        itemsdata.count += 1;


                    } else {

                        cartitem.count = 1;

                        cartdata.cart.push(cartitem)
                    }


                  await cartdata.save()

                    // Calculate total count and price
                    const aggregateResult = await Cartmodule.aggregate([

                        { $match: { userid: new mongoose.Types.ObjectId(userid) } },

                        { $unwind: "$cart" },

                        {
                            $group: {
                                _id: null,
                                totalCount: { $sum: "$cart.count" },
                                totalPrice: { $sum: { $multiply: ["$cart.count", "$cart.price"] } }
                            }
                        }
                    ]).exec();

                    if (aggregateResult && aggregateResult.length > 0) {

                        const { totalCount, totalPrice } = aggregateResult[0];

                        const updatetotalcountandprice = await Cartmodule.findOneAndUpdate({ userid: userid }, { $set: { totalCount: totalCount, totalPrice: totalPrice } }, { new: true })

                        const allupdate = await updatetotalcountandprice.save()
    
    
    
                        res.status(200).send({ msg: 'done', result: allupdate, totalCount, totalPrice })
    
                        return { totalCount, totalPrice };

                    } else {

                    
                        res.status(400).send({ msg: 'err' })
    
                
                    }



                } else {

                    cartitem.count = 1

                    // Calculate total count and price
                    const aggregateResult = await Cartmodule.aggregate([

                        { $match: { userid: new mongoose.Types.ObjectId(userid) } },

                        { $unwind: "$cart" },

                        {
                            $group: {

                                _id: null,
                                totalCount: { $sum: "$cart.count" },
                                totalPrice: { $sum: { $multiply: ["$cart.count", "$cart.price"] } }
                            }
                        }


                    ]).exec();


                     if(aggregateResult && aggregateResult.length >0){
                     
                        const {totalCount, totalPrice} = aggregateResult[0];
                        const results = new Cartmodule({ userid, cart: [cartitem], totalCount: totalCount, totalPrice: totalPrice })
                        const data = await results.save()
                        res.status(201).send({ msd: 'done POST', result: data })
    

                     } else {

                        const results = new Cartmodule({ userid, cart: [cartitem], totalCount: 0, totalPrice: 0 })
                        
                        const data = await results.save()
                      
                      
                        res.status(201).send({ msd: 'done POST', result: data })
    

                     }


                
                  
                }
            }

        } catch (err) {

            console.log(err)

            res.status(500).send({ msg: 'internal server error' })
        }
    })







export default connectDb(handler)