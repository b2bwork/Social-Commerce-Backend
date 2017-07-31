export default `
    type Query{
        userProfile(UserID: String!): userProfile
        userAddress(UserID: String!): userProfile
        userFinace(UserID: String!): userProfile
        listproducts(typeId: String!): [products]
        liscategory: [category]
        productContent(_id: String!): products
    }
`