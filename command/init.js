'use strict'
const exec = require('child_process').exec
const co = require('co')
const ora = require('ora')
const prompt = require('co-prompt')
    // const config = require('../templates')
const chalk = require('chalk')
let download = require('download-git-repo');
module.exports = () => {
    co(function*() {
        // 处理用户输入
        let projectName = yield prompt('Project name: ')
        let gitUrl = 'gitlab:http://gitlab.game.yypm.com:10080:other/vue-admin-template';
        var location = process.cwd() + '\\' + projectName;
        const spinner = ora('downloading ...');
        spinner.start();

        download(gitUrl, location, function(err) {
            spinner.stop();
            console.log(err ? chalk.red('Error:' + err) : chalk.green('Success'));
            process.exit()
        })
    })
}