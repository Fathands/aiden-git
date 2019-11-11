#!/usr/bin/env node

const program = require('commander');
const path = require('path');
const { resolve } = path;

const getCommand = command => resolve(__dirname, '../commands/', command);

program.version(require('../package').version, '-v, --version');

program.usage('<command> [option]');

program.command('cz')
  .description('tool for git commit')
  .action(() => {
    require(getCommand('cz'))
  });

program.command('push')
.description('tool for git push')
.action((command, params) => {
  const branch = params[0]
  
  if (branch) {
    const push = require(getCommand('push'));
    push(branch);
  }
});

program.parse(process.argv);