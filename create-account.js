function createAccount(pin, amount = 0) {
  let code = pin;
  let amt = amount;
  return {
    checkBalance(pin) {
      return pin == code ? `$${amt}` : "Invalid PIN.";
    },
    deposit(pin, amount) {
      if (pin == code) {
        amt += amount;
        return `Succesfully deposited $${amount}. Current balance: $${amt}.`;
      } else {
        return "Invalid PIN.";
      }
    },
    withdraw(pin, amount) {
      if (pin == code) {
        if (amt < amount)
          return "Withdrawal amount exceeds account balance. Transaction cancelled.";
        amt -= amount;
        return `Succesfully withdrew $${amount}. Current balance: $${amt}.`;
      } else {
        return "Invalid PIN.";
      }
    },
    changePin(pin, newPin) {
      if (pin == code) {
        code = newPin;
        return "PIN successfully changed!";
      } else {
        return "Invalid PIN.";
      }
    },
  };
}

module.exports = { createAccount };
