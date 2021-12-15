// meta:viewport.js

const html = `<meta name="viewport" content="width=device-width,initial-scale=1">`

module.exports = {
    name: 'meta:viewport',
    description: 'Add a responsive viewport tag',
    add: function (doc, args) {
        doc.head.push(html)
    }
}

