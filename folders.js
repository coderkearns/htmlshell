const fs = require("fs")

const get_folders = () => {
  return fs.readdirSync(__dirname + "/options")
}

const get_folder_data = (folder) => {
  folder_config = require(`${__dirname}/options/${folder}/config.json`)
  description = folder_config.description
  location = folder_config.location
  html = fs.readFileSync(`${__dirname}/options/${folder}/main.html`).toString()
  not = fs.existsSync(`${__dirname}/options/${folder}/not.html`)
  if (not) {
    return {
      name: folder,
      location: location,
      description: description,
      html: html,
      not: fs.readFileSync(`${__dirname}/options/${folder}/not.html`).toString(),
      command: [`--${folder}`, description]
    }
  } else {
    return {
      name: folder,
      description: description,
      location: location,
      html: html,
      not: "",
      command: [`--${folder}`, description]
    }
  }
}

const get_folders_data = () => {
  let folders = get_folders()
  let new_folders = []
  folders.forEach((folder, i) => {
    new_folders[i] = get_folder_data(folder)
  })
  return new_folders
}

module.exports = {
  get_folders,
  get_folder_data,
  get_folders_data
}
