const html = `<script>
    document.on("load", function() {
        // Code here
    });
</script>`

module.exports = {
    name: 'js:autorun',
    description: "Add inline javascript that will run on page load",
    add: function (doc) {
        doc.body.push(html)
    }
}