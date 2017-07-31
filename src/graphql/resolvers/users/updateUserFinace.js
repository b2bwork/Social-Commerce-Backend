import userProfileModel from '../../../models/users/usersProfile';

export default {
    Mutation: {
        updataFinace: async(root, params , option)=>{
            
           const update = await userProfileModel.update({
                                providerUserID: params._id ,
                            },{
                            creditCardUserName: params.creditCardUserName ,
                            creditCardNumber: params.creditCardNumber ,
                            creditCardDate: params.creditCardDate ,
                            creditCardCVC: params.creditCardCVC ,
                            creditCardYear: params.creditCardYear ,
                        }).then((data)=>{
                            return data.ok;
                        }).catch((err)=>{
                            console.log(err);
                        });
        return {_id:update};
        }
    }
}