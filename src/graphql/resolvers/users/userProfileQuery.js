import userProfile from '../../../models/users/usersProfile';

export default {
    Query:{
        userProfile: async (root , params , option , )=>{

            let returnData = null;

            let list = await userProfile.findOne({
                providerUserID: params.UserID
            }).then((data)=>{
                returnData = data;
            }).catch((err)=>{
                console.log(err)
            })

        return returnData;
        }
    }
}