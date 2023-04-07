// stores.js
import express from "express";
import itemRouter from "./items.js";

const storesRouter = express.Router();

itemRouter.mergeParams = true;
storesRouter.use("/:store_id/items", itemRouter);

storesRouter.get('/', async (req, res) => {
    const stores = await Stores.find();

    res.send(stores);
});

storesRouter.get('/:store_id', async (req, res) => {
    const storeId = req.params.storeId;
    try {
        const store = await Stores.findOne({ _id: storeId });
        console.log(store);
        if (store === null) {
            res.status(404);
            res.json({
                status: 404,
                message: 'not found',
            });
            return;
        }
        // The MongoDB driver returns data as JavaScript objects, so we don't need to parse them to pass them to the `json` method of
        // Express' `Response` object
        res.json(store);
    } catch (e) {
        console.log(e);
        res.status(500);
        res.send('');
    }
});

storesRouter.post("/new", async (req, res) => {
    const requestBody = req.body;
    requestBody._id = uuidv4();

    try {
        const result = await new Stores(requestBody).save();
        console.log(result);
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