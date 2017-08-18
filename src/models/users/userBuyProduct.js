import mongoose from 'mongoose';

let userBuyProduct =  new mongoose.Schema({
    userID:{
        type: String ,
        required: true ,
    },
    productID:{
        type: String ,
        required: true
    },
    productPrice: {
        type: String ,
        required: true,
    },
    price:{
        type: Number ,
    },
    quantity:{
        type: Number,
        default: 1
    },
    transactionID:{
        type: String,
        required: true
    },
    createdTime:{
        type: String,
        required: true,
    }
} , {versionKey: false});

export default mongoose.model('userBuyedProduct',userBuyProduct);