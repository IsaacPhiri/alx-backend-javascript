// @params {string} type - Type of calculation
// @params {number} a - First operand
// @params {number} b - Second operand
// @return {number} The result of the calculation
const calculateNumber = (type, a, b) => {
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
  };
  
  module.exports = calculateNumber;
  