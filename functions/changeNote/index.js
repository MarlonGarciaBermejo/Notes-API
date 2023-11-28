const AWS = require('aws-sdk');
const { sendResponse } = require('../../responses');
const { validateToken } = require('../middleware/auth');
const db = new AWS.DynamoDB.DocumentClient();
const middy = require('@middy/core');

const changeNote = async(event, context) => {

    if(event?.error && event?.error === '401')
    return sendResponse(401, {success: false, message: 'invalid token'});

    const requestBody = JSON.parse(event.body);
    const { id, title, text } = requestBody

    try {

        const {Items} = await db.scan({
            TableName: 'notes-db'
        }).promise();
    
        const changeNote = Items.find((notes) => notes.id === id);

        if (!changeNote) {
            return sendResponse(404, { success: false, message: "Note not found with this id" });
        }
        if (event.username != changeNote.username) {
            return sendResponse(404, {
                success: false,
                message: "You are not allowed to change this note"
            });


        }
        const date = new Date().toISOString();
        const modifiedAt = `${date}`


        await db.update({
            TableName: 'notes-db',
            Key : { id: changeNote.id },
            ReturnValues: 'ALL_NEW',
            UpdateExpression: 'set #notetext = :text, #notetitle = :title, modifiedAt = :modifiedAt',
            ExpressionAttributeValues: {
                ':text' : text,
                ':title' : title,
                ':modifiedAt' : modifiedAt,
            },
            ExpressionAttributeNames: {
                '#notetext' : 'text',
                '#notetitle' : 'title',

            }
        }).promise();

        return sendResponse(200, { success: true, message : 'note updatet successfully' });
    } catch (error) {
        return sendResponse(500, { success: false, message : 'could not update note'});
    }

}

const handler = middy(changeNote)
     .use(validateToken)
     

module.exports = { handler };