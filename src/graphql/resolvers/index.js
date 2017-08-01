import { merge } from 'lodash';
import updateUserProfile from './users/updateUserProfile';
import updateUserAddress from './users/updateUserAddress';
import updateCommunityRef from './users/communityRef';
import updateUserFinace from './users/updateUserFinace';


import userProfileQuery from './users/userProfileQuery';
import userAddressQuery from './users/userAddressQuery';
import userFinaceQuery from './users/userFinaceQuery';
import userPostReview from './users/userPostReview';

import listProducts from './products/listProducts';
import category from './products/categorys';
import productContent from './products/productContent';
import listPostReview from './users/listPostReview';

export default merge(updateUserProfile ,
                     updateUserAddress , 
                     updateCommunityRef , 
                     userProfileQuery , 
                     userAddressQuery ,
                     updateUserFinace ,
                     userFinaceQuery , 
                     listProducts ,
                     category ,
                     productContent ,
                     userPostReview ,
                     listPostReview , );
