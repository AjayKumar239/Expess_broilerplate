// const express = require('express')  change  common  js to module js
import express from 'express';   //module js es 6

import { MongoClient } from 'mongodb'

import 'dotenv/config'
const app = express()

// Middleware for parsing JSON requests bodies
 app.use(express.json())




const PORT = process.env.PORT || 3000;
const url = process.env.MONGO_URL 
const client = new MongoClient(url);

//console.log(process.env)

async function ConnectDB( ) {
  try {
    await client.connect();
    console.log('Connected to MongoDB !!! ');
    // const db = client.db(dbName);
    // const collection = db.collection('tasks');
    // const result = await collection.insertOne({ name: 'Test Task', completed: false });
    // console.log('Inserted document:', result.insertedId);
  } catch (error) {
    if (error instanceof MongoServerError) {
      console.log(`Error worth logging: ${error}`); // special case for some reason
    }
    throw error; // still want to crash
    } 
  
  }

  await  ConnectDB();

  


// const dbName = 'Todo';
app.get('/', function (req, res) {
  res.send('Hello World')
})

app.listen(PORT,()=>{
    console.log('Server is running on port  '+ PORT)  //common js console.log
})