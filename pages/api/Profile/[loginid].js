import connect from '../../../middleware/Connect'
import RegisterModel from '../../../Models/Register';
import nc from 'next-connect';


const handler = nc({
    onError: (err, req, res, next) => {
        console.error(err.stack);
        res.status(500).end("Something broke!");
    },
    onNoMatch: (req, res) => {
        res.status(404).end("Page is not found");
    },
})
   



    .get(async (req, res) => { 
        const { loginid } = req.query;
         console.log(loginid)

        try {
            const result = await RegisterModel.findOne({email:loginid});
            res.status(200).send({ result, msg: 'done', err: 0 });
        } catch (error) {
            console.error(error);
            res.status(500).send({ msg: 'Internal Server Error' });
        }
    })







export default connect(handler)

