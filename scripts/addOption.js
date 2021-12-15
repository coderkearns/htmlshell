const fs = require("fs");
const path = require("path");

const optionsFolder = path.resolve(path.join(__dirname, "..", "options"))
const optionTemplate = `// {name}.js

const html = \`\`

module.exports = {
    name: '{name}',
    description: '{description}',
    add: function (doc, args) {
        // Code here
        // doc.body.push(html)
    },
    not: function (doc) {
        // Code here
        // doc.body.push(html)
    }
}

`
const optionString = (name, description) => optionTemplate.replace(/{name}/g, name).replace(/{description}/g, description)

const args = process.argv.slice(2)
if (!args || args.length < 2) {
    console.error("Usage: node scripts/addOption.js <name> <description>")
    process.exit(1)
}

const name = args[0]
const description = args[1]

const option = optionString(name, description)

const optionPath = path.join(optionsFolder, `${name}.js`)
fs.writeFileSync(optionPath, option)

console.log(`Created option --${name}`)