#!/usr/bin/env node
const { program } = require('commander');

const { version } = require("./package.json")
program.version(version);

const folders = require(__dirname + '/folders.js');
const get_html = require(__dirname + "/get_html.js")
const fixargs = require(__dirname + '/fixargs.js')
let options = folders.get_folders_data()

for (option of options) {
  program.option(...option.command)
}
program.parse(process.argv)
const args = fixargs(program.opts())

let tofit = {}
for (option of options) {
  let doshow = args[option.name]
  if (doshow) {
    tofit[option.name] = {
      location: option.location,
      html: option.html
    }
  } else {
    tofit[option.name] = {
      location: option.location,
      html: option.not
    }
  }
}

html = get_html(tofit)

console.log(html)
