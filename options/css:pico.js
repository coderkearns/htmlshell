const fs = require("fs");
const path = require("path");

// pico.min.css is located ../assets/pico.min.css from this file, /assets/pico.min.css from index.js
const picoPath = path.join(__dirname, "../assets/pico.min.css")

const html = "<link rel=\"stylesheet\" href=\"pico.min.css\"></link>"

module.exports = {
    name: 'css:pico',
    description: "Create pico.min.css, and add it to the head",
    add: function (doc) {
        doc.head.push(html)
        fs.copyFileSync(picoPath, path.join(process.cwd(), "pico.min.css"))
    }
}