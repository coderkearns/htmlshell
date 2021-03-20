uppercase_letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"

module.exports = (args) => {
  let new_args = {}
  for (k in args) {
    let v = args[k]
    let new_k = ""
    for (letter of k) {
      if (uppercase_letters.includes(letter)) {
        new_k += `-${letter.toLowerCase()}`
      } else {
        new_k += letter
      }
    }
    new_args[new_k] = v
  }
  return new_args
}
