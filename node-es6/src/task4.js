//; 1;2

function add(number) {
  if (number === '') return 0

  let DELIMITER = ','
  let VALUE = number

  if (number.startsWith('//')) {
    let [delimiter, ...value] = number.split('\n')
    DELIMITER = delimiter.replace('//', '')
    VALUE = value.join(DELIMITER)
  }

  VALUE = VALUE.replace('\n', DELIMITER)

  return VALUE.split(DELIMITER)
    .map(a => parseInt(a))
    .reduce((acc, val) => acc + val, 0)
}

module.exports.add = add
