import userProfile from '../../../models/users/usersProfile';
import reviews from '../../../models/users/userPostReview';

export default {
    Query: {
        listPostReview: async (root, params, options) => {
            let returnData = null;
            let userCategory = null
            
            let listCategory = await userProfile.findOne({
                providerUserID: params.userID
            }).then((data)=>{
                userCategory = data.CommunityRef
            }).catch((err)=>{
                console.log(err);
            });

            let listReviews = await reviews.find({
                category: {
                    $in:userCategory
                }
            }).then((data)=>{
                console.log(data);
                returnData = data
            }).catch((err)=>{
                console.log(err);
            });
            return returnData
        }
    }
}