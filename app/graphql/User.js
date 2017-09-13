import {
    GraphQLSchema,
    GraphQLObjectType ,
    GraphQLString,
    GraphQLBoolean
} from 'graphql';

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
    })
};
