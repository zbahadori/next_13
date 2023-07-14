import { MongoClient } from 'mongodb'
async function handler(req, res) {
    const client = await MongoClient.connect('mongodb://127.0.0.1:27017/next13_shop')
    if(req.method === 'POST'){
        const {title, price} = req.body
        const db = client.db()
        await db.collection('products').insertOne({title, price})
    }else {

        // res.json({
        //     products: data
        // })
    }
}
export default handler;