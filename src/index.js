import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import { typeDefs } from './schema.js'
import { resolvers } from './resolvers.js'
import { ProductDataSource } from './productDataSource.js';


const server = new ApolloServer({
    typeDefs,
    resolvers,
});

const { url } = await startStandaloneServer(server, {
    listen: { port: 4000 },
    // define context object which is shared among all resolvers ( bussiness logic )
    context: async ({ req, res }) => {
        return {
            accessToken: req.headers.authorization,
            dataSources: {
                productDataSource: new ProductDataSource()
            }
        }
    },

});
console.log("Apollo server is running at Port 4000");