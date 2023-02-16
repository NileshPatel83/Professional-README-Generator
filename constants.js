//Readme file name with file extension.
const readmeFileName = 'README.md';

//If project is deployed, this message will be used alogn with the deployed project URL.
const deploymentMessage = 'Deployed webpage:';

//Default contribution message.
const defaultContributionMessage = 'Contact me';

//Not applicable.
const notApplicable = 'N/A'

//Dash character to bullet points.
const pointChar = '-';

//Space character.
const spaceChar = ' ';

//Semicolon
const semicolonChar = ';';

//Colon
//This will be used to separate description and image path in screenshot section.
const doubleColonChar = '::';

//If there is a space in link, it will be replace by following string.
const linkSpace = '%20';

const greaterThanChar = '>';

const lessThanChar = '<';

//Assets folder name will be used to get relative path of screenshot image.
const assetFolerName = 'assets';

const githubLink = 'https://github.com/';

const filePathBackSlash = '\\';

const filePathForwardSlash = '/';

//String array containing GitHub licenses.
const githubLicenses = ['Apache 2.0', 'BSD 3', 'GPL 3.0', 'MIT', 'None'];

//Array containing heading and URL for made with icons.
const technologiesUsed = [
    {
        heading: 'Angular',
        link: 'https://img.shields.io/badge/Angular-DD0031?style=for-the-badge&logo=angular&logoColor=white'
    },
    {
        heading: 'Bootstrap',
        link: 'https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white'
    },
    {
        heading: 'CSS3',
        link: 'https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white'
    },
    {
        heading: 'Express.js',
        link: 'https://img.shields.io/badge/Express.js-404D59?style=for-the-badge'
    },
    {
        heading: 'Git Bash',
        link: 'https://img.shields.io/badge/GIT%20Bash-E44C30?style=for-the-badge&logo=git&logoColor=white'
    },
    {
        heading: 'GitHub',
        link: 'https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white'
    },
    {
        heading: 'HTML5',
        link: 'https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white'
    },
    {
        heading: 'JavaScript',
        link: 'https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E'
    },
    {
        heading: 'Jest',
        link: 'https://img.shields.io/badge/Jest-323330?style=for-the-badge&logo=Jest&logoColor=white'
    },
    {
        heading: 'jQuery',
        link: 'https://img.shields.io/badge/jQuery-0769AD?style=for-the-badge&logo=jquery&logoColor=white'
    },
    {
        heading: 'MongoDB',
        link: 'https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white'
    },
    {
        heading: 'MySQL',
        link: 'https://img.shields.io/badge/MySQL-005C84?style=for-the-badge&logo=mysql&logoColor=white'
    },
    {
        heading: 'Node.js',
        link: 'https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white'
    },  
    {
        heading: 'React',
        link: 'https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB'
    },
    {
        heading: 'Tailwind CSS',
        link: 'https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white'
    },
    {
        heading: 'TypeScript',
        link: 'https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white'
    },
    {
        heading: 'Visual Studio Code',
        link: 'https://img.shields.io/badge/Visual%20Studio%20Code-0078d7.svg?style=for-the-badge&logo=visual-studio-code&logoColor=white'
    },
    {
        heading: 'Vue.js',
        link: 'https://img.shields.io/badge/Vue.js-35495E?style=for-the-badge&logo=vue.js&logoColor=4FC08D'
    },
];

//Exports these constants to be used in index.js file.
module.exports = {
    readmeFileName,
    deploymentMessage,
    defaultContributionMessage, 
    notApplicable, 
    pointChar, 
    spaceChar, 
    semicolonChar, 
    doubleColonChar,
    linkSpace, 
    greaterThanChar, 
    lessThanChar,
    assetFolerName,
    githubLink,
    filePathBackSlash,
    filePathForwardSlash,
    githubLicenses, 
    technologiesUsed
};