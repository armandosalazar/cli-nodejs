const { connect } = require('mongoose');
const process = require('process');
const { MONGO_URI } = require('./config');

module.exports = async () => {
  try {
    await connect(MONGO_URI);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};
