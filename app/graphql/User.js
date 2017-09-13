import {
  GraphQLObjectType,
  GraphQLString
} from 'graphql';

import request from '../components/request';

export default {
  schema: new GraphQLObjectType({
    name: 'User',
    fields: {
      id: {
        type: GraphQLString
      },
      first_name: {
        type: GraphQLString
      },
      last_name: {
        type: GraphQLString
      }
    }
  }),
  resolve: async () => {
    return request('user');
  }
};
