import {
    GraphQLObjectType,
    GraphQLString,
    GraphQLBoolean,
    GraphQLInt,
    GraphQLNonNull
} from 'graphql';

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
    }
};
