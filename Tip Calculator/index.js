const billAmount = document.getElementById("bill-amount");
const billPerc = document.getElementById("tip-percetage");
const calcBtn = document.getElementById("calc");

calcBtn.addEventListener("click", function () {
  let bill_amt = Number(billAmount.value);
  let tip_per = Number(billPerc.value);

  let total = bill_amt * (tip_per / 100) + bill_amt;
  document.getElementById("result").innerHTML = `$ ${total}`;
});
