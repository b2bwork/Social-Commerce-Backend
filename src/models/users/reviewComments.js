import mongoose from 'mongoose';

let reviewComments = new mongoose.Schema({
    reviewID: {
        type: String,
        index: true
    },
    userName:{
        type: String
    },
    userID: {
        type: String
    },
    userImage: {
        type: String
    },
    comment: {
        type: String
    }
});

export default mongoose.model('reviewComments' , reviewComments);