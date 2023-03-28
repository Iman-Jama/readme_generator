// TODO: Create a function that returns a license badge based on which license is passed in

const index = require("../index");
const fs = require ("fs");
const inquirer = require("inquirer");

// If there is no license, return an empty string
function renderLicenseBadge(license) {
    if (license == "MIT License") {
      return `[MIT license]((https://img.shields.io/bower/l/css)`;
    }else if (license=="Apache License"){
      return `[Apache License](https://img.shields.io/badge/Apache-License-blue)`;
    }else if (license =="GNU General Public License") {
      return `[GNU General Public License](https://img.shields.io/badge/GNU-License-lightgrey)`;
    }else if (license=="Boost Software License"){
      return `[Boost Software License](https://img.shields.io/badge/Boost%20Software-License-orange)`;

    }else if (license=="Mozilla Public License"){
      return `[Mozilla Public License](https://img.shields.io/badge/Mozilla%20Public-License-red)`
    }else if (license=="Eclipse Public License") {
      return `[Eclipse Public License](https://img.shields.io/badge/Eclipse%20Public-License-pink)`;
    }else{
      return "";
    }
    
  };
  

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  let licenseLink = " ";
  if (license == "MIT License"){
    licenseLink ="https://www.mit.edu/~amini/LICENSE.md";
  }else if (license=="Apache License"){
    licenseLink = "https://www.apache.org/licenses/LICENSE-2.0";
  }else if (license =="GNU General Public License"){
    licenseLink = "https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html";
  } else if (license =="Boost Software License"){
    licenseLink = "https://www.boost.org/users/license.html";
  }else if (license=="Mozilla Public License"){
    licenseLink = "mozilla.org/en-US/MPL/";
  } else if (license == "Eclipse Public License") {
    licenseLink = "https://www.eclipse.org/legal/epl-2.0/"
  }else{
    licenseLink = " ";
  }
  return licenseLink;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  let licenseSection = "";
  

}

// TODO: Create a function to generate markdown for README
function generateMarkdown(answer) {
  return `# ${answer.title}
  ${renderLicenseBadge(answer.license)}

  ## Description:
  ${answer.Description}
  
  
  ## Table of Contents:
  
  - [Installation](#installation)
  - [Usage](#usage)
  - [Credits](#credits)
  - [License](#license)
  
  ## Installation
  ${answer.installation}
  
  
  ## Usage
  ${answer.Usage}
  
      
      ![alt text](assets/images/${answer.screenshot}.png)
      
  
  ## Credits
  
  The following have collaborated with me on my project:
  - [${answer.Collaborators}](www.github.com/${answer.Collaborators})
  
  
  ## License
  ${renderLicenseLink(answer.license)}
  
  ## How to Contribute
  
  ## Contact me:
  My github is: [github/${answer.Github}](https://github.com/${answer.Github})
  My email is : ${answer.email}`;


};

module.exports = generateMarkdown;
