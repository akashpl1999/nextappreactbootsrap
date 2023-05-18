const mongoose = require('mongoose')


const Registerschema=new mongoose.Schema({
    
    
    
    name:{  

        
        type:String,
        required:true
 
    }, 

    email:{

        type:String,
        required:true,
        //unique: true

    },
    
    password:{

        type:String,
        required:true
    },

    conformpassword:{

        type:String,
        required:true
       
    
    }, 

    phone:{

        type:Number,
    
    },
    add1:{
        type:String,

    },
    add2:{
          type:String
    },
    country:{
        type:String,
    },
    state:{
        type:String,
    } ,
    img:{
        type:String,

    } ,
    pincode:{
        type:String,
    },
    otp:{
        type:String,
    }


      
})

mongoose.models={}

export default mongoose.model('register', Registerschema)
