module.exports = function towelSort (matrix) {
  if (Array.isArray(matrix) == false) {
    return [];
  }
  let finalArr = [];
  for (let i = 0; i < matrix.length; i++) {
    if (i%2 == 0){
      finalArr = finalArr.concat(matrix[i]);
    } else {
      finalArr = finalArr.concat(matrix[i].reverse());
    }
  }
  return finalArr;
}
