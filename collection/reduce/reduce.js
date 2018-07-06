/**
 * 
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