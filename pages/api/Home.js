import connectDb from "../../middleware/Connect";
import authenticate from "./midd/auth";
import RegisterModel from '../../Models/Register';


const handler=(req,res)=>{
  
    if(req.method === "GET"){
      
        authenticate(req,res,async ()=>{

            const data = await RegisterModel.find()
            if(data){
                res.status(200).send({msg:'done',data});
       
            }else{
              res.status(400).send({msg:"err1"})
            }

         })
    }else {
        res.status(405).json({ error: 'Method Not Allowed' });
      }
}

export default connectDb(handler)