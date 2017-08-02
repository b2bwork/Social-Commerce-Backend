import commentReview from '../../../models/users/reviewComments';

export default {
    Mutation: {
        commentReview: async (root, params, options) => {
            let update = await commentReview.insertMany({
                reviewID: params.reviewID ,
                userID: params.userID ,
                userImage: params.userImage ,
                comment: params.comment ,
            }).catch((err)=>{
                console.log(err);
            });
        }
    }
}