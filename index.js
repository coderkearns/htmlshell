#!/usr/bin/env node
const { parseOptions } = require('commander');
const program = require('commander');
const fs = require('fs');
const path = require('path');

program.version(require("./package").version)

const options = getOptions()
registerOptions(program, options)

program.parse()
const args = program.opts()

const doc = applyOptions(options, args)
const html = generateHtml(doc)

console.log(html)

function getOptions() {
  const optionFiles = fs.readdirSync(path.join(__dirname, 'options'))
  const options = []
  optionFiles.forEach(file => {
    const option = require(path.join(__dirname, 'options', file))
    options.push(option)
  })
  return options
}

function registerOptions(program, options) {
  options.forEach(option => registerOption(program, option))
}

function registerOption(program, option) {
  if (option.args) {
    program.option(`--${option.name} ${option.args}`, option.description)
  } else {
    program.option(`--${option.name}`, option.description)
  }
}

function filterOptions(options, args) {
  return options.filter(option => args[option.name] !== undefined)
}

function applyOptions(options, args) {
  const doc = createDoc()
  options.forEach(option => {
    if (args[option.name]) {
      applyOption(doc, option, args[option.name])
    } else {
      notApplyOption(doc, option)
    }
  })
  return doc
}

function applyOption(doc, option, args) {
  if (option.add) {
    option.add(doc, args)
  }
}

function notApplyOption(doc, option) {
  if (option.not) {
    option.not(doc)
  }
}

function createDoc() {
  return {
    html: [],
    body: [],
    head: [],
  }
}

function generateHtml(doc) {
  const body = doc.body.map(indent(1)).join('\n')
  const head = doc.head.map(indent(1)).join('\n')
  const html = `${doc.html.join('\n')}
<html>
  <head>
${head}
  </head>
  <body>
${body}
  </body>
</html>`
  return html
}

function indent(amt) {
  return function (text) {
    return text
      .split("\n")
      .map(line => '\t'.repeat(amt) + line)
      .join('\n')
  }
}