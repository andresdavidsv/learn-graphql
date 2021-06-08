'use strict';

const { graphql, buildSchema } = require('graphql');

// Schema
const schema = buildSchema(`
  type Query{
    hello:String
    saludo:String
  }
  `);

// Configuration Resolvers
const resolvers = {
  hello: () => {
    return 'Hola Mundo';
  },
  saludo: () => {
    return 'Hola a todos';
  },
};

// Excet
graphql(schema, '{saludo}', resolvers).then((data) => {
  console.log(data);
});
