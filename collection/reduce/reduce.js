/**
 * Simple reduce to evaluate and division of two arrays rather than using filters
 * In this particular case, it's to see separate the truthy from the falsey
 * @param {Array} collection : Collection is an array of objects
 * @param {String} eval : Property key of the underlying truthy fvalue
 * @param {String} select : Property to parse out, generally I will take entire objects, but for the purpose of this snippet, I just take a single property
 */
const successOrFail = (collection, eval, select) => {
  const [success, failure] = collection.reduce(([s, f], curr) => curr[eval] ? [[...s, curr[select]], f] : [s, [...f, curr[select]]], [[], []]);

  return {
    success,
    failure
  }
}

module.exports = {
  successOrFail,
}