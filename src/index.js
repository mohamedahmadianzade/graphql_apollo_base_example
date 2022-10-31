import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import { typeDefs } from './schema.js'
import { resolvers } from './resolvers.js'


const server = new ApolloServer({
    typeDefs,
    resolvers,
});

const { url } = await startStandaloneServer(server, {
    listen: { port: 4000 },
    context: async ({ req, res }) => {
        return {
            accessToken: req.headers.authorization
        }
    }
});
console.log("Apollo server is running at Port 4000");