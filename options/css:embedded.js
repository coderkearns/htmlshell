// css:embedded.js

const html = `<style>
    /* Embedded CSS here */
</style>`

module.exports = {
    name: 'css:embedded',
    description: 'Add an embedded style tag',
    add: function (doc, args) {
        doc.head.push(html)
    }
}

