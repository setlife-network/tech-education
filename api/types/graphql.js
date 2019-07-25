var GraphQL = require('graphql');
var Kind = require('graphql/language').Kind;

var MAX_INT = 9007199254740991;
var MIN_INT = -9007199254740991;

var GraphQLLong = new GraphQL.GraphQLScalarType({
    name: 'Long',

    serialize: function(value) {
        var num = +value;
        return num === num && num <= MAX_INT && num >= MIN_INT ? num | 0 : null;
    },

    parseValue: function(value) {
        var num = +value;
        return num === num && num <= MAX_INT && num >= MIN_INT ? num | 0 : null;
    },

    parseLiteral: function(ast) {
        if (ast.kind === Kind.INT) {
            var num = parseInt(ast.value, 10);
            if (num <= MAX_INT && num >= MIN_INT) {
                return num;
            }
        }
    }
});

module.exports = {
    GraphQLBoolean: GraphQL.GraphQLBoolean,
    GraphQLError: require('graphql/error').GraphQLError,
    GraphQLFloat: GraphQL.GraphQLFloat,
    GraphQLInputObjectType: GraphQL.GraphQLInputObjectType,
    Kind: Kind,
    GraphQLList: GraphQL.GraphQLList,
    GraphQLLong: GraphQLLong,
    GraphQLNonNull: GraphQL.GraphQLNonNull,
    GraphQLObjectType: GraphQL.GraphQLObjectType,
    GraphQLSchema: GraphQL.GraphQLSchema,
    GraphQLString: GraphQL.GraphQLString
};
