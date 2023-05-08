import { request } from 'express'
import Cartmodule from '../../../Models/Cart'
import connectDb from '../../../middleware/Connect'
import nextConnect from 'next-connect'


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

                } else {

                    result.count-= 1;
                }

                const updatedCartData = await cartdata.save();
                res.status(200).send({ msg: 'done', result: updatedCartData })


            } else {

                res.status(400).send({ msg: "error" })

            }




        } catch (err) {
            console.log(err)
            res.status(400).send({ msg: "err" })
        }
    })









export default connectDb(handler)