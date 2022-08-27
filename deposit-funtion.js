document.getElementById( 'btn_deposit' ).addEventListener( 'click', function () {
    const depositNumber = getElementByIdNumber( 'deposit_field' );
    const depositCard = cardText( 'deposit-total' );

    const totalDepost = depositNumber + depositCard;

    const setValueToCard = setTextValue( 'deposit-total', totalDepost );

    // Update Deposit to balance Card
    const balance = cardText( 'balance-total' );

    // Calculate deposit and balance value
    const balanceTotal = balance + depositNumber;

    // Set balance total to Balance Card
    const balanceCard = setTextValue( 'balance-total', balanceTotal );
})