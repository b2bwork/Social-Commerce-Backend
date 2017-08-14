import pollProductModel from '../../../models/products/pollProducts';

export default {
    Mutation: {
        updateProductPollScore: async (root, params, options) => {
            let check = null;
            let checkUser = await pollProductModel.findOne({
                _id: params._id,
                "userIDVoted": params.userID
            }).then(async (data) => {
                if (data == null) {
                    let update = await pollProductModel.update({
                        _id: params._id,
                        "products.productName": params.productName
                    }, {
                            $inc: { "products.productScore.$": 1 },
                            $push: { userIDVoted: params.userID }
                        })
                    check = "plus";
                } else if (data != null) {
                    check = "minus";
                }
            });
            return {_id: check}
        }
    }
}
