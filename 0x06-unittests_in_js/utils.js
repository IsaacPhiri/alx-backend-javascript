// Description: This file implements a function that returns the sum of 2 numbers.
// @param {string} type - Type of operation.
// @param {number} a - First number.
// @param {number} b - Second number.
// @returns {number} - The sum of a and b.
const Utils = {
  calculateNumber(type, a, b) {
    if (type === 'SUM') {
      return Math.round(a) + Math.round(b);
    }
    if (type === 'SUBTRACT') {
      return Math.round(a) - Math.round(b);
    }
    if (type === 'DIVIDE') {
      return Math.round(b) === 0 ? 'Error' : Math.round(a) / Math.round(b);
    }
    return 0;
  },
};

module.exports = Utils;
