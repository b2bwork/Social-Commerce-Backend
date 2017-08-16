import userProfileModel from '../../../models/users/usersProfile';

export default {
    Mutation:{
        updateCommunityRef(root,params,option){
            const update = userProfileModel.update({
                _id: params.userID
            },{
                CommunityRef: params.CommunityRef 
            }).then((data)=>{
                return data.ok;
            }).catch((err)=>{
                console.log(err);
            });
            return {_id:update};
        }
    }
}