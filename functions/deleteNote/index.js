const {sendResponse} = require('../../responses/index')
const AWS = require('aws-sdk');
const db = new AWS.DynamoDB.DocumentClient();
const middy = require('@middy/core');
const { validateToken } = require('../middleware/auth');


const deleteNote = async(event,context)=>{
   


}


const handler = middy(deleteNote)
.use(validateToken)

module.exports = {handler};