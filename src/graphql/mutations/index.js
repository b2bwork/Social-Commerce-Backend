export default `
    type Mutation{
        updateUserProfile( _id: String! ,
                           fullName: String ,
                           email: String ,
                           bio: String ,
                           creditCardUserName: String,
                           creditCardNumber: String ,
                           creditCardDate: String ,
                           creditCardCVC: String ): userProfile
        
        updateUserAddress( userID: String! ,
                           fullNameAddress: String ,
                           address: String ,
                           city: String ,
                           province: String ,
                           postalCode: String ,
                           phoneNumber: String): userAddress

        updateCommunityRef( userID: String! ,
                            CommunityRef: [String]): userProfile
        
        updataFinace( _id: String! ,
                      creditCardUserName: String! ,
                      creditCardNumber: String! ,
                      creditCardDate: String! ,
                      creditCardCVC: String! ,
                      creditCardYear: String!  ): userProfile

        buyProduct( userID: String! ,
                    productID: String ,
                    quantity: Int ): userBuyProduct

        userPostReview( userID: String! ,
                        userName: String! ,
                        userImage: String! , 
                        title: String! , 
                        category: String! ,
                        content: String ): reviews
                        
        commentReview(  reviewID: String! ,
                        userID: String! ,
                        userName: String ,
                        userImage: String! ,
                        comment: String! ):reviewComments

        addPollProducts( userID: String! , 
                         userName: String! ,
                         products: productsDetail): pollProduct
        updateProductPollScore( _id: String! ,
                                userID: String! ,
                                productName: String!): pollProduct
    }
`