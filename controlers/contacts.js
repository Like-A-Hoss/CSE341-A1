const db_client = require('../models/db_connection');
const url = require('url');
const querystring = require('querystring');

//const getData  = client.getDb().db().collection('contacts');


const getData = async (req, res)=>
    {const result = await db_client.getDb().db().collection('contacts').find();
    result.toArray().then((data) => {
  res.setHeader('Content-Type', 'application/json');
  res.status(200).json(data);
});
};

const getSearch = async (req, res)=>
{
  const query = url.parse(req.url).query;
  console.log(query);
  const searchTerm = querystring.parse(query).firstName;
  console.log(searchTerm);
  const result = await db_client.getDb().db().collection('contacts').find({firstName: searchTerm});
  result.toArray().then((data) => {
  res.setHeader('Content-Type', 'application/json');
  res.status(200).json(data);
});
};

module.exports = {getData, getSearch};