import productsModel from '../../../models/products/products';
export default {
    Query:{
        productContent:async (root , params , options)=>{
            let returnData = null ;
            let product = await productsModel.findOne({
                _id: params._id
            })
            .then((data)=>{
                returnData = data;
            }).catch((err)=>{
                console.log(err);
            });
         return returnData
        }
    }
}