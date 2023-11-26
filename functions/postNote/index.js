const AWS = require('aws-sdk');
const { sendResponse } = require('../../responses'); 
const db = new AWS.DynamoDB.DocumentClient();
const { nanoid } = require('nanoid');
const middy = require('@middy/core');
const { validateToken } = require('../middleware/auth');


const postNote = async(event,context)=> {   

    if(event?.error && event?.error === '401')
    return sendResponse(401, {success: false, message: 'invalid token'});
    const note = JSON.parse(event.body);


    if(event?.error && event?.error === '401')
    return sendResponse(401, {success: false, message: 'invalid token'});


    if (!note.title || !note.text){
        return sendResponse(400,{success: false, 
            message: 'Please provide title and a text'});
    }

    if (Object.keys(note).length > 2) {
        return sendResponse(400, {
            success: false,
            message: 'Title and text only!'
        });
    }

    const date = new Date().toISOString();
    note.id = nanoid();
    note.createdAt = `${date}`
    note.modifiedAt = ""
    note.username = event.username
    note.isActive = true

    try{

    await db.put({
        TableName: 'notes-db',
        Item: note
    }).promise()

    return sendResponse(200, {success: true, note})
} catch (error){
    return sendResponse(400, {success: false, message: "Couldn't save note"})
}
    
    
    }

const handler = middy(postNote)
.use(validateToken)

module.exports = {handler};