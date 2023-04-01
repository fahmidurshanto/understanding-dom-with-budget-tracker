
document.getElementById("kitkat-buy-btn").addEventListener('click', function(){
    const quantity = getInputValue("kitkat-quantity")
    const kitkatCost = quantity * 200;
    setInnerText("chocolate", kitkatCost);
    totalPrice();
})

document.getElementById("rose-buy-btn").addEventListener('click', function(){
    const quantity = getInputValue("rose-quantity")
    const roseCost = quantity * 100;
    setInnerText("rose", roseCost);
    totalPrice();
})


document.getElementById("diary-buy-btn").addEventListener('click', function(){
    const quantity = getInputValue("diary-quantity")
    const diaryCost = quantity * 100;
    setInnerText("diary", diaryCost);
    totalPrice();
})

document.getElementById("button").addEventListener('click', function(){
    const promoCode = getInputValue("promo-code");
    if (promoCode == 101) {
        const total = document.getElementById("total").innerText;
        const sum = total - parseInt(total) * 0.1;
        setInnerText("all-total", sum);
    }
    else{
        alert("Wrong promotion code, Try again with valid code.")
    }
    
})

    function setInnerText (id, value) {
        document.getElementById(id).innerText = value;
    }
    
    function getInputValue(id) {
    const value = document.getElementById(id).value;
    return parseInt(value);
    }

    function totalPrice() {
        const totalSum = getInnerText("chocolate") + getInnerText("rose") + getInnerText("diary");
        // const totalSum = parseInt(chocolate) + parseInt(rose) + parseInt(diary);
        setInnerText("total", totalSum);
    }

    function getInnerText(id) {
        const input = document.getElementById(id).innerText;
        return parseInt(input);
    }