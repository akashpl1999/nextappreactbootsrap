import connect from '../../middleware/Connect';
import RegisterModel from '../../Models/Register';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';


const secret = 'mysecret';




const handler=async(req,res)=>{


    if (req.method === 'POST') {
      
        console.log(req.body);
      
        const user = await RegisterModel.findOne({ email: req.body.email });
        if (!user) {
          return res.status(400).send({ msg: 'Invalid email or password' });
        }
      
        const passwordMatch = await bcrypt.compare(req.body.password, user.password);
        if (!passwordMatch) {
          return res.status(400).send({ msg: 'Invalid email or password' });
        }
      
        const token = jwt.sign({user}, secret, { expiresIn: '1h' });
        res.status(200).send({ msg: 'Success', token, user, err:0 });
      }
      

    
    }





export default connect(handler)