import { makeExecutableSchema } from 'graphql-tools';
import {PubSub , SubscriptionManager} from 'graphql-subscriptions';
import GraphQuery from './queries';
import GraphMutation from './mutations/index';
import GraphSubcription from './subcriptions/index';
import userAddressType from './types/usersProfile';
import userProfileType from './types/usersAddress';
import productsType from './types/Products';
import userBuyProductType from './types/userBuyProduct';
import categorysType from './types/categorys';
import userReview from './types/userPostReview';


import Resolvers from './resolvers';

export const pubsub = new PubSub();
const SchemaDef = `
  schema{
    query: Query,
    mutation: Mutation
  }
`
export const schema = makeExecutableSchema({
  typeDefs: [
    userAddressType ,
    userProfileType ,
    userBuyProductType ,
    userReview ,
    categorysType ,
    productsType ,
    GraphMutation ,
    GraphQuery ,
    SchemaDef ,
  ],
  resolvers:Resolvers
})

//export const subcription = SubscriptionManager({schema});
