const task1 = require('../add')

describe('Task1', () => {
  it('should return 0', () => {
    task1.add('0')
  })
  it('should return 1', () => {
    task1.add('1')
  })
  it('should return 2', () => {
    task1.add('2')
  })
  it('should return "0', () => {
    expect(task1.add('')).toEqual(0)
  })
  it('should return 3', () => {
    expect(task1.add('1,2')).toEqual(3)
  })
})
