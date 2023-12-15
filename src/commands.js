const { program } = require('commander');
const inquirer = require('inquirer');
const { saveTask, listTasks, deleteTask } = require('./controllers/task.controller');

program
  .name('cli-nodejs')
  .description('A command line tool for managing task')
  .version('0.0.1');

program
  .command('task')
  .description('Manage tasks')
  .option('-s, --save', 'Save task')
  .option('-l, --list', 'List all tasks')
  .option('-d, --delete', 'Delete a task')
  .action(async (options) => {
    if (Object.keys(options).length == 0)
      program.help();
    try {
      if (options.save) {
        const answers = await inquirer.prompt([
          {
            type: 'input',
            name: 'title',
            message: 'Enter task title:'
          },
          {
            type: 'input',
            name: 'description',
            message: 'Enter task description:'
          }
        ]);

        saveTask(answers);
      }
      if (options.list) {
        await listTasks();
      }
      if (options.delete) {
        const answers = await inquirer.prompt([
          {
            type: 'input',
            name: 'id',
            message: 'Enter task id:'
          }
        ]);

        await deleteTask(answers);

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