const { nanoid } = require("nanoid");
const sendResponse = require("../../responses");
const bcrypt = require('bcryptjs');
const AWS = require('aws-sdk');
const db = new AWS.DynamoDB.DocumentClient();

async function createAccount(username, hashedPassword, userId, firstname, lastname) {

try {
await db.put({
    TableName: 'accounts',
    Item: {
        userId: userId,
        username: username,
        password: hashedPassword,
        firstname: firstname,
        lastname: lastname
    }
}).promise();
return { success: true, userId: userId};
} catch (error) {
    console.log(error);
    return { success: false, message: 'Could not create account'};

}

}

async function signup(username, password, firstname, lastname) {
   
    const hashedPassword = await bcrypt.hash(password, 10);
    const userId = nanoid();

    const result = await createAccount(username, hashedPassword, userId, firstname, lastname);
    return result;

}

exports.handler = async (event, context) => {

    const { username, password, firstname, lastname } = JSON.parse(event.body);

    const result = await signup(username, password, firstname, lastname);

    if (result.success)
    return sendResponse(200, result);
    else 
        return sendResponse(400, result);

}