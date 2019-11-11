
const execSync = require('child_process').execSync

module.exports = function(branch) {
  try {
    let results = execSync(`git push origin "${branch}"`, { encoding: 'utf-8' })
    console.log(results);
  } catch (err) {
    console.log(err.stdout);
    process.exit(0)
  }
}