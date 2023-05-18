import Itemmodule from '../../../Models/Items'
import connect from '../../../middleware/Connect'
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

        try {

            const result = await Itemmodule.find()

            res.status(200).send({ result, msg: 'done', err: 0 });

        } catch (error) {

            console.error(error);

            res.status(500).send({ msg: 'Internal Server Error' });
        }
    })


export default connect(handler)