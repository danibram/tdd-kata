const task = require('../add')

describe('Task5', () => {
  it('should throw exception when negative numbers', () => {
    const t = () => {
      task.add('-1')
    }
    expect(t).toThrow('negatives not allowed -1')
  })
  it('should show number after exception -99', () => {
    const t = () => {
      task.add('-99')
    }
    expect(t).toThrow('negatives not allowed -99')
  })
  it('should show number after exception -99,-1', () => {
    const t = () => {
      task.add('-99,-1')
    }
    expect(t).toThrow('negatives not allowed -99 -1')
  })
})
