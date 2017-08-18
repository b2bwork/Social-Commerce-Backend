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
import reviewContent from './users/reviewContent';
import commentReview from './users/commentReview';
import listReviewComment from './users/listReviewComment'
import addPollProducts from './products/addPollProducts'
import pollProduct from './products/pollProduct';
import listPollProduct from './products/listPollProduct';
import updateProductPollScore from './products/updateProductPollScore';
import listUserPollProduct from './users/listUserPollProduct';
import listuserReview from './users/listUserReview';
import buyProducts from './payment/buyProduct';
import transactionHistory from './payment/transactionHistory';
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
                     listPostReview ,
                     reviewContent ,
                     commentReview ,
                     listReviewComment ,
                     addPollProducts,
                     pollProduct ,
                     listPollProduct ,
                     updateProductPollScore,
                     listUserPollProduct,
                     listuserReview,
                     buyProducts ,
                     transactionHistory ,);
