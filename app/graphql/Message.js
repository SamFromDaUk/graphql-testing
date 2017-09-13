import {
    GraphQLObjectType,
    GraphQLString,
    GraphQLInt
} from 'graphql';

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
    }
};
