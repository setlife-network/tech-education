var apiModules = require('./modules'); // not done jet
var models = require('./models');
var types = require('./types');

var g = types.graphql;

var apiSchema = new g.GraphQLSchema(
    {
        mutation: new g.GraphQLObjectType({
            name: 'RootMutationType',

            description: 'Endpoints with POST, PUT, and DELETE functionality go here',

            fields: {
                createSetblock: {
                    args: {
                        teamMemberId: {
                            description: 'The ID of the TeamMember committing to work this setblock',
                            type: new g.GraphQLNonNull(g.GraphQLString)
                        },
                        date: {
                            description: 'The date this Setblock will be worked on',
                            type: new g.GraphQLNonNull(g.GraphQLString)
                        },
                        blockTime: {
                            description: 'See SetblockType description for allowed values',
                            type: new g.GraphQLNonNull(g.GraphQLString)
                        },
                        blockFraction: {
                            type: new g.GraphQLNonNull(g.GraphQLFloat)
                        },
                        issueUrl: {
                            type: g.GraphQLString
                        },
                        description: {
                            type: g.GraphQLString
                        }
                    },

                    description: 'Adds a Setblock to TeamMember\'s schedule. Returns the specified TeamMember to allow for direct query to weeklySetblocks. May consider returning the SetblockType with the new ID instead if re-querying Airtable becomes a rate limit concern.',

                    type: types.TeamMemberType,

                    resolve: function (root, args) {
                        return apiModules.schedule.createSetblock(args);
                    }
                },
                deleteSetblock: {
                    args: {
                        setblockId: {
                            description: 'The ID of the Setblock to delete',
                            type: new g.GraphQLNonNull(g.GraphQLString)
                        }
                    },

                    description: 'Safely deletes a Setblock from a TeamMember\'s schedule',

                    type: g.GraphQLString,

                    resolve: function(root, args) {
                        return apiModules.schedule.deleteSetblock(args);
                    }
                },
                processPayment: {
                    args: {
                        amount: {
                            description: 'The amount to charge the card',
                            type: new g.GraphQLNonNull(g.GraphQLLong)
                        },
                        stripeToken: {
                            description: 'A Stripe token generated by a client to charge a credit/debit card',
                            type: new g.GraphQLNonNull(g.GraphQLString)
                        }
                    },

                    description: 'Creates a Stripe customer for the authenticated user and charges the amount specified',

                    type: g.GraphQLString,

                    resolve: function (root, args) {
                        args.req = root.req
                        
                        return apiModules.payments.createAndChargeCustomer(args);
                    }
                },
                updateSetblock: {
                    args: {
                        setblockId: {
                            description: 'The ID of the Setblock to update',
                            type: new g.GraphQLNonNull(g.GraphQLString)
                        },
                        updatedFields: {
                            description: 'This should be an object with any SetblockType properties that are allowed to be updated',
                            type: types.SetblockInputType
                        }
                    },

                    description: 'Updates a Setblock',

                    type: g.GraphQLString,

                    resolve: function (root, args) {
                        return apiModules.schedule.updateSetblock(args);
                    }
                },
            }
        }),
