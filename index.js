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
        choices: getTechnologyList(constants.technologiesUsed),
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
        default: constants.notApplicable,
      },
      {
        type: 'input',
        name: 'screenshots',
        message: 'Screenshots <Description::ImagePath> (Separate multiple lines with semicolon):',
        default: constants.notApplicable,
      },
      {
        type: 'input',
        name: 'contribution',
        message: 'Contribution:',
        default: constants.defaultContributionMessage,
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

    //Converts the data into readme template text.
    const readmeText = updateDataForREADMETemplate(data);

    //Creates README File.
    generateREADMEFile(readmeText, data.readmeFilePath);
  }

  //Creates README File.
  function generateREADMEFile(readmeText, readmeFilePath){

    readmeFilePath = `${readmeFilePath}/${constants.readmeFileName}`;

    //Creates the readme file.
    fs.writeFile(readmeFilePath, readmeText, (err) =>
      err ? console.error(err) : console.log('README file created successfully!')
    );
  }

  //Converts the data into readme template text.
  function updateDataForREADMETemplate(data){

    //Repalces space with %20 for license icon link.
    //Replaces inputs value with new value.
    let license = data.license.replace(constants.spaceChar, constants.linkSpace);
    data.license = license;

    //Gets the list of used technologies as a string.
    //Replaces inputs value with new value.
    let technologiesUsed = getUsedTechnologyList(data);
    if(technologiesUsed === null) return;
    data.technologiesUsed = technologiesUsed;

    //Replaces semicolon for all newlines with new line character and '-' to add bullet point in README file.
    //Also adds new line character and '-' to add bullet point for the first line.
    let usage = `\n${constants.pointChar} ` + data.usage.split(constants.semicolonChar).join(`\n${constants.pointChar} `);
    data.usage = usage;

    //Repalces semicolon with new line character for installation commands.
    let installation = data.installation.split(constants.semicolonChar).join(`\n`);
    data.installation = installation;

    //Repalces semicolon with new line character for test commands.
    let tests = data.tests.split(constants.semicolonChar).join(`\n`);
    data.tests = tests;

    //If deployment link is not N/A then sets deployment message.
    if(data.deployment !== constants.notApplicable) data.deployment = constants.deploymentMessage + data.deployment;

    //Gets screenshot information.
    if(data.screenshots !== constants.notApplicable){
      let screenshotInfo = getScreenshotInformation(data.screenshots);
      data.screenshots = screenshotInfo;
    }

    //Sets url for GitHub using user name.
    data.gitHubUserName = `[${data.gitHubUserName}](${constants.githubLink}/${data.gitHubUserName})`;

    //Create README File text.
    return readmeTemplace.generateREADME(data);
  }

  //Gets screenshot information.
  function getScreenshotInformation(screenshots){

    let screenshotInfo = '';

    //Gets the array of each screenshot information.
    let screenshotArray = screenshots.split(constants.semicolonChar);

    for (let i = 0; i < screenshotArray.length; i++){

      let screenshot = screenshotArray[i];

      //Gets the array where first element is description and second is image path.
      let screenshotElements =  screenshot.split(constants.doubleColonChar);

      //Removes less than character from description.
      let description = screenshotElements[0].replace(constants.lessThanChar, '');

      //Removes greater than character from image path.
      let imagePath = screenshotElements[1].replace(constants.greaterThanChar, '');

      //Gets relative path using assets folder name.
      imagePath = imagePath.substring(imagePath.indexOf(constants.assetFolerName));

      //Gets the image file name from relative image path.
      let imageFileName = imagePath.substring(imagePath.lastIndexOf('\\') + 1);
      imageFileName = imageFileName.substring(0, imageFileName.indexOf('.'));

      //Adds description, image file name and image file path to create the sceenshot information.
      if(i === screenshotArray.length -1){
        screenshotInfo += `${description}\n\n![${imageFileName}](${imagePath})`;
      } else {
        screenshotInfo += `${description}\n\n![${imageFileName}](${imagePath})\n\n`;
      }
    };

    return screenshotInfo;
  }

  //Gets the list of used technologies as a string.
  function getUsedTechnologyList(data){

    let technologiesUsed = '';

    //Loops through selected technologies.
    for (let i = 0; i < data.technologiesUsed.length; i++) {

        //Gets the technology.
        const technology = data.technologiesUsed[i];

        //Gets the link of technology icon.
        let link = getTechnologyIconLink(technology);
        if(link === null) return null;

        //Adds the technologies as a string with a new line character.
        //Does not adds the new line character for last value.
        if(i === data.technologiesUsed.length -1){
            technologiesUsed += `![${technology}](${link})`;
        } else {
            technologiesUsed += `![${technology}](${link})\n`;
        }
    };

    return technologiesUsed;
  }

  //Gets the link of technology icon.
 function getTechnologyIconLink(techSelected){

    //Loop through all technology list to find the icon link of selected technology.
    for (let i = 0; i < constants.technologiesUsed.length; i++) {

        const technology = constants.technologiesUsed[i];

        if(techSelected === technology.heading) return technology.link;
    };

    //Returns null if fails to find the selected technology in all technology list.
    return null;
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
  function getTechnologyList(technologiesUsed){
    let techList = [];

    technologiesUsed.forEach(technology => {
        techList.push(technology.heading);
    });

    return techList;
  }