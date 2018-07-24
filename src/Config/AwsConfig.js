require('dotenv').config();
const AWS = require('aws-sdk');

const config = {
  region: process.env.REGION,
  endpoint: process.env.ENDPOINT,
  accessKeyId: process.env.ACCESSKEYID,
  secretAccessKey: process.env.SECRETACCESSKEY,
  apiVersion: process.env.APIVERSION,
};

AWS.config.update(config);

const dbDoc = new AWS.DynamoDB.DocumentClient();

module.exports = dbDoc;
