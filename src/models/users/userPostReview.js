import mongoose from 'mongoose';

let userPostReview = new mongoose.Schema({
    userID: {
        type: String
    },
    coverImage:{
        type: String
    },
    userName: {
        type: String
    },
    userImage: {
        type: String
    },
    title: {
        type: String
    },
    category: {
        type: String
    },
    content: {
        type: String
    },
}, {versionKey: false});

export default mongoose.model('usersReview',userPostReview);