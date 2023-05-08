import connect from '../../middleware/Connect';
import RegisterModel from '../../Models/Register';
import nc from 'next-connect';
import jwt from 'jsonwebtoken';
const secret = 'mysecret';
const nodemailer = require("nodemailer");
const { google } = require("googleapis");
const OAuth2 = google.auth.OAuth2;

require("dotenv").config();



const handler = nc({
    onError: (err, req, res, next) => {
        console.error(err.stack);
        res.status(500).end("Something broke!");
    },
    onNoMatch: (req, res) => {
        res.status(404).end("Page is not found");
    },
})






          


    .post(async (req, res) => {


        const { email } = req.body

        const otp=Math.floor(Math.random()*1000000)

        try {

            
            const options = { returnOriginal: false, upsert: true };

            const result = await RegisterModel.findOneAndUpdate({ email: email } ,{$set:{otp}}, options);

            const token = jwt.sign({ email }, secret, { expiresIn: '1h' });

             await sendOTP(email,otp)

            res.status(200).send({ email, msg: 'done', err: 0, token });


        } catch (error) {

            console.error(error);

            res.status(500).send({ msg: 'Internal Server Error' });
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

const sendOTP = async (email, otp) => {
  const emailOptions = {
    subject: "Your OTP for login is " + otp,
    text: "Your OTP for login is " + otp,
    to: email,
    from: process.env.EMAIL
  };
  await sendEmail(emailOptions);
};





















export default connect(handler)
