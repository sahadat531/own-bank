function getElementByIdNumber(id){
    const element = document.getElementById(id);
    const elementText = element.value;
    const elementNumber = parseFloat(elementText);

    element.value = ''

    return elementNumber;
}

function cardText(id){
    const card = document.getElementById(id);
    const cardText = card.innerText;
    const cardNumber = parseFloat(cardText);

    return cardNumber;
}

function setTextValue(id,newValue){
    const element = document.getElementById( id );
    element.innerText = newValue;
}