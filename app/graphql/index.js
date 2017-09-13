import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLList
} from 'graphql';

import User from './User';
import Address from './Address';
import Message from './Message';

const Root = new GraphQLObjectType({
  name: 'RootType',
  fields: {
    user: {
      type: User.schema,
      resolve: User.resolve
    },
    addresses: {
      type: new GraphQLList(Address.schema),
      resolve: Address.resolveMany
    },
    address: {
      type: Address.schema,
      args: Address.args,
      resolve: Address.resolve
    },
    messages: {
      type: new GraphQLList(Message.schema),
      args: Message.args,
      resolve: Message.resolve
    }
  }
});

export default new GraphQLSchema({
  query: Root
});
