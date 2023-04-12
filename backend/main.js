import express from 'express';
import storesRouter from './stores.js';
import cors from 'cors';
import mongoose from 'mongoose';

const port = 3001;
const app = express();

app.use(cors())

// Use the JSON parsing middleware so we can access it via `req.body`
app.use(express.json());

// Connect to the MongoDB database once and attach the connection pool to the application instance
await mongoose.connect('mongodb://localhost:27017/stores')

app.get("/", (req, res) => {
    res.json({
        code: 200,
        message: "Hello, Express",
    });
});

// TODO: Attach your `todos` router here
app.use('/stores', storesRouter);

app.listen(port, () => {
  console.log(`Server listening on localhost:${port}`);
})
