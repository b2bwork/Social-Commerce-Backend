import mongoose from 'mongoose';

let userAuth = new mongoose.Schema({
  provider: {
    type: String,
    required: true,
  },
  id: {
    type: String,
    required: true,
  },
  displayName: {
    type: String,
    required: true,
  },
  email:{
    type: String,
  },
  picture:{
    type: String,
  }
  
},{versionKey: false});

export default mongoose.model('usersAuth', userAuth);
