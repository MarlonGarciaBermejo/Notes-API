const {sendResponse} = require('../../responses/index')
const AWS = require('aws-sdk');
const db = new AWS.DynamoDB.DocumentClient();
const middy = require('@middy/core');
const { validateToken } = require('../middleware/auth');


const deleteNote = async(event,context)=>{
   
    if(event?.error && event?.error === '401')
    return sendResponse(401, {success: false, message: 'invalid token'});




        const requestBody = JSON.parse(event.body);
        const {id} = requestBody


        if(!id){
            return sendResponse(400, {success:false, message:"Invalid data - need id!"})
        }

        try {

        const {Items} = await db.scan({
            TableName: 'notes-db'
        }).promise()

        const noteToDelete = Items.find((note) => note.id === id);

        if (!noteToDelete) {
            return sendResponse(404, { success: false, message: "Cannot be found" });
        }

        if(!noteToDelete.isActive){
            return sendResponse(404, { success: false, message: "Note is deleted" });
        }

        if (event.username != noteToDelete.username){
            return sendResponse(404, { success: false, 
                message: "Cannot delete note" });
  

        }
        const date = new Date().toISOString();

        const modifiedAt = `${date}`


        await db.update({
            TableName: 'notes-db',
            Key: { id: noteToDelete.id },
            ReturnValues: 'ALL_NEW',
            UpdateExpression: "SET #isActive = :isActive, #modifiedAt = :modifiedAt",

            ExpressionAttributeValues: {
                ":isActive": false,
                ":modifiedAt": modifiedAt
            },
            ExpressionAttributeNames: {
                "#isActive": "isActive",
                "#modifiedAt": "modifiedAt"
            }
        }).promise();

        await db.delete({
            TableName: 'notes-db',
            Key:    { id: noteToDelete.id}
        }).promise();


        return sendResponse(200, {message: "Note deleted, id: " + noteToDelete.id })
    } catch(error){

        return sendResponse(500, {success: false, message: "could not delete"})

    }
}


const handler = middy(deleteNote)
.use(validateToken)

module.exports = {handler};