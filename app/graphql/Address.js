import {
  GraphQLObjectType,
  GraphQLString,
  GraphQLBoolean,
  GraphQLInt
} from 'graphql';

import request from '../components/request';

export default {
  schema: new GraphQLObjectType({
    name: 'Address',
    fields: {
      id: {
        type: GraphQLString
      },
      current: {
        type: GraphQLBoolean
      },
      postcode: {
        type: GraphQLString
      },
      street_number: {
        type: GraphQLInt
      }
    }
  }),
  args: {
    id: {
      type: GraphQLString
    },
    current: {
      type: GraphQLBoolean
    }
  },
  resolve: async (parent, params) => {
    const result = await request('address', params);

    return result[0];
  },
  resolveMany: async () => {
    return request('address');
  }
};
