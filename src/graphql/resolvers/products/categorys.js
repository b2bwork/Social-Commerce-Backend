import categorysModel from '../../../models/products/categorys';
export default {
    Query:{
        liscategory: async (root , params , option)=>{
            let returnData = null ;
            let list = await categorysModel.find({})
            .then((data)=>{
                returnData = data;
            }).catch((err)=>{
                console.log(err);
            })
            return returnData;
        }
    }
}