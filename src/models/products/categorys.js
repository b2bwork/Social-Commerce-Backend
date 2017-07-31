import mongoose from 'mongoose';

let categorys = new mongoose.Schema({
    coverImage: {
        type:String
    },
    name: {
        type:String
    } ,
} , {versionKey: false})

export default mongoose.model('categorys',categorys );