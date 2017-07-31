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
    quantity:{
        type: Number,
        default: 1
    },
} , {versionKey: false});

export default mongoose.model('userBuyedProduct',userBuyProduct);