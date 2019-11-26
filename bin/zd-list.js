#!/usr/bin/env node

const tplObj = require(`${__dirname}/../object`)
const chalk = require('chalk')

Object.keys(tplObj).forEach((t,index) => {
    console.log(chalk.white(`\n ${index + 1} - ${t} \n`))
    console.log(chalk.blue(`zd init ${t} myApp \n`))
})