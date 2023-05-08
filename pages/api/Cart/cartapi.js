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

            if (req.body.userid) {

                const cartdata = await Cartmodule.findOne({ userid: userid })

                //  console.log(cartdata.cart.map(dt => console.log(dt._id.toString())),"ghj")
                //     console.log(cartitem._id)

              
                 if (cartdata) {

                    const itemsdata = cartdata.cart.find((dt) => dt._id.toString() === cartitem._id)

                    console.log(itemsdata ,"hj")

              
                    if (itemsdata) {


                        itemsdata.count += 1;

                     
                   //  itemsdata.count = itemsdata.count ? itemsdata.count + 1 : 1;

                   //  itemsdata.count = itemsdata.count !== undefined && itemsdata.count !== null ? itemsdata.count + 1 : 1;

                    } else {

                        cartitem.count = 1;

                        cartdata.cart.push(cartitem)
                    }

                    const updatedCartData = await cartdata.save();

                    res.status(200).send({ msg: 'done', result: updatedCartData })


                } else {


                    cartitem.count = 1

                    const results = new Cartmodule({

                        userid,

                        cart: [cartitem]

                    })

                    const data = await results.save()


                    if (data) {
                        res.status(201).send({ msd: 'done POST', result: data })
                    } else {

                        results.status(400).send({ msg: "err accured" })
                    }
                }
            }


        } catch (err) {


            console.log(err)
            res.status(500).send({ msg: 'internal server error' })
        }
    })






   





export default connectDb(handler)