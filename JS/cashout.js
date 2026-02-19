document.getElementById("cashout-btn").addEventListener("click", function () {
  // 1. get agent number & validate
  const cashoutNumber = getValueFromInput("cashout-number");
  if (cashoutNumber.length != 11) {
    alert("Invalid Number");
    return;
  }
  // 2. get the amount
  const cashoutAmount = getValueFromInput("cashout-amount");
  if (cashoutAmount < 0) {
    alert("Invalid Amount");
    return;
  }
  // 3. get the current balance
  const currentBalance = getBalance();
  // 4. calculate balance
  const newBalance = currentBalance - Number(cashoutAmount);
  console.log(newBalance);
  if (newBalance < 0) {
    alert("Invalid Amount");
    return;
  }
  // 5. get the pin
  const pin = getValueFromInput("cashout-pin");
  if (pin === "1122") {
    alert("Cashout successful");
    setBalance(newBalance);
    // 1. get history container
    const history = document.getElementById("history-container");
    // 2. create new div
    const newHistory = document.createElement("div");
    // 3. add innerHTML in new div
    newHistory.innerHTML = `
    <div class="transaction-card p-5 bg-base-100">
      Cashout ${cashoutAmount} Taka successful to ${cashoutNumber}, at ${new Date()}
    </div>
    `;
    // 4. append new div in history container
    history.append(newHistory);
  } else {
    alert("Invalid pin");
    return;
  }
});

// document.getElementById("cashout-btn").addEventListener("click", function () {
//   // get agent number & validate
//   const cashoutnumberinput = document.getElementById("cashout-number");
//   const cashoutnumber = cashoutnumberinput.value;
//   console.log(cashoutnumber);
//   if (cashoutnumber.length != 11) {
//     alert("Invalid Agent Number");
//     return;
//   }
//   // get amount,validate
//   const cashoutamountinput = document.getElementById("cashout-amount");
//   const cashoutamount = cashoutamountinput.value;
//   if (cashoutamount < 0) {
//     alert("Invalid Amount");
//     return;
//   }
//   console.log(cashoutamount);
//   // get current balance
//   const balanceElement = document.getElementById("balance");
//   const balance = balanceElement.innerText;
//   console.log(balance);
//   // calculate new balance,verify,convert to number
//   const newBalance = Number(balance) - Number(cashoutamount);
//   if (newBalance < 0) {
//     alert("Invalid Amount");
//     return;
//   }
//   // get pin number & verify
//   const cashoutpininput = document.getElementById("cashout-pin");
//   const pin = cashoutpininput.value;
//   console.log(pin);
//   if (pin === "1122") {
//     // if true: alert > set new balance
//     alert("Cashout successful");
//     console.log(newBalance);
//     balanceElement.innerText = newBalance;
//   } else {
//     // if false: alert > return
//     alert("Invalid pin");
//     return;
//   }
// });
