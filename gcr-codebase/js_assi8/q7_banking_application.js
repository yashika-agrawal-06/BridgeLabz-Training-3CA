class BankAccount {
  #balance;

  constructor(accountHolder, initialDeposit = 0) {
    this.accountHolder = accountHolder;
    this.#balance = initialDeposit >= 0 ? initialDeposit : 0;
  }

  deposit(amount) {
    if (amount <= 0) {
      throw new Error("Deposit amount must be positive.");
    }
    this.#balance += amount;
    console.log(`Deposited ₹${amount}. New Balance: ₹${this.#balance}`);
  }

  withdraw(amount) {
    if (amount <= 0) {
      throw new Error("Withdrawal amount must be positive.");
    }
    if (amount > this.#balance) {
      throw new Error(
        `Insufficient funds. Attempted to withdraw ₹${amount}, available balance is ₹${this.#balance}.`
      );
    }
    this.#balance -= amount;
    console.log(`Withdrew ₹${amount}. Remaining Balance: ₹${this.#balance}`);
  }

  getBalance() {
    return this.#balance;
  }
}

const myAccount = new BankAccount("Meera Sharma", 5000);

try {
  myAccount.deposit(2500);
  myAccount.withdraw(3000);
  console.log(`Current Balance: ₹${myAccount.getBalance()}`);
  myAccount.withdraw(10000);
} catch (error) {
  console.error(`Transaction Failed: ${error.message}`);
}
