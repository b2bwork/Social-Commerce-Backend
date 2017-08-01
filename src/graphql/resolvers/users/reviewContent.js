import reviewModel from '../../../models/users/userPostReview';
export default {
    Query: {
        reviewContent: async (root, params, options) => {
            
            let returnData = null;
            let content = await reviewModel.findOne({
                _id: params._id
            }).then((data)=>{
                returnData = data
            }).catch((err)=>{
                console.log(err)
            });
            return returnData;
        }
    }
}