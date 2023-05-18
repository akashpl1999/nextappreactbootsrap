const mongoose = require('mongoose')

const Cartschema = new mongoose.Schema({

    userid: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'register',
        required: true
    },

    cart: [ 

        {

        name: {

            type: String,
            required: true

        },

        price: {

            type: Number,
            required: true,

        },

        category: {

            type: String,
            required: true
        },

        description: {

            type: String,
            required: true


        },

        image: {
            type: String,

        },

        quantity: {
            type: String
        },

        count:{

            type:Number
        }
     

    }],

    totalCount:{
        type:Number
    },

    totalPrice:{

        type:Number
    },
    order:{
        type:Boolean,
        
        default:false
    }
})

mongoose.models={}


export default mongoose.model('Cart', Cartschema)


//  const cart = mongoose.model('Cart', Cartschema)

//  module.exports= cart
 