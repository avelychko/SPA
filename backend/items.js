// JavaScript source code
import { Router } from 'express';
import { v4 as uuidv4 } from 'uuid';
import { Items } from './util.js';

const itemRouter = Router();

itemRouter.get('/', async (req, res) => {
    const items = await Items.find();

    res.send(items);
});

itemRouter.get('/:itemId', async (req, res) => {
    const itemId = req.params.itemId;
    try {
        const item = await Items.findOne({_id: itemId});
        console.log(item);
        if (item === null) {
            res.status(404);
            res.json({
                status: 404,
                message: 'not found',
            });
            return;
        }
        // The MongoDB driver returns data as JavaScript objects, so we don't need to parse them to pass them to the `json` method of
        // Express' `Response` object
        res.json(item);
    } catch (e) {
        console.log(e);
        res.status(500);
        res.send('');
    }
});

itemRouter.post("/new", async (req, res) => {
    const requestBody = req.body;
    requestBody._id = uuidv4();

    try {
        const result = await new Items(requestBody).save();
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

export default itemRouter;
