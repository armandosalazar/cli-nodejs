const { program } = require('commander');
const inquirer = require('inquirer');
const notifier = require('node-notifier');

program
    .name('cli-nodejs')
    .description('A command line tool for managing task')
    .version('0.0.1');

program
    .command('task')
    .description('Manage tasks')
    .option('-s, --save', 'Save task')
    .option('-l, --list', 'List all tasks')
    .action((options) => {
        if (Object.keys(options).length == 0) {
            console.log('Use --help to see available options');
        } else {
            if (options.save) {
                inquirer
                    .prompt([
                        {
                            type: 'input',
                            name: 'task',
                            message: 'Enter task:',
                        },
                    ])
                    .then((answers) => {
                        console.log(answers);
                    })
                    .catch((error) => {
                        console.log(error);
                    });
            }
        }
    });

program
    .command('tasks')
    .description('List all tasks')
    .action(() => {
        console.log('Listing all tasks');
    });

program.parse();

module.exports = program;