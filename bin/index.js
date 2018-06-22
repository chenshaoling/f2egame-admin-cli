#! /usr/bin/env node

'use strict'

process.env.NODE_PATH = __dirname + '/../node_modules/'

const program = require('commander')

program
    .version(require('../package').version)

program
    .usage('<command>')


program
    .command('init')
    .description('Generate a new project')
    .alias('i')
    .action(() => {
        require('../command/init')()
    })

program.parse(process.argv)

if (!program.args.length) {
    program.help()
}