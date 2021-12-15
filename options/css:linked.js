// css:linked.js

const html = `<link rel="stylesheet" href="{}">`;

module.exports = {
    name: 'css:linked',
    description: 'Add a link to a custom stylesheet',
    args: "<href...>",
    add: function (doc, args) {
        args.forEach(href => {
            if (!href) {
                throw new Error(`--css:linked requires arguments in the form of "<href>"`)
            }
            doc.head.push(html.replace("{}", href))
        })
    }
}

