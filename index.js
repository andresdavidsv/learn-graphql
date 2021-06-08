'use strict';

const { graphql, buildSchema } = require('graphql');

// Schema
const schema = buildSchema(`
  type Query{
    hello:String
  }
  `);

// Configuration Resolvers
const resolvers = {
  hello: () => {
    return 'Hola Mundo';
  },
};

// Excet
graphql(schema, '{hello}', resolvers).then((data) => {
  console.log(data);
});
