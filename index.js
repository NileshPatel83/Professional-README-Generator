//Variable to access constants from constants module.
const constants = require('./constants.js');

//Variable to access generateREADME method from readme-template module.
const readmeTemplace = require('./readme-template.js');

//Variable to access inquirer module methods.
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
        choices: getTechnologiesUsedList(constants.madeWith),
    },
    {
      type: 'input',
      name: 'usage',
      message: 'Project Usage (Separate multiple lines with semicolon):',
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Installation Dependencies (Separate multiple lines with semicolon):',
        default: constants.notApplicable,
      },
      {
        type: 'input',
        name: 'tests',
        message: 'Tests (Separate multiple lines with semicolon):',
        default: constants.notApplicable,
      },
      {
        type: 'input',
        name: 'deployment',
        message: 'Deployment URL:',
      },
      {
        type: 'input',
        name: 'screenshots',
        message: 'Screenshots <Description-ImagePath> (Separate multiple lines with semicolon):',
      },
      {
        type: 'input',
        name: 'contribution',
        message: 'Contribution:',
      },
      {
        type: 'input',
        name: 'readmeFilePath',
        message: 'Location to save README file:',
      },
  ])
  .then((response) => CreateREADMEFile(response));

  //Function to generate README file.
  function CreateREADMEFile(data){
    console.log(data);

    //Validate the data.

    //Create README File.
  }

  function getTechnologiesUsedList(madeWith){
    let techList = [];

    madeWith.forEach(technology => {
        techList.push(technology.heading);
    });

    return techList;
  }