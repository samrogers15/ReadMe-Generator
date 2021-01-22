// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const path = require ('path');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'name',
        message: 'What is your name friend?',
        validate: (input) => !!input.length
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email address?',
    },
    {
        type: 'input',
        name: 'projectName',
        message: 'What is the name of your project?',
    },
    {
        type: 'input',
        name: 'projectDescription',
        message: 'Give a brief description of your project.',
    },
    {
        type: 'input',
        name: 'repo',
        message: 'What is the name of your repository?',
    },
    {
        type: 'input',
        name: 'installInstructions',
        message: 'Please enter the installation instructions.',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Please enter in the necessary usage information.',
    },
    {
        type: 'input',
        name: 'testInstructions',
        message: 'Please enter the test instructions.',
    },
    {
        type: 'input',
        name: 'contribution',
        message: 'Please enter any contribution guidelines.',
    },
    {
        type: 'list',
        name: 'license',
        message: 'Please select a license for this project from the provided choices:',
        choices: ['MIT', 'Mozilla'],
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, 'utf8', (err) => console.log('Error in write file: ', err));
};

// TODO: Create a function to initialize app
async function init() {
    const answers = await inquirer.prompt(questions);
    const markDown = generateMarkdown(answers);
    console.log('generated MarkDown: ', markDown);
    writeToFile(answers.projectName + '_ReadMe.md', markDown);
};

// Function call to initialize app
init();
