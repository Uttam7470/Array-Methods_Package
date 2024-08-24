function sum(arr) {
    return arr.reduce((total, num) => total + num, 0);
  }
  
  function removeDuplicates(arr) {
    return [...new Set(arr)];
  }
  
  function filterNumbers(arr) {
    return arr.filter(item => typeof item === 'number');
  }
  
  function max(arr) {
    return Math.max(...arr);
  }
  
  function min(arr) {
    return Math.min(...arr);
  }
  
  function average(arr) {
    return sum(arr) / arr.length;
  }
  
  function flatten(arr) {
    return arr.flat();
  }
  
  function allNumbers(arr) {
    return arr.every(item => typeof item === 'number');
  }
  
  function findIndex(arr, value) {
    return arr.indexOf(value);
  }
  
  function removeValue(arr, value) {
    return arr.filter(item => item !== value);
  }
  
  export default {
    sum,
    removeDuplicates,
    filterNumbers,
    max,
    min,
    average,
    flatten,
    allNumbers,
    findIndex,
    removeValue
  };
  