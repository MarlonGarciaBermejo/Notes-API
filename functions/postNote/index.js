const AWS = require('aws-sdk');
const { sendResponse } = require('../../responses/index');
const middy = require('@middy/core');
const { nanoid } = require('nanoid');
const { validateToken } = require('../middleware/auth');
const db = new AWS.DynamoDB.DocumentClient();

const postNote = async (event, context) => {
  try {
    const body = JSON.parse(event.body);
    const { title, text } = body;
    const username = event.username 
    const userId = event.id 

    if (!title || !text) {
      return sendResponse(400, {
        success: false,
        message: 'Please provide both title and text for the note.',
      });
    }

    const createdAt = new Date().toISOString();
    const modifiedAt = new Date().toISOString();

    const note = {
      id: nanoid(),
      userId: userId,
      username: username,
      title: title,
      text: text,
      createdAt: createdAt,
      modifiedAt: modifiedAt,
    };

    // Save the note to DynamoDB
    await db.put({
      TableName: 'notes-db',
      Item: note,
    }).promise();

    return sendResponse(200, {
      success: true,
      note: note,
      message: 'Note created successfully.',
    });
  } catch (error) {
    if (error instanceof SyntaxError) {
      return sendResponse(400, {
        success: false,
        message: 'Invalid JSON format in the request body.',
      });
    } else {
      return sendResponse(500, {
        success: false,
        message: 'Unknown error occurred.',
      });
    }
  }
};

const handler = middy(postNote).use(validateToken);

module.exports = { handler };

