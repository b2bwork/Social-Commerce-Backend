import userAddressModel from '../../../models/users/usersProfile';

export default {
    Query:{
        userAddress: async (root , params , options)=>{
            let returnData = null ;
            let list = await userAddressModel.findOne({
                providerUserID: params.UserID
            }).then((data)=>{
                returnData = data;
            }).catch((err)=>{
                console.log()
            })
        return returnData;
        }
    }
}