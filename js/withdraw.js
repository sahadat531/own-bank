// Withdraw Total Calculation
document.getElementById('btn_withdraw').addEventListener('click',function(){
    const withdrawInput = document.getElementById('withdraw-field');
    const withdrawInputText = withdrawInput.value;
    const withdrawInputNumber = parseFloat(withdrawInputText);

    // Getting Value From Withdraw Card
    const withdrawCard = document.getElementById('withdraw-total');
    const withdrawCardText = withdrawCard.innerText;
    const withdrawCardNumber = parseFloat(withdrawCardText);

    // Set withdraw amount to withdraw card
    const withdrawTotal = withdrawCardNumber + withdrawInputNumber;
    if(withdrawTotal > 0){
        withdrawCard.innerText = withdrawTotal;
    }

    // Get Total Balance value
    const toalBalance = document.getElementById('balance-total');
    const toalBalanceText = toalBalance.innerText;
    const totalBalanceNumber = parseFloat(toalBalanceText);

    // Calculate Total amount and remove from total Balance
    const newBalance = totalBalanceNumber - withdrawInputNumber;
    toalBalance.innerText = newBalance;
   console.log(totalBalanceNumber);

})

