// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateInfo = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
// TODO: Include packages needed for this application

// TODO: Create an array of questions for user input
const questions = [
  {
      type:'input',
      message:'Please enter the title of your application:',
      name:'title',
      validate: (value)=>{if(value){return true}else {return "I need an answer to continue"}},
  },
  {
    type: 'input',
    message: 'Please provide a short description of your application, including the languages used:',
    name: 'Description',
    validate: (value)=>{if(value){return true}else {return "I need an answer to continue"}},
  },
  {
    type: 'input',
    message: 'What are the steps required to install your project?',
    name: 'installation',
    validate: (value)=>{if(value){return true}else {return "I need an answer to continue"}},
  },
  {
    type: 'input',
    message: 'Provide instructions and examples for use:',
    name: 'Usage',
    validate: (value)=>{if(value){return true}else {return "I need an answer to continue"}}
  },
  {
      type:'input',
      message:'Please save your screenshots in an assets/images files in your repository. Now enter the name of your screenshot file:',
      name:'screenshot',
      validate: (value)=>{if(value){return true}else {return "I need an answer to continue"}}
  },
  {
      type: 'input',
      message:'If you have collaborators, please type their GitHub profile names',
      name:'Collaborators',
      validate: (value)=>{if(value){return true}else {return "I need an answer to continue"}},
  },
  {
      type:'list',
      message:'Please choose from the following list of licenses',
      name:'License',
      choices: ['MIT License','Apache License', 'GNU General Public License', 'Boost Software License','Mozilla Public License','Eclipse Public License'],
      validate: (value)=>{if(value){return true}else {return "I need an answer to continue"}},
  },
  {
    type:'input',
    message:'Please provide information on how to contribute:',
    name:'Contribution',
  },
  
  {
      type:'input',
      message:'Please enter your github username:',
      name:'Github',
      validate: (value)=>{if(value){return true}else {return "I need an answer to continue"}},
  },

  {
      type:'input',
      message:'Please enter your email address:',
      name:'email',
      validate: (value)=>{if(value){return true}else {return "I need an answer to continue"}},
  },
];

// TODO: Create a function to initialize app
function init() {
inquirer.prompt(questions)
.then(function(answer){
    console.log(answer)
const ReadMeContent = generateInfo(answer);

fs.writeFile('README.md', ReadMeContent, (err) =>
  err ? console.log(err) : console.log('Successfully created ReadMe file!')
);
})
}

// Function call to initialize app
init();

