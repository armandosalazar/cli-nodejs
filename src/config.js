require('dotenv').config();
const process = require('process');

module.exports = {
  MONGO_URI: process.env.MONGO_URI || 'mongodb://localhost:27017/cli-nodejs',
};
