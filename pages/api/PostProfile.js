import connect from '../../middleware/Connect';
import RegisterModel from '../../Models/Register';
import nc from 'next-connect';
import multer from 'multer';




export const config = {
    api: {
        bodyParser: false,
    },
};



const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './public/images');
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname);
    }
});



let upload = multer({ storage });


const handler = nc({
    onError: (err, req, res, next) => {
        console.error(err.stack);
        res.status(500).end("Something broke!");
    },
    onNoMatch: (req, res) => {
        res.status(404).end("Page is not found");
    },
})
    .use(upload.single('img'))



    
    .post(async (req, res) => {

        console.log(req.file);
        console.log('phone', req.body)


        try {

            const { email, phone, add1, add2, pincode, country, state } = req.body
            console.log(phone)

            const filter = { email: email }
            //  const img = req.file ? req.file.path : undefined;
            const img = 'http' + '://' + 'localhost:3000/' + 'Images/' + req.file.filename
        
            const update = { phone, add1, add2, pincode, country, state, img };
            const options = { returnOriginal: false, upsert: false };

            const result = await RegisterModel.findOneAndUpdate(filter, update, options);


            if (result) {
                res.status(200).send({ err: 0, result , msg:'done'});
            } else {
                res.status(404).send({ msg: 'Record not found' });
            }


           } catch (error) {

            console.error(error);
            res.status(500).send({ msg: 'Internal Server Error' });
        }


    })





    .get(async (req, res) => {
        try {
            const result = await RegisterModel.find();
            res.status(200).send({ result, msg: 'done', err: 0 });
        } catch (error) {

            console.error(error);
            res.status(500).send({ msg: 'Internal Server Error' });
        }
    })







export default connect(handler)

