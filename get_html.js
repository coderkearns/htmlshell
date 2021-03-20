const fs = require('fs');

const filter_obj = (obj, predicate) => {
  let result = {}
  for (k in obj) {
    if (predicate(obj[k])) {
      result[k] = obj[k]
    }
  }
  return result
}

String.prototype.replaceAll = (to_replace, replacer) => {
  console.log(this)
  return this
}

module.exports = (options) => {
  html = filter_obj(options, (v) => {return v.location == "html"})
  head = filter_obj(options, (v) => {return v.location == "head"})
  body = filter_obj(options, (v) => {return v.location == "body"})

  html_html = ""
  for (opt in html) {
    html_html += html[opt].html
  }

  head_html = ""
  for (opt in head) {
    head_html += head[opt].html.split("\n").join("\n    ")
  }
  if (head_html == "") head_html = "\n"
  head_html = "    " + head_html

  body_html = ""
  for (opt in body) {
    body_html += body[opt].html.split("\n").join("\n    ")
  }
  if (body_html == "") body_html = "\n"
  body_html = "    " + body_html

  let template = fs.readFileSync(__dirname + "/main.html").toString()
  template = template.replace("{html}", html_html)
  template = template.replace("{head}", head_html)
  template = template.replace("{body}", body_html)
  return template
}
