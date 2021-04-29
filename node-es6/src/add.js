//; 1;2

function add(number) {
  if (number === '') return 0

  let ERRORS = []
  let DELIMITER = ','
  let VALUE = number

  if (number.startsWith('//')) {
    let [delimiter, ...value] = number.split('\n')
    DELIMITER = delimiter.replace('//', '')
    VALUE = value.join(DELIMITER)
  }

  VALUE = VALUE.replace('\n', DELIMITER)

  return VALUE.split(DELIMITER)
    .map(a => {
      let n = parseInt(a)
      if (n < 0) ERRORS.push(n)

      return n
    })
    .reduce((acc, val) => {
      if (ERRORS.length > 0) throw `negatives not allowed ${ERRORS.join(' ')}`
      return acc + val
    }, 0)
}

module.exports.add = add
