// Code your solution in this file
function findMatching(obj, name) {
  return obj.filter(function (description) {
    return description.toLowerCase() === name.toLowerCase()})
}
