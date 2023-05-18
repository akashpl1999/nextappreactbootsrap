import { request } from 'express'
import Cartmodule from '../../../Models/Cart'
import connectDb from '../../../middleware/Connect'
import nextConnect from 'next-connect'
import mongoose  from 'mongoose'

const handler = nextConnect({
    onError: (err, req, res, next) => {
        console.log(err)
        res.status(500).send('Internal Server Error')
    },
    onNoMatch: (req, res) => {
        res.status(404).send('Not Found')
    }
})



    .post(async (req, res) => {

        console.log(req.body)

        const { userid, cartitem } = req.body


        try {

            const cartdata = await Cartmodule.findOne({ userid: userid })


            if (cartdata) {

                const result = cartdata.cart.find((dt) => dt._id.toString() === cartitem._id)


                if (result.count === 1) {

                    cartdata.cart.splice(cartdata.cart.indexOf(result), 1)
                    await cartdata.save()
           

                } else {

                    result.count-= 1;
                    await cartdata.save()
           
                }
                  
               

                // calcuate total sum and count

                 const aggregateresult = await Cartmodule.aggregate([

                    {$match:{userid:new mongoose.Types.ObjectId(userid)}},
                    {$unwind:'$cart'},
                    {
                        $group:{
                            _id:null,
                            totalCount:{$sum:'$cart.count'},
                            totalPrice:{$sum:{$multiply:["$cart.count", "$cart.price"]}}

                        }
                    }


                 ]).exec();

                 if(aggregateresult && aggregateresult.length >0){

                    const {totalCount,totalPrice} = aggregateresult[0]

                    const updatedCartData = await Cartmodule.findOneAndUpdate({userid:userid},{$set:{totalCount,totalPrice}},{new:true})

                    const allupdate= await updatedCartData.save()
   
                   res.status(200).send({ msg: 'done', result: allupdate })
   
                 }else{

                    res.status(400).send({ msg: "error" })

                 }

           

            } else {

                res.status(400).send({ msg: "error" })

            }


        } catch (err) {


            console.log(err)
            res.status(400).send({ msg: "err" })
        }
    })









export default connectDb(handler)