const task = require('../add')

describe('Task4', () => {
  it('should support multiple delimiters "//;\n1;2"', () => {
    expect(task.add('//;\n1;2')).toEqual(3)
  })
  it('should support multiple delimiters "//;\n3;4"', () => {
    expect(task.add('//;\n3;4')).toEqual(7)
  })
  it('should support multiple delimiters "//@\n3@4"', () => {
    expect(task.add('//@\n3@4')).toEqual(7)
  })
  it('should support multiple delimiters "//@\n3@4"', () => {
    expect(task.add('//@\n3@4\n1')).toEqual(8)
  })
})
