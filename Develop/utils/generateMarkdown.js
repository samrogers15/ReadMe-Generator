// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  let result;
  switch (license) {
    case 'MIT':
      result = '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';
      break;
    case 'Mozilla':
      result = '[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)';
      break;
    default:
      result = '';
      break;
  }
  return result;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  let result;
  switch (license) {
    case 'MIT':
      result =  '[MIT](https://opensource.org/licenses/MPL-2.0)';
      break;
    case 'Mozilla':
      result =  '[Mozilla](https://opensource.org/licenses/MPL-2.0)';
      break;
    default:
      result = '';
      break;
  }
  return result;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  const section = `${renderLicenseLink(license)} ${renderLicenseBadge(license)}`;
  return section;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.projectName}\n

  ## Table of Contents\n
  * [Description](#description)\n
  * [Installation](#installation)\n
  * [Usage](#usage)\n
  * [License](#license)\n
  * [Contributing](#contributing)\n
  * [Tests](#tests)\n
  * [Contact](#contact)\n

  ## Description\n
  ${data.projectDescription}\n

  ## Installation\n
  ${data.installInstructions}\n

  ## Usage\n
  ${data.usage}\n

  ## License\n
  ${renderLicenseSection(data.license)}\n

  ## Contributing\n
  ${data.contribution}\n

  ## Tests\n
  ${data.testInstructions}\n

  ## Contact\n
  ${data.name}\n
  ${data.email}\n
`;
}

module.exports = generateMarkdown;
