import {
    GraphQLSchema,
    GraphQLObjectType,
    GraphQLList,
    GraphQLString,
    GraphQLBoolean,
    GraphQLNonNull
} from 'graphql';

import request from '../components/request';
import User from './User.js';
import Address from './Address.js';
import Message from './Message.js';

const Root = new GraphQLObjectType({
    name: 'RootType',
    fields: {
        user: {
            type: User.schema,
            resolve: async () =>  {
                return await request('user');
            }
        },
        addresses: {
            type: new GraphQLList(Address.schema),
            resolve: async (parent) => {
                return await request('address');
            }
        },
        address: {
            type: Address.schema,
            args: Address.args,
            resolve: async (parent, params) =>  {
                const result = await request('address', params);

                return result[0];
            }
        },
        messages: {
            type: new GraphQLList(Message.schema),
            args: Message.args,
            resolve: async (parent, params) =>  {
                const result = await request('messages');

                if (params.last) {
                    return result.slice(0, params.last);
                }

                return result;
            }
        }
    }
});

export default new GraphQLSchema({
    query: Root
});
