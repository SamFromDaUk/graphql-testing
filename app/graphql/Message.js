import {
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt
} from 'graphql';

import request from '../components/request';

export default {
  schema: new GraphQLObjectType({
    name: 'Message',
    fields: {
      id: {
        type: GraphQLString
      },
      created: {
        type: GraphQLString
      },
      updated: {
        type: GraphQLString
      },
      message: {
        type: GraphQLString
      },
      to: {
        type: GraphQLString
      }
    }
  }),
  args: {
    last: {
      type: GraphQLInt
    }
  },
  resolve: async (parent, params) => {
    const result = await request('messages');

    if (params.last) {
      return result.slice(0, params.last);
    }

    return result;
  }
};
