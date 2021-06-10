'use strict';

const { MongoClient } = require('mongodb');

const {
  DB_USER,
  DB_PASSWORD,
  DB_HOST,
  DB_PORT,
  DB_NAME
} = process.env

const mongoUrl =`mongodb+srv://${DB_USER}:${DB_PASSWORD}@${DB_HOST}`

let conecttion

async function connectDb() {
  if (conecttion) return conecttion
  let client
  try {
    client = new MongoClient(mongoUrl,{
      useNewUrlParser: true,
      useUnifiedTopology:true
    })
    conecttion = await client.connect()
  } catch (error) {
    console.error('Cloud not connect to db', mongoUrl, error);
    process.exit(1)
  }
  return conecttion
  }

module.exports = connectDbgit 