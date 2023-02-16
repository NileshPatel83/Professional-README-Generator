//Contents to generate README file using parameters provided.
const generateREADME = ({title, license, technologiesUsed, description, usage, installation, tests, deployment, screenshots, contribution, gitHubUserName, userEmail}) =>
`
# ${title}

![${license} License](https://img.shields.io/badge/license-${license}-blue.svg)

${technologiesUsed}

## Description
${description}

## Table of Contents
* [Usage](#usage)
* [Installation](#installation)
* [Tests](#tests)
* [Deployment](#deployment)
* [Screenshots](#screenshots)
* [License](#license)
* [Contribution](#contribution)
* [Questions](#questions)

## Usage
${usage}

## Installation
To install necessary dependencies, run the following command:
\`\`\`
${installation}
\`\`\`

## Tests
To run tests, run the following command:
\`\`\`
${tests}
\`\`\`

## Deployment
${deployment}

## Screenshots
${screenshots}

## License
The project is licensed under: ${license}.

## Contribution
${contribution}

## Questions
If you have any questions about the repository, open an issue or contact me directly at ${userEmail}. You can find more of my work at ${gitHubUserName}.
`;

//Exports this constant to be used in index.js file.
module.exports = {generateREADME};