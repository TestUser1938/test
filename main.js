// Refactor following solution
// Return an array without duplicates

duplicate = (array) => {
  const result = []
  for (const element of array) {
    if (!result.includes(element)) {
      result.push(element)
    }
  }
  return result;
};

module.exports = duplicate;
