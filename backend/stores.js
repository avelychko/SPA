// stores.js
import express from "express";
import itemRouter from "./items.js";
import { Stores } from "./util.js";
import { v4 as uuidv4 } from 'uuid';

const storesRouter = express.Router();

itemRouter.mergeParams = true;
storesRouter.use("/:store_id/items", itemRouter);

storesRouter.get('/', async (req, res) => {
    const stores = await Stores.find();

    res.send(stores);
});

storesRouter.get('/:store_id', async (req, res) => {
    const storeId = req.params.store_id;
    try {
        const store = await Stores.findOne({ _id: storeId });
        
        if (store === null) {
            res.status(404);
            res.json({
                status: 404,
                message: 'not found',
            });
            return;
        }
        res.json(store);
    } catch (e) {
        console.log(e);
        res.status(500);
        res.send('');
    }
});

storesRouter.post("/", async (req, res) => {
    const requestBody = req.body;
    requestBody._id = uuidv4();

    try {
        const result = await new Stores(requestBody).save();
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

export default storesRouter;