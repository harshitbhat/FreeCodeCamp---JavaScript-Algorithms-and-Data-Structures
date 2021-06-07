const moneyVal = {
  PENNY: 0.01,
  NICKEL: 0.05,
  DIME: 0.1,
  QUARTER: 0.25,
  ONE: 1.0,
  FIVE: 5.0,
  TEN: 10.0,
  TWENTY: 20.0,
  'ONE HUNDRED': 100.0,
};

function checkCashRegister(price, cash, cid) {
  // Find cash to be returned
  let balance = cash - price;
  // Find total money available
  const moneyAvailable = cid.reduce((sum, type) => sum + type[1], 0).toFixed(2);
  // Check if sufficient money available
  if (moneyAvailable < balance) {
    return { status: 'INSUFFICIENT_FUNDS', change: [] };
  }
  // If balance is exactly equal to amound,  close the register

  if (moneyAvailable === balance.toFixed(2)) {
    return { status: 'CLOSED', change: [...cid] };
  }
  // If balance < funds available
  const n = cid.length;
  const changeArr = [];
  for (let i = n - 1; i >= 0; i--) {
    const batch = cid[i];
    const moneyName = batch[0];
    let given = 0;
    while (balance >= moneyVal[moneyName] && batch[1] > 0) {
      given += moneyVal[moneyName];
      batch[1] -= moneyVal[moneyName];
      balance -= moneyVal[moneyName];
      balance = balance.toFixed(2);
    }
    if (given > 0) {
      changeArr.push([moneyName, given]);
    }
  }
  if (balance > 0) {
    return { status: 'INSUFFICIENT_FUNDS', change: [] };
  } else {
    return { status: 'OPEN', change: changeArr };
  }
}

const ans = checkCashRegister(3.26, 100, [
  ['PENNY', 1.01],
  ['NICKEL', 2.05],
  ['DIME', 3.1],
  ['QUARTER', 4.25],
  ['ONE', 90],
  ['FIVE', 55],
  ['TEN', 20],
  ['TWENTY', 60],
  ['ONE HUNDRED', 100],
]);
console.log(ans);
