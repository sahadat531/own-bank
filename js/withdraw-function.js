document.getElementById( 'btn_withdraw' ).addEventListener( 'click', function () {
    const withdrawField = getElementByIdNumber( 'withdraw-field' );
    const withdrawCard = cardText( 'withdraw-total' );

    const withdrawTotal = withdrawCard + withdrawField;

    // Set withdraw Total to UI Card
    const setiWithdrawCard = setTextValue( 'withdraw-total', withdrawTotal );

    // Deduct withdraw value from Balance
    const balance = cardText( 'balance-total' );
    const totalBalance = balance - withdrawField;
    setTextValue( 'balance-total', totalBalance );
})