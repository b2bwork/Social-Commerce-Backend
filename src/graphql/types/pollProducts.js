export default `
    type pollProduct{
        _id: String
        userID: String
        userName: String
        products: pollProductDetail
    }

    type pollProductDetail{
        productName: [String]
        productImage: [String]
        productScore: [Int]
    }
`