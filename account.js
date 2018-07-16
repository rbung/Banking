class Account {
  constructor(name, initialBalance) {
    if (typeof name !== 'string') {
      throw Error(
        'a non empty string for name is required to create an account'
      )
    }
    if (typeof initialBalance !== 'number' || initialBalance < 0) {
      throw Error(
        'a strictly positive number for balance is required to create an account'
      )
    }
    this.name = name
    this.balance = initialBalance
    console.log(
      `Initiate an account with ${name} with a balance of ${this.balance}`
    )
  }

  withdraw(amount) {
    if (!Number.isInteger(amount)) {
      throw Error('amount should be an integer')
    }
    if (amount < 1) {
      throw Error('amount should be strictly positive')
    }
    if (amount > this.balance) {
      throw Error('amount is too high')
    }
    console.log(`Done a withdraw of ${amount}`)
    this.balance -= amount
  }
}

module.exports = Account
