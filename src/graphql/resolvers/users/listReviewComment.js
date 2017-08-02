import reviewComment from '../../../models/users/reviewComments';
export default {
    Query: {
        reviewComment: async (root, params, options) => {
            let returnData = null;
            let list = await reviewComment.find({
                reviewID: params.reviewID
            }).then((data) => {
                returnData = data;
            }).catch((err) => {
                console.log(err);
            });
            return returnData;
        }
    }
}