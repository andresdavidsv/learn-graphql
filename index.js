'use strict';

require('dotenv').config();

const { makeExecutableSchema } = require('graphql-tools');
const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const { readFileSync } = require('fs');
const { join } = require('path');
const resolvers = require('./lib/resolvers');

const app = express();
const port = process.env.DB_PORT || 4003;

// Schema Definition
const typeDefs = readFileSync(
  join(__dirname, 'lib', 'schema.graphql'),
  'utf-8'
);
const schema = makeExecutableSchema({ typeDefs, resolvers });

// Excet Terminal
// graphql(schema, '{saludo}', resolvers).then((data) => {
//   console.log(data);
// });

app.use(
  '/graphql',
  graphqlHTTP({
    schema: schema,
    rootValue: resolvers,
    graphiql: true,
  })
);

app.listen(port, () => {
  console.log(`Server is listening at http://localhost:${port}/graphql`);
});
