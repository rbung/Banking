const Account = require('./account')

describe('Account creation', () => {
  test('should not create an account if name is falsy', () => {
    expect(() => new Account(null, 0)).toThrow(
      'a non empty string for name is required to create an account'
    )
  })

  test('should not create an account if name is not a string', () => {
    expect(() => new Account(123, 0)).toThrow(
      'a non empty string for name is required to create an account'
    )
  })

  test('should not create an account if balance is not an integer', () => {
    expect(() => new Account('bob', 'bar')).toThrow(
      'a strictly positive number for balance is required to create an account'
    )
  })

  test('should not create an account if balance is negative', () => {
    expect(() => new Account('bob', -1)).toThrow(
      'a strictly positive number for balance is required to create an account'
    )
  })

  test('should create an account', () => {
    expect(new Account('bob', 100)).not.toBeNull()
    expect(new Account('bob', 42.55)).not.toBeNull()
  })
})

describe('Account withdraw', () => {
  let account

  beforeEach(() => {
    account = new Account('pierre-jean', 100)
  })

  test('should do a withdraw', () => {
    account.withdraw(10)
    expect(account.balance).toEqual(90)
  })

  test('should do a withdraw', () => {
    account.withdraw(5)
    expect(account.balance).toEqual(95)
  })

  test('should NOT do a withdraw if the amount is not an integer', () => {
    expect(() => account.withdraw('invalid')).toThrow(
      'amount should be an integer'
    )
  })

  test('should NOT do a withdraw if the amount is not strictly positive', () => {
    expect(() => account.withdraw(-10)).toThrow(
      'amount should be strictly positive'
    )
  })

  test('should NOT do a withdraw if the amount is higher than account balance', () => {
    expect(() => account.withdraw(200)).toThrow('amount is too high')
  })
})
