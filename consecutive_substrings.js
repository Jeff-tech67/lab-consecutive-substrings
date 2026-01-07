/**
 * Returns all consecutive substrings of a given string
 * @param {string} str
 * @returns {string[]}
 */
function consecutiveSubstrings(str) {
  const result = [];

  for (let i = 0; i < str.length; i++) {
    let substring = '';

    for (let j = i; j < str.length; j++) {
      substring += str[j];
      result.push(substring);
    }
  }

  return result;
}

module.exports = consecutiveSubstrings;
