//Variable to access constants from constants module.
const constants = require('./constants.js');

//Variable to access generateREADME method from readme-template module.
const readmeTemplace = require('./readme-template.js');

//Variable to access inquirere module methods.
const inquirer = require('inquirer');

//Variable to access file system module methods.
const fs = require('fs');

inquirer
  .prompt([
    {
      type: 'input',
      name: 'gitHubUserName',
      message: 'GitHub Username:',
    },
    {
        type: 'input',
        name: 'userEmail',
        message: 'Email Address:',
    },
    {
        type: 'input',
        name: 'title',
        message: 'Project Title:',
    },
    {
      type: 'input',
      name: 'description',
      message: 'Project Description:',
    },
    {
        type: 'list',
        name: 'license',
        message: 'Project License:',
        choices: constants.githubLicenses,
    },
    {
        type: 'checkbox',
        name: 'madeWith',
        message: 'Technologies Used:',
        choices: constants.madeWith,
    },
    {
      type: 'input',
      name: 'usage',
      message: 'Project Usage:',
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Installation Dependencies:',
        default: constants.notApplicable,
      },
      {
        type: 'input',
        name: 'tests',
        message: 'Tests:',
        default: constants.notApplicable,
      },
      {
        type: 'input',
        name: 'deployment',
        message: 'Deployment:',
      },
      {
        type: 'input',
        name: 'screenshots',
        message: 'Screenshots:',
      },
      {
        type: 'input',
        name: 'contribution',
        message: 'Contribution:',
      },
  ])
  .then((response) => CreateREADMEFile(response));

  //Function to generate README file.
  function CreateREADMEFile(data){
    console.log(data);

    //Validate the data.

    //Create README File.
  }