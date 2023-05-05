const { response } = require('express');
const client = require('../models/db_connection');

//const getData  = client.getDb().db().collection('contacts');


const getData = async (req, res)=>
{client.getDb().db().collection('contacts').find({}).toArray().then((data) => {
  res.setHeader('Content-Type', 'application/json');
  res.status(200).json(data);
});
};
module.exports={getData};