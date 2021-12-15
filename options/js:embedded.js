// js:embedded.js

const html = `<script>
    // Embedded JS here
</script>`

module.exports = {
    name: 'js:embedded',
    description: 'An an embedded script tag',
    add: function (doc, args) {
        doc.body.push(html)
    }
}

