// js:linked.js

const html = `<script src="{}"></script>`

module.exports = {
    name: 'js:linked',
    description: 'Link an external javascript file. Can be used multiple times. Requires an arg in the form of <location>:<src>',
    args: '<location:src...>',
    add: function (doc, args) {
        args.forEach(src => {
            [location, src] = url.split(':')
            if (!location || !src) {
                throw new Error(`--js:linked requires arguments in the form of "<location>:<src>"`)
            }
            if (!["head", "body"].includes(location)) {
                throw new Error(`--js:linked location must be either "head" or "body"`)
            }
            doc[location].push(html.replace("{}", src))
        })
    }
}

