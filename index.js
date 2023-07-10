// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
// TODO: Create an array of questions for user input
// const questions = [];
const writeReadme = (response) => {
return `# ${response.title}

## Description
    
${response.description}
    
## Installation
    
${response.installation}
    
## Usage
    
${response.usage}
    
## Credits
    
${response.contributors}
    
## License

${response.license}`
}

inquirer
    .prompt([
        {
            type: 'input',
            name: 'title',
            message: 'What is the title of your project?',
        },
        {
            type: 'input',
            name: 'description',
            message: 'Please enter a description of your project',
        },
        {
            type: 'input',
            name: 'installation',
            message: 'Please enter installation instructions',
        },
        {
            type: 'input',
            name: 'usage',
            message: 'Please enter how to use the application',
        },
        {
            type: 'input',
            name: 'contributors',
            message: 'Please credit any contributors to the application',
        },
        {
            type: 'input',
            name: 'license',
            message: 'Please enter any licenses',
        },
    ])
    .then((response) => {
        const readmeContent = writeReadme(response)
        console.log(readmeContent);
        fs.writeFile('README.md', readmeContent, (err) =>
        err ? console.error(err) : console.log('Success!'));
    })

// TODO: Create a function to write README file

// TODO: Create a function to initialize app
//function init() {}

// Function call to initialize app
//init();
