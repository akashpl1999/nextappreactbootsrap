// import mongoose  from 'mongoose';

// const connection = {};

// async function connect() {

//   if (connection.isConnected) {

//     return;

//   }

//   const db = await mongoose.connect("mongodb://localhost:27017/nextdemo", {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//   });

//   connection.isConnected = db.connections[0].readyState;

//   console.log('MongoDB Connected!');

//   // Reuse existing database connection for all Mongoose models
//   // mongoose.connection.on('connected', () => {
//   //   console.log('Mongoose default connection is open to ',);
//   // });

//   // mongoose.connection.on('error', (err) => {
//   //   console.log(`Mongoose default connection has occurred ${err} error`);
//   // });

//   // mongoose.connection.on('disconnected', () => {
//   //   console.log('Mongoose default connection is disconnected');
//   // });
// }

// export default connect;


import mongoose from "mongoose";

const connectDb= handler => async(req,res)=>{

  if(mongoose.connections[0].readyState){
    
    return handler(req,res)
  }

   await mongoose.connect("mongodb://localhost:27017/nextdemo")
    console.log('done')

   return handler(req,res);
}
export default connectDb;