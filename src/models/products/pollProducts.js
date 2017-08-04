import mongoose from 'mongoose';

let pollProduct = new mongoose.Schema({
    userID:{
        type: String
    },
    userName:{
        type: String
    },
    products:{
        type: mongoose.SchemaTypes.Mixed
    }
},{versionKey: false});

export default mongoose.model('pollProducts' , pollProduct);