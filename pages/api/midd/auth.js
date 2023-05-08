import jwt from 'jsonwebtoken'
const secret = 'mysecret';

export default function authenticate(req,res,next){
    console.log('wwwww')
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


















// import jwt from 'jsonwebtoken';

// const secret = 'mysecret';

// export async function getServerSideProps(context) {
//   const { req, res } = context;

//   const authHeader = req.headers.authorization;

//   if (!authHeader || !authHeader.startsWith('Bearer')) {
//     res.writeHead(302, { Location: '/login' });
//     res.end();
//     return { props: {} };
//   }

//   const token = authHeader.split(' ')[1];

//   try {
//     const decoded = jwt.verify(token, secret);

//     return { props: { user: decoded } };
//   } catch (err) {
//     res.writeHead(302, { Location: '/login' });
//     res.end();
//     return { props: {} };
//   }
// }
