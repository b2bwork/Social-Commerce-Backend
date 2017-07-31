import userPostReview from '../../../models/users/userPostReview';
export default {
    Mutation: {
        userPostReview: async (root, params, option) => {
            let returnData = null;
            let post = await userPostReview.insertMany({
                userID: params.userID,
                userName: params.userName,
                userImage: params.userImage,
                title: params.title,
                category: params.category,
                content: params.content,
            }).then((data) => {
                returnData = 'success';
            }).catch((err) => {
                returnData = 'fail'
            })
            return {userID:returnData};
        }
    }
}