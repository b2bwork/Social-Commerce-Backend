import transactionModel from '../../../models/users/userBuyProduct';

export default {
    Query: {
        transactionHistory: async (root, params, options) => {
            let returnData;
            let list = await transactionModel.find({ userID: params.userID })
            .then((data)=>{
                returnData = data;
            }).catch((err)=>{
                console.log(err)
            })
            return returnData
        }
    }
}