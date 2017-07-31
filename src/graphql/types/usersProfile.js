export default `
    type userProfile {
      _id: String 
      profileImage: String 
      fullName: String
      email: String 
      bio: String
      password: String
      creditCardUserName: String
      creditCardNumber: String
      creditCardDate: String
      creditCardYear: String
      creditCardCVC: String
      fullNameAddress: String
      address: String 
      city: String
      province: String
      postalCode: String
      phoneNumber: String
      CommunityRef: [String]
    }
`