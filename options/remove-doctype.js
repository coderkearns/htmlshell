const html = "<!DOCTYPE html>"

module.exports = {
    name: 'removeDoctype',
    description: "Don't use the \"<!DOCTYPE html>\" tag",
    not: function (doc) {
        doc.html.push(html)
    }
}