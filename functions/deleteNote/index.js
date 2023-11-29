const { sendResponse } = require('../../responses/index');
const AWS = require('aws-sdk');
const db = new AWS.DynamoDB.DocumentClient();
const middy = require('@middy/core');
const { validateToken } = require('../middleware/auth');

const deleteNote = async (event, context) => {
    console.log('Event object:', event);
    if (event?.error && event?.error === '401') {
        return sendResponse(401, { success: false, message: 'invalid token' });
    }

    const requestBody = JSON.parse(event.body);
    const { id, username } = requestBody;

    try {
        const { Item: noteToDelete } = await db.get({
            TableName: 'notes-db',
            Key: { id }
        }).promise();

        if (!noteToDelete) {
            return sendResponse(404, { success: false, message: "Cannot find note with this id" });
        }

        if (username !== noteToDelete.username) {
            return sendResponse(404, { success: false, message: "You do not have permission to delete this note" });
        }

        await db.delete({
            TableName: 'notes-db',
            Key: { id },
            ConditionExpression: 'username = :username',
            ExpressionAttributeValues: {
                ':username': username
            }
        }).promise();

        return sendResponse(200, { message: "The note is deleted id: " + id });
    } catch (error) {
        console.error("Error deleting note", error);
        return sendResponse(500, { success: false, message: "could not delete" });
    }
};

const handler = middy(deleteNote).use(validateToken);

module.exports = { handler };
