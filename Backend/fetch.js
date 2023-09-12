const express = require('express');
const { MongoClient } = require('mongodb');
const uri = 'mongodb://localhost:27017';
const router = express.Router();
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
async function fetchData() {
    try {
      const db = client.db('The-continental');
      const collection = db.collection('Images');
  
      const documents = await collection.find({}).toArray();
  
      console.log('Fetched data:');
      console.log(documents);
    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      client.close();
    }



    
  }
  
  fetchData();
  module.exports = router ;