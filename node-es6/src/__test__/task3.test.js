const task = require('../add')

describe('Task3', () => {
  it('should accept multiple numbers like "1\n2,3"', () => {
    expect(task.add('1\n2,3')).toEqual(6)
  })
  // it('should accept multiple numbers like "1,\n"', () => {
  //     task.add('1,\n')
  // })
})
