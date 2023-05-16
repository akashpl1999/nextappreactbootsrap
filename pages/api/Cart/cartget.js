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


.post(async(req,res)=>{

    console.log(req.body)


   try{ 
       const results = await Cartmodule.findOne({userid:req.body.userid})

        if(results){
            
           res.status(200).send({ msg: 'done', result: results })
           
        }else{

             res.status(400).send({msg:'err results not found'})


        }

   }catch(err){

       console.log(err)
       res.status(400).send({msg:'err'})
   }
})




    
    




export default connectDb(handler)