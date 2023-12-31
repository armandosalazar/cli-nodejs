const { program } = require('commander');
const inquirer = require('inquirer');
const {
  saveTask,
  updateTask,
  deleteTask,
  findTask,
  listTasks,
} = require('./controllers/task.controller');

program
  .name('cli-nodejs')
  .description('A command line tool for managing task')
  .version('0.0.1');

program
  .command('task')
  .alias('t')
  .description('Manage tasks')
  .option('-s, --save', 'Save task')
  .option('-u, --update', 'Update a task')
  .option('-d, --delete', 'Delete a task')
  .option('-l, --list', 'List all tasks')
  .option('-f, --find', 'Find a task')
  .action(async (options) => {
    if (Object.keys(options).length == 0) program.help();
    try {
      if (options.save) {
        const answers = await inquirer.prompt([
          {
            type: 'input',
            name: 'title',
            message: 'Enter task title:',
          },
          {
            type: 'input',
            name: 'description',
            message: 'Enter task description:',
          },
        ]);

        saveTask(answers);
      }
      if (options.update) {
        const answers = await inquirer.prompt([
          {
            type: 'input',
            name: '_id',
            message: 'Enter task id:',
          },
          {
            type: 'input',
            name: 'title',
            message: 'Enter task title:',
          },
          {
            type: 'input',
            name: 'description',
            message: 'Enter task description:',
          },
        ]);

        await updateTask(answers);
      }
      if (options.delete) {
        const answers = await inquirer.prompt([
          {
            type: 'input',
            name: '_id',
            message: 'Enter task id:',
          },
        ]);

        await deleteTask(answers._id);
      }
      if (options.find) {
        const answers = await inquirer.prompt([
          {
            type: 'input',
            name: 'task',
            message: 'Enter task:',
          },
        ]);

        await findTask(answers.task);
      }
      if (options.list) {
        await listTasks();
      }
    } catch (error) {
      console.log(error);
    }
  });

program
  .command('tasks')
  .description('List all tasks')
  .action(async () => {
    await listTasks();
  });

program.parse();
