import userReviewsModel from '../../../models/users/userPostReview';

export default {
    Query:{
        listUserReview: async(root , params , options)=>{
            let returnData;
            let reviews = await userReviewsModel.find({
                userID: params.userID
            }).then((data)=>{
                returnData = data;
            }).catch((err)=>{
                console.log(err);
            })
            return returnData;
        }
    }
}