import mongoose from 'mongoose';

let usersAdress = new mongoose.Schema({
  userID:{
    type: String
  },
  country: {
    type: String
  },
  fullName: {
    type: String
  },
  address: {
    type: String,
    required: true
  },
  city:{
    type: String,
  },
  province:{
    type: String,
  },
  postalCode:{
    type: String,
  },
  phoneNumber:{
    type: String,
  },
  
},{ versionKey: false});

export default mongoose.model('usersAdress', usersAdress);
