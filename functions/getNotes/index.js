import sendResponse from '../../responses';
const AWS = require('aws-sdk');
const db = new AWS.DynamoDB.DocumentClient();

export async function handler(event, context) {

    const{Items} = await db.scan({
       TableName: 'notes-db'
     }).promise();
   
   
   
   return sendResponse(200, {success : true, notes: Items});
   
   }