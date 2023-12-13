const Task = require('../models/task.model');
const { connection } = require('mongoose');
const notifier = require('node-notifier');

async function saveTask(task) {
    try {
        const result = await Task.create(task);
        if (result) {
            console.log('\n[*] Task saved successfully');
        }
    } catch (error) {
        console.log(error);
    }
    await connection.close();
}

module.exports = {
    saveTask
};