// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// TODO: Create an array of questions for user input


// TODO: Create a function to write README file
function writeToFile(fileName, data) {}
const generateReadMe = ({ title, Description, installation, Usage, screenshot, Collaborators, License, Github, email }) =>
`# ${title}:

## Description:
${Description}


## Table of Contents:

- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)

## Installation
${installation}


## Usage
${Usage}

    
    ![alt text](assets/images/${screenshot}.png)
    

## Credits

The following have collaborated with me on my project:
- [${Collaborators}](www.github.com/${Collaborators})


## License
${License}


## How to Contribute



## Contact me:
My github is: ${Github}
My email is : ${email}`;

    inquirer
      .prompt([
        {
            type:'input',
            message:'Please enter the title of your application',
            name:'title',
        },
        {
          type: 'input',
          message: 'Please provide a short description explaining the what, why and how of your application',
          name: 'Description',
        },
        {
          type: 'input',
          message: 'What are the steps required to install your project?',
          name: 'installation',
        },
        {
          type: 'input',
          message: 'Provide instructions and examples for use',
          name: 'Usage',
        },
        {
            type:'input',
            message:'Please save your screenshots in an assets/images files in your repository. Now enter the name of your screenshot file.',
            name:'screenshot',
        },
        {
            type: 'input',
            message:'List your collaborators, if any, with links to their GitHub profiles.',
            name:'Collaborators',
        },
        {
            type:'input',
            message:'Please choose from the following list of licenses',
            name:'License',
        },
        {
            type:'input',
            message:'Please enter your github username',
            name:'Github',
        },
        {
            type:'input',
            message:'Please enter your email address',
            name:'email',
        },
      ])

.then((answers) =>{
    const ReadMeContent = generateReadMe(answers);

    fs.writeFile('README.md', ReadMeContent, (err) =>
      err ? console.log(err) : console.log('Successfully created ReadMe file!')
    );
  });


