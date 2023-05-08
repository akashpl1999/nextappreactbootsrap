import connectDb from "../../middleware/Connect";
import authenticateforgot from  './midd/auth2'
import RegisterModel from '../../Models/Register'


import bcrypt from 'bcryptjs';
const saltRounds = 10;


const handler = (req, res) => {
      

    if (req.method === "POST") {
         console.log(req.body )

        authenticateforgot(req, res, async () => {

          const  password =await bcrypt.hash(req.body.password, saltRounds)
          const   conformpassword = await bcrypt.hash(req.body.conformpassword, saltRounds)
        
            const {  email, otp } = req.body

            const data = await RegisterModel.findOne({ email: email })



            if (data) {

                if (data.otp == otp) {

                    const options = { returnOriginal: false, upsert: false };

                    const updatedata = await RegisterModel.findOneAndUpdate({ email: email }, { $set: { password, conformpassword } }, options)

                    if (updatedata) {

                        res.status(200).send({ msg: 'done2', updatedata, err: 0 });


                    }

                    res.status(400).send({ msg: "err1", err: 1 })


                }

               } else {
                res.status(400).send({ msg: "err1", err: 1 })
            }

        })

    } else {
        res.status(405).json({ error: 'Method Not Allowed'  ,err:1});
    }
}

export default connectDb(handler)