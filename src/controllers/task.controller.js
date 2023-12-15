const Task = require('../models/task.model');
const { connection } = require('mongoose');

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

async function listTasks() {
  try {
    const tasks = await Task.find().lean();
    console.table(tasks.map(task => ({
      id: task._id.toString(),
      title: task.title,
      description: task.description
    })));
  } catch (error) {
    console.log(error);
  }
  await connection.close();
}

async function deleteTask(_id) {
  try {
    const result = await Task.findByIdAndDelete(_id.id);
    if (result) {
      console.log('\n[*] Task deleted successfully');
    }
  } catch (error) {
    console.log(error);
  }

  await connection.close();
}

module.exports = {
  saveTask,
  listTasks,
  deleteTask
};