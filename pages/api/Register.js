import connect from '../../middleware/Connect';
import RegisterModel from '../../Models/Register';

import bcrypt from 'bcryptjs';
const saltRounds = 10;


//const match = await bcrypt.compare(password, hashedPassword);


// const connect =require('../../middleware/Connect')
// const RegisterModel =require('../../Models/Register')

 const handler =async(req, res) =>{

    if (req.method === 'POST') {

        console.log(req.body)

         const data =new RegisterModel({
            name:req.body?.name,
            email:req.body?.email,
            password:await bcrypt.hash(req.body.password, saltRounds),
            conformpassword:await bcrypt.hash(req.body.conformpassword, saltRounds)
         })
            let result= await data.save()
                if(result){
                    res.status(200).send({msg:"done",result })
              
                  }else{
                    res.status(400).send({msg:"err"})
                
                  }
    

             
          
       
        } else if(req.method === 'GET'){

            const data = await RegisterModel.find()

              if(data){

                res.status(200).send({data, msg:'done'})
              }else{

                res.status(400).send({msg:"err1"})
              }
  
        }else if(req.method === 'PUT'){
                const { _id } = req.body;
                
                 console.log(_id)
                const filter = { _id: _id };

                const update = { ...req.body };  // {$set:{name:req.body.name}}

                const options = { returnOriginal: false, upsert: false};

                const result = await RegisterModel.findOneAndUpdate(filter, update, options);

                if(result){
                    res.status(200).send(result)
                  }else{
                    res.status(400).send({msg:"err1"})
                  }
      
              }else if(req.method === 'DELETE'){

                const { _id } = req.body;
             
                const filter = { _id: _id };
               const result=await RegisterModel.findByIdAndDelete(filter)
               if(result){
                res.status(200).send({msg:'done',result})
              }else{
                res.status(400).send({msg:"err1"})
              }
  


              }
              

    }
    
    export default connect(handler)




// async function postData(url = '', data = {}) {
//     const response = await fetch(url, {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json'
//       },
//       body: JSON.stringify(data)
//     });
//     return response.json();
//   }
  
//   postData('/api/post', { username: 'example' })
//     .then(data => {
//       console.log(data);
//     });
  