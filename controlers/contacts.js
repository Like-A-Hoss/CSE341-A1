const db_client = require('../models/db_connection');
const url = require('url');
const querystring = require('querystring');
const bodyParser = require('body-parser');
const express = require('express');
const { ObjectId } = require('mongodb');
const app = express();
const objectId = require('mongodb').ObjectId;
const mongodb = require('mongodb');
const router = express.Router();


// gets all contacts
const getData = async (req, res)=>
    {const result = await db_client.getDb().db().collection('contacts').find(); //this goes into database and pulls everything out
    result.toArray().then((data) => {   //this takes everything and turns it from a JSON to an array
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

const postNew = async (req,res) =>
{
  const raw_contact = url.parse(req.url).query;
  const firstName = querystring.parse(raw_contact).firstName;
  const lastName = querystring.parse(raw_contact).lastName;
  const email = querystring.parse(raw_contact).email;
  const favoriteColor = querystring.parse(raw_contact).favoriteColor;
  const birthday = querystring.parse(raw_contact).birthday;
  const contact = {
    firstName: firstName,
    lastName: lastName,
    email: email,
    favoriteColor: favoriteColor,
    birthday: birthday
  };
  db_client.getDb().db().collection('contacts').insertOne(contact, true)
    res.send({id: result.insertedId});
};

const update = async (res,req) =>{
  
  console.log('new attempt');
  console.log(req);
  console.log('Atempting to read req.body: ' +req.body);
  console.log('Atempting to read req.params: ' +req.params);
  const id = new objectId(req.params.id);
  const contact = {
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    favoriteColor: req.body.favoriteColor,
    birthday: req.body.birthday
  };
  console.log(contact);
  const response = await mongodb
    .getDb()
    .db()
    .collection('contacts')
    .updateOne({ _id: id }, contact);
  console.log(response);
  if (response.modifiedCount > 0) {
    res.status(204).send();
  } else {
    res.status(500).json(response.error || 'Some error occurred while updating the contact.');
  }
  /* const raw_update = url.parse(req.url).query;
  const id = querystring.parse(raw_update).id;
  const firstName = querystring.parse(raw_update).firstName;
  const lastName = querystring.parse(raw_update).lastName;
  const email = querystring.parse(raw_update).email;
  const favoriteColor = querystring.parse(raw_update).favoriteColor;
  const birthday = querystring.parse(raw_update).birthday;
  const update = {
    $set:{
    firstName: firstName,
    lastName: lastName,
    email: email,
    favoriteColor: favoriteColor,
    birthday: birthday
    }
  };
  db_client.getDb().db().collection('contacts').updateOne({_id: ObjectId(id)}, update, function(err, result){
    if (err) throw err;
    console.log('Contact updated in database');
    res.send('Contact updated successfully');
  }
  ); */
}; 
const remove = async (req,res) =>
{
  const contactID = new objectId(req.params.id);
  console.log(contactID);
  const response = await db_client.getDb().db().collection('contacts').deleteOne({ _id: contactID }, true); 
    console.log(response);
    if (response.deletedCount > 0) {
      res.status(204).send;
    }else {
      res.status(500).json(respose.error || 'An unknown error occured while attempting to delete contact.');
    }
};

module.exports = {getData, getSearch, postNew, update, remove};