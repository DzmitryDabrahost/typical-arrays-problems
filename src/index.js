
exports.min = function min (array) {
  return (array === undefined || array.length === 0) ? 0 : Math.min.apply(Math, array);
}

exports.max = function max (array) {
  return (array === undefined || array.length === 0) ? 0 : Math.max.apply(Math, array);
}

exports.avg = function avg (array) {
  return (array === undefined || array.length === 0) ? 0 : array.reduce((a, b) => (a + b)) / array.length;
}
