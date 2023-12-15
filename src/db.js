const { connect } = require('mongoose');

module.exports = async () => {
  try {
    await connect('mongodb://192.168.128.128:27017/cli-nodejs');
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
}
