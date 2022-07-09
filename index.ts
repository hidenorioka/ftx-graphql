import express from 'express'
import { graphqlHTTP } from 'express-graphql'
import schema from './schema';
import resolvers from './resolvers';

const app = express();

app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    rootValue: resolvers,
    graphiql: true
  })
);

const port = process.env.PORT || 4200;

app.listen(port);

console.log(`🚀 Server ready at http://localhost:4200/graphql`);