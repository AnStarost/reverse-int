module.exports = function reverse (n) {
    let a = n.toString().split('').reverse().join('');
    if (a.endsWith('-')) {
      return a.substr(0,3);
  }
      return a;
}
