// Getting deposit button
document.getElementById('btn_deposit').addEventListener('click', function () {
    // // Getting data from depost card
    let depositInput = document.getElementById('deposit_field');
    let depositValue = depositInput.value;
    let depositValueNumber = parseFloat(depositValue);

    // // Clear the value
    depositInput.value = '';

    // // Getting Depost amount from deposit card
    let depositCard = document.getElementById('deposit-total');
    let depositText = depositCard.innerText;
    let depositCardValue = parseFloat(depositText);

    // // Setting the value to UI
    let Total = depositCardValue + depositValueNumber;

    depositCard.innerText = Total;

    // Set the total into balance
    let balanceElement = document.getElementById('balance-total');
    let balanceElementText = balanceElement.innerText;
    let balanceNumber = parseFloat(balanceElementText);

    let balanceTotal = balanceNumber + depositValueNumber;

    balanceElement.innerText = balanceTotal;
    
})


