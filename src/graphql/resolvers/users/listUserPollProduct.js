import pollProductModel from '../../../models/products/pollProducts';

export default {
    Query:{
        listUserPollProduct: async(root , params , options)=>{
            let returnData ;
            let poll = await pollProductModel.find({
                userID: params.userID
            }).then((data)=>{
                returnData = data
            }).catch((err)=>{
                console.log(err);
            });
            return returnData;
        }
    }
}