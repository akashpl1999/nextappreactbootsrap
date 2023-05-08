const mongoose = require('mongoose')


const Itemschema = new mongoose.Schema({



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
    }

})

mongoose.models = {}

export default mongoose.model('Item', Itemschema)
