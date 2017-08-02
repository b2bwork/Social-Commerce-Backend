import mongoose from 'mongoose';

let products = new mongoose.Schema({
  typeId:{
    type: String,
  },
  category: {
    type: String,
  },
  name: {
    type: String,
  },
  description: {
    type: String,
  },
  images:{
    type: Array,
  },
  price:{
    type: Number,
  }
  
},{versionKey: false});

export default mongoose.model('products', products);
