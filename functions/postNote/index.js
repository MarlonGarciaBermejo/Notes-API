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

    const { userId, userName } = event.user; 

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
      userName: userName,
      title: title,
      text: text,
      createdAt: createdAt,
      modifiedAt: modifiedAt,
    };

    // Spara anteckningen i DynamoDB
    await db
      .put({
        TableName: 'notes-db',
        Item: note,
      })
      .promise();

    return sendResponse(200, {
      success: true,
      note: note,
    });
  } catch (error) {
    console.error('Error:', error);
    return sendResponse(500, {
      success: false,
      message: 'Internal Server Error. Failed to save the note.',
    });
  }
};

const handler = middy(postNote).use(validateToken);

module.exports = { handler };