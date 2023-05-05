const db_client = require('../models/db_connection');

//const getData  = client.getDb().db().collection('contacts');


const getData = async (req, res)=>
    {const result = await db_client.getDb().db().collection('contacts').find();
    result.toArray().then((data) => {
  res.setHeader('Content-Type', 'application/json');
  res.status(200).json(data);
});
};
module.exports={getData};