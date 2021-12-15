// favicon.js

const html = `<link rel="icon" type="image/png" href="{}">`

module.exports = {
    name: 'favicon',
    description: 'Add a favicon image',
    args: "<src>",
    add: function (doc, args) {
        if (!args[0]) {
            throw new Error(`--favicon requires arguments in the form of "<src>"`)
        }
        doc.head.push(html.replace("{}", args[0]))
    }
}

