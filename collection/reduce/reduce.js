/**
 * 
 */
const successOrFail = (collection) => {
  const [success, failure] = collection.reduce(([s, f], curr) => curr.success ? [[...s, curr.id], f] : [s, [...f, curr.id]], [[], []]);

  return {
    success,
    failure
  }
}

module.exports = {
  successOrFail,
}