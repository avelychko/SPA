import { MongoClient } from 'mongodb';
import mongoose from 'mongoose';

export const Stores = mongoose.model('stores', {
    _id: mongoose.SchemaTypes.String,
    title: mongoose.SchemaTypes.String
});

export const Items = mongoose.model('items', {
    _id: mongoose.SchemaTypes.String,
    title: mongoose.SchemaTypes.String
});