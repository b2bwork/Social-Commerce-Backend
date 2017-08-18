import buyProductModel from '../../../models/users/userBuyProduct';
import { omise } from '../../../start';
export default {
    Mutation: {
        buyProduct: async (root, params, options) => {
            let today = new Date();
            let dd = today.getDate();
            let mm = today.getMonth() + 1;

            let yyyy = today.getFullYear();
            if (dd < 10) {
                dd = '0' + dd;
            }
            if (mm < 10) {
                mm = '0' + mm;
            }
            let now = dd + '/' + mm + '/' + yyyy;
            let returnData;
            let add = await omise.charges.create({
                'amount': params.Products.price + "00",
                'currency': 'thb',
                'card': params.tokenID
            }, async (err, resp) => {
                if (resp.paid) {
                    let add = await buyProductModel.insertMany({
                        userID: params.userID,
                        tokenID: params.tokenID,
                        productID: params.Products.productID,
                        productName: params.Products.productNames,
                        productPrice: params.Products.productPrices,
                        price: params.Products.price,
                        quantity: params.Products.quantitys,
                        transactionID: resp.transaction,
                        productImage: params.Products.productImage,
                        createdTime: now
                    }).then((data) => {
                        returnData = "success";
                        return "success";
                    }).catch((err) => {
                        console.log(err);
                        returnData = "failed";
                    });
                    return "failed"
                } else {
                    returnData = "failed";
                }
            });
            if (add.paid == true) {
                return { created: true }
            } else {
                return { created: false }
            }
        }
    }
}