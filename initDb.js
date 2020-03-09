console.log('===Adding beers to collection===');
var MongoClient = require('mongodb').MongoClient;
var collectionName = 'beers';
const fs = require('fs');
const jsonData = require('beers/beers.json');

let client;
try {
client = await MongoClient.connect(url);
const db = client.db(dbName);
await  db.collection(collectionName).drop();
const collection = db.collection(collectionName);
let jsonBeers = JSON.parse(jsonData);

jsonBeers.forEach(beer => {
	console.log('=> Adding ' + beer.name);
	await collection.insertOne(beer);
});
} catch(err) {
console.log(err.stack);
}
client.close();