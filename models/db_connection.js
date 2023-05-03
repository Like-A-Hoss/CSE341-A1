/* require('dotenv').config();
const MongoClient = require('mongodb').MongoClient;
uri = process.env.DB_CONNECTION;
// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {useNewUrlParser:true, useUnifiedTopology:true  });
async function run() {
  console.log("User: " + process.env.DB_USER + "  " + "Password: " + process.env.DB_PASSWORD);
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    console.log("Sucessfully Connected to MongoDB!");
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
};
run();

async function connect() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    console.log("Sucessfully Connected to MongoDB!");
    // Send a ping to confirm a successful connection
  }
  catch{(err) => {
    console.log(err);
  }
};
    
  
};
module.exports= connect(); */

const mongoClient = require('mongodb').MongoClient;

const mongoDBIP = '192.168.1.71';
const mongoDBPort = 27017;

const mongoURL = 'mongodb://<mongo admin>:<password>@'+`${mongoDBIP}`+':'+`${mongoDBPort}`;

let _db;

const initDb = callback => {
  if (_db) {
    console.log('Db is already initialized!');
    return callback(null, _db);
  }
  mongoClient .connect(mongoURL)
    .then(client => {
      _db = client;
      callback(null, _db);
    })
    .catch(err => {
      callback(err);
    });
};

const getDb = () => {
  if (!_db) {
    throw Error('Db not initialized');
  }
  return _db;
};

module.exports = {
  initDb,
  getDb
};