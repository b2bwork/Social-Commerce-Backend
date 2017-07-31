import productsModel from '../../../models/products/products';
export default{
    Query:{
        listproducts: async(root , params , option)=>{
            let returnData = null;
            let list = await productsModel.find({
                    typeId: params.typeId
                })
                .then((data)=>{
                    returnData = data;
                })
                .catch((err)=>{
                    console.log(err);
                });
            return returnData;
        }
    }
}