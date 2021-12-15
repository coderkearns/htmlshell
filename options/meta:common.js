// meta:common.js

const html = `<meta name="author" content="{Your name here}">
<meta name="description" content="{Description here}">
<meta name="keywords" content="{keywords,here}">`

module.exports = {
    name: 'meta:common',
    description: 'Add some common meta information tags',
    add: function (doc, args) {
        doc.head.push(html)
    }
}

