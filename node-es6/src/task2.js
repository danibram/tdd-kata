function add(number) {
  if (number === '') return 0

  return number
    .split(',')
    .map(a => parseInt(a))
    .reduce((acc, val) => acc + val, 0)
}

module.exports.add = add
