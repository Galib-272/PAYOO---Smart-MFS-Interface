document.getElementById("add-money-btn").addEventListener("click", function () {
  // 1. get bank account
  const bankAccount = getValueFromInput("add-money-bank");
  if (bankAccount == "Select a Bank") {
    alert("please select a bank");
    return;
  }
  // 2. get bank account number
  const accno = getValueFromInput("add-money-number");
  if (accno.length != 11) {
    alert("Invalid account number");
  }
  // 3. get amount
  const amount = getValueFromInput("add-money-amount");
  const newBalance = getBalance() + Number(amount);
  // 4. get pin & validate
  const pin = getValueFromInput("add-money-pin");
  if (pin == "1122") {
    alert(`Add money successful from ${bankAccount} at ${new Date()}`);
    setBalance(newBalance);
  } else {
    alert("Invalid pin");
    return;
  }
});
