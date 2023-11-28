const { sendResponse } = require('../../responses');
const AWS = require('aws-sdk');
const db = new AWS.DynamoDB.DocumentClient();
const { validateToken } = require('../middleware/auth');
const middy = require('@middy/core');

const getNotes = async (event, context) => {
  try {
    if (event?.error && event?.error === '401') {
      return sendResponse(401, { success: false, message: 'Invalid token' });
    }

    const username = event.username;

    const { Items } = await db.scan({
      TableName: 'notes-db',
      FilterExpression: '#username = :username',
      ExpressionAttributeNames: {
        '#username': 'username',
      },
      ExpressionAttributeValues: {
        ':username': username,
      }
    }).promise();

    return sendResponse(200, { success: true, notes: Items || [] });
  } catch (error) {
    console.error(error); 

    return sendResponse(500, {
      success: false,
      message: 'Internal Server Error. Could not retrieve notes.',
    });
  }
};

const handler = middy(getNotes).use(validateToken);

module.exports = { handler };
