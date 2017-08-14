import pollProductModel from '../../../models/products/pollProducts';
export default {
    Mutation: {
        addPollProducts: async (root, params, options) => {
            let returndata ;
            let add = await pollProductModel.insertMany({
                userID: params.userID,
                userName: params.userName,
                products: params.products
            }).then((data)=>{
                returndata = data[0]._id
            })
            return {_id:returndata};
        }
    }
}