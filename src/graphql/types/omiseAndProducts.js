export default `
    type omise{
        userID: String
        Products: forBuy
        quantity: Int
        tokenID: String
        created: Boolean
        createdTime: String
    }

    type forBuy{
        productID : String
        productNames: String
        quantitys: Int
        productPrices: Int
        price: Int
    }
`