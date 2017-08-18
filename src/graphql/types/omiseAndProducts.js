export default `
    type omise{
        userID: String
        Products: forBuy
        quantity: Int
        tokenID: String
        created: Boolean
        createdTime: String
        productID : String
        productName: String
        productImage: String
        quantity: Int
        productPrice: Int
        price: Int
    }

    type forBuy{
        productID : String
        productNames: String
        quantitys: Int
        productPrices: Int
        price: Int
    }
`