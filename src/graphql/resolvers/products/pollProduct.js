import pollProduct from '../../../models/products/pollProducts';
export default {
    Query:{
        pollProduct: async(root, params , options)=>{
            let returndata = null
            let list = await pollProduct.findOne({
                _id: params._id
            }).then((data)=>{
                returndata = data;
            });
            return returndata;
        }
    }
}