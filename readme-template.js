//Contents to generate README file using parameters provided.
const generateREADME = ({title, license, madeWith, description, usage, installation, tests, deployment, screenshots, contribution, gitHub, email}) =>
`
# ${title}

![${license} License](https://img.shields.io/badge/license-${license}-blue.svg)

${madeWith}

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
The project is licensed under the ${license} license.

## Contribution
${contribution}

## Questions
If you have any questions about the repository, open an issue or contact me directly at ${email}. You can find more of my work at ${gitHub}.
`;

module.exports = {generateREADME};