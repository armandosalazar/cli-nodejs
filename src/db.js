const { connect } = require('mongoose');

module.exports = async () => {
    try {
        await connect('mongodb://192.168.128.128:27017/cli-nodejs');
        console.log('Database connected successfully');
    } catch (error) {
        console.log(error);
    }
}
