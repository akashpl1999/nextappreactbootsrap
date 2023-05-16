

import Cartmodule from '../../Models/Cart'
import connectdb from '../../middleware/Connect'
import nextConnect from 'next-connect'
import mongoose from 'mongoose'
const nodemailer = require("nodemailer");
const { google } = require("googleapis");
const OAuth2 = google.auth.OAuth2;

require("dotenv").config();


const handler = nextConnect({
    
    onError: (err, req, res, next) => {
        console.error(err.stack);
        res.status(500).end("Something broke!");
    },
    
    onNoMatch: (req, res) => {
        res.status(404).end("Page is not found");
    },
})


   .post(async(req,res)=>{

      const {userid, email}= req.body
        
      console.log(userid,'nnn')
    
    
      try{

        const options={returnOriginal:false, upsert:false}

        const ordercheck= await Cartmodule.findOneAndUpdate({userid:userid}, {$set:{order:true}}, options)

               console.log(ordercheck)

               await sendorderstatus(email,ordercheck)

               res.status(200).send({msg:'done', data:ordercheck})

        }catch(err){

        console.log(err)

        res.status(404).send('err accured here')


      }

   })




   
const createTransporter = async () => {

    const oauth2Client = new OAuth2(
      process.env.CLIENT_ID,
      process.env.CLIENT_SECRET,
      "https://developers.google.com/oauthplayground"
    );
  
    oauth2Client.setCredentials({
      refresh_token: process.env.REFRESH_TOKEN
    });
  
    console.log( process.env.Email)
  
    const accessToken = await new Promise((resolve, reject) => {

      oauth2Client.getAccessToken((err, token) => {

        if (err) {
           
          reject("Failed to create access token :(");
        }
        resolve(token);
      });
    });
  
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        type: "OAuth2",
        user: process.env.EMAIL,
        accessToken,
        clientId: process.env.CLIENT_ID,
        clientSecret: process.env.CLIENT_SECRET,
        refreshToken: process.env.REFRESH_TOKEN
      }
    });
  
    return transporter;
  };
  
  const sendEmail = async (emailOptions) => {
    let emailTransporter = await createTransporter();
    await emailTransporter.sendMail(emailOptions);
    
  };
  
  const sendorderstatus = async (email, data ) => {
    const emailOptions = {
      subject: `your order placed sucessfuely and Your Order items` ,
      text: "your order placed successfully ",
       to: email,
      from: process.env.EMAIL,
      html:`
      <html>
      <body>
        <h1>Your Cart</h1>

           <div style={{display:'flex', flexWrap:"wrap" , width:"100%"}}>
           ${data.cart.map(item => `<div> <img src=${item.image}/> <div>${item.name} - ${item.price}</div>  </div>`).join('')}

          
            ${ <div><h3>Total count</h3> ${data?.totalPrice}</div>}
           </div>

              </body>
        </html>
      `

    };
    await sendEmail(emailOptions);
  };
  
  


export default connectdb(handler)