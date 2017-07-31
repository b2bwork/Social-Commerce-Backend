import userProfileModel from '../../../models/users/usersProfile';

export default {
    Mutation:{
        updateUserProfile(root , params , options){
            const update = userProfileModel.update({
                 providerUserID: params._id
            },{ 
                fullName: params.fullName ,
                email: params.email ,
                bio: params.bio,
                creditCardUserName: params.creditCardUserName ,
                creditCardNumber: params.creditCardNumber ,
                creditCardDate: params.creditCardDate ,
                creditCardCVC: params.creditCardCVC ,
            })
            .then((data)=>{
                return data.ok;
            }).catch((err)=>{
                console.log(err);
            });
            return {_id:update};
            }
    }
}