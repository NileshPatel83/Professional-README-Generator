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
        name: 'technologiesUsed',
        message: 'Technologies Used:',
        choices: getTechnologiesUsedList(constants.technologiesUsed),
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

    //Validate the user input data.
    //Displays the list of keys which values are not assigned and exits the function.
    let failedFields = validateInputData(data);
    if(failedFields.length > 0){

        console.error('\nInformation for following field(s) not provided:');

        //Loops through key list that has no value assigned.
        failedFields.forEach(value => console.error(`${value}`));
        
        console.error('All fields MUST have a value.');
        return;
    }

    //Create README File.
  }

  //Validate the user input data.
  //Returns the list of keys which value is not assigned.
  function validateInputData(data){

    let failedFields = [];

    //Loops through all user inputs.
    for (const [key, value] of Object.entries(data)) {

        //Gets the key with upper case letter.
        const property = key.charAt(0).toUpperCase() + key.substring(1);

        //If the data type is string, checks whether it is defined and the value is not empty.
        //If fails, adds the property name to list.
        if(typeof(value) === 'string'){
            if(value === 'undefined' || value.trim() === '') failedFields.push(property);

        //If the data type is not string then it is an array (no other data type is used).
        //In this case, checks the length of the array to make sure at least one value is assigned.
        } else {
            if(value.length === 0) failedFields.push(property);
        }
    }

    //Returns the list of keys which value is not assigned.
    return failedFields;
  }

  //Gets the list of technology headings/names from the array in constant module.
  function getTechnologiesUsedList(madeWith){
    let techList = [];

    madeWith.forEach(technology => {
        techList.push(technology.heading);
    });

    return techList;
  }