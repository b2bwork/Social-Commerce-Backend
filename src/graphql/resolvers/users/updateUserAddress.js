import userAddressModel from '../../../models/users/usersProfile';

export default {
    Mutation: {
        updateUserAddress(root, params, options) {
            const update = userAddressModel.update({
                providerUserID: params.userID
            }, {
                    fullNameAddress: params.fullNameAddress,
                    address: params.address,
                    city: params.city,
                    province: params.province,
                    postalCode: params.postalCode,
                    phoneNumber: params.phoneNumber,
                }).then((data) => {
                    return data.ok;
                }).catch((err) => {
                    console.log(err);
                });
            return { _id: update };
        }
    }
}