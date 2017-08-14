import listPollProductModel from '../../../models/products/pollProducts';

export default {
    Query: {
        listPollProduct: async (root, params, options) => {
            let returnData = null;
            let list = await listPollProductModel.find({})
                .then((data) => {
                    returnData = data;
                })
                .catch((err) => {
                    console.log(err)
                })
            return returnData;
        }
    }
}