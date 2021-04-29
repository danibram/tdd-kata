const task1 = require('../add')

describe('Task2', () => {
  it('should accept multiple numbers like "1,2,2"', () => {
    expect(task1.add('1,2,2')).toEqual(5)
  })
  it('should accept multiple numbers like "1,2,2,1"', () => {
    expect(task1.add('1,2,2,1')).toEqual(6)
  })
})
