import userPostReview from '../../../models/users/userPostReview';
export default {
    Mutation: {
        userPostReview: async (root, params, option) => {
            let _id = null;
            let returnData = null;
            let post = await userPostReview.insertMany({
                userID: params.userID,
                userName: params.userName,
                userImage: params.userImage,
                title: params.title,
                category: params.category,
                content: params.content,
            }).then((data) => {
                _id = data[0]._id;
                returnData = 'success';
            }).catch((err) => {
                returnData = 'fail'
            })
            return { userID: returnData, _id: _id };
        }
    }
}