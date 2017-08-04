import pollProductModel from '../../../models/products/pollProducts';
export default {
    Mutation: {
        addPollProducts: async (root, params, options) => {
            let add = await pollProductModel.insertMany({
                userID: params.userID,
                userName: params.userName,
                products: params.product
            });
        }
    }
}