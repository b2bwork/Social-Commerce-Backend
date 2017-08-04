export default `
    type pollProduct{
        _id: String
        userID: String
        userName: String
        products: pollProductDetail
    }

    type pollProductDetail{
        index: [Int]
        productName: [String]
        productImage: [String]
        productScore: [Int]
    }
`