const bcrypt = require('bcryptjs');
const AWS = require('aws-sdk');
const db = new AWS.DynamoDB.DocumentClient();   
const jwt = require('jsonwebtoken');
const sendResponse = require('../../responses');

async function getuser(username) {

    try {

    
    const user = await db.get({
        TableName: 'accounts',
        Key: {
            username: username
        }
    }).promise();

    if (user?.Item)
    return user.Item;
    else
    return false

    } catch (error) {
        console.log(error);
        return false;
    }
}

async function login(username, password) {
const user = await getUser(username);

if (!user) return { success: false, message: 'Incorrect username or password'};

const validPassword = await bcrypt.compare(password, user.password);

if(!validPassword) return { success: false, message: 'Incorrect username or password'};

const token = jwt.sign({ username: user.username, userId: user.userId }, "aabbcc", { expiresIn: 3600 });

return { success: true, token: token };

}

exports.handler = async (event, context) => {

const { username, password } = JSON.parse(event.body); 

const result = await login(username, password);

if (result.success)
    return sendResponse(200, result);
    else 
        return sendResponse(400, result);


}