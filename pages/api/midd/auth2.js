

import jwt from 'jsonwebtoken'
const secret = 'mysecret';


export default function authenticateforgot(req,res,next){
    
    const authHeader = req.headers.authorization;

    if(!authHeader || !authHeader.startsWith('Bearer')){
        return res.status(401).send({message:'Unauthorized'});
    }

    const token = authHeader.split(' ')[1];
    console.log(token)

    try{
        const decode = jwt.verify(token, secret);
        console.log(decode)
        req.user = decode.payload;
        next();

    } catch(err) {

        return res.status(402).send({message:'Unauthorized'});
    }
}
