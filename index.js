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

${response.license}

## Questions

If you have any questions, please email me at: ${response.email}
Check out other projects of mine on my GitHub profile! @${response.github}`
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
        {
            type: 'input',
            name: 'email',
            message: 'Please enter an email that people can contact you at with any questions',
        },
        {
            type: 'input',
            name: 'github',
            message: 'Please enter your github username',
        },
    ])
    .then((response) => {
        const readmeContent = writeReadme(response)
        console.log(readmeContent);
        fs.writeFile('README.md', readmeContent, (err) =>
        err ? console.error(err) : console.log('Success!'));
    })

