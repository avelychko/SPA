// JavaScript source code
import { Router } from 'express';
import { v4 as uuidv4 } from 'uuid';
import { Items } from './util.js';

const itemRouter = Router();

itemRouter.get('/', async (req, res) => {
    const storeId = req.params.store_id;
    const items = await Items.find({ store_id: storeId });

    res.send(items);
});

itemRouter.get('/:item_id', async (req, res) => {
    const storeId = req.params.store_id;
    const itemId = req.params.item_id;

    try {
        const item = await Items.findOne({_id: itemId, store_id: storeId});
        
        if (item === null) {
            res.status(404);
            res.json({
                status: 404,
                message: 'not found',
            });
            return;
        }
        res.json(item);
    } catch (e) {
        console.log(e);
        res.status(500);
        res.send('');
    }
});

itemRouter.post("/", async (req, res) => {
    const requestBody = req.body;
    requestBody._id = uuidv4();

    // add foreign key field to store
    const storeId = req.params.store_id;
    requestBody.store_id = storeId;

    try {
        const result = await new Items(requestBody).save();
        res.status(201);
        res.json({
            status: 201,
            message: 'created',
        });
    } catch (e) {
        console.log(e);
        res.status(500);
        res.json({
            status: 500,
            message: e,
        });
    }
});

export default itemRouter;
