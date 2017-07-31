import mongoose from 'mongoose';

let usersProfile = new mongoose.Schema({
  userID:{
    type: String,
    index: true
  },
  fullName: {
    type: String,
  },
  provider:{
    type: String
  },
  providerUserID:{
    type: String
  },
  profileImage: {
    type: String
  },
  email: {
    type: String,
  },
  bio:{
    type: String
  },
  password:{
    type: String,
  },
  creditCardUserName:{
    type: String
  },
  creditCardNumber:{
    type: String
  },
  creditCardDate:{
    type: String
  },
  creditCardYear:{
    type: String
  },
  creditCardCVC:{
    type: String
  },
  country: {
    type: String
  },
  fullNameAddress: {
    type: String
  },
  address: {
    type: String,
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
  CommunityRef:{
    type: Array
  }
  
},{versionKey: false});

export default mongoose.model('usersProfile', usersProfile);
