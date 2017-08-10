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
    },
    userIDVoted:{
        type: Array
    }
},{versionKey: false});

export default mongoose.model('pollProducts' , pollProduct);