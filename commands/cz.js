const { prompt } = require('inquirer');

const commit_types = require('../constants/commit-types');
const execSync = require('child_process').execSync

const question = [
  {
    type: 'list',
    name: 'type',
    message: '选择commit类型: ',
    choices: commit_types
  },
  {
    type: 'input',
    name: 'description',
    message: '请简短地描述一下: '
  }
]

module.exports = prompt(question).then(({ type, description }) => {

  let results
  try {
    results = execSync(`git commit -m "${type}: ${description}"`, { encoding: 'utf-8' })
    console.log(results, 11);
  } catch (err) {
    console.log(err, 22);
    process.exit(0)
  }

});