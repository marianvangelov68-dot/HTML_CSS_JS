function calculateTip() {
    const billAmount=parseFloat(document.getElementById('bill-amount').value);
    const tipPercentage=parseFloat(document.getElementById('tip-percentage').value);

    const total=billAmount+(billAmount*tipPercentage/100);
    document.getElementById('total-amount').innerText=total.toFixed(2);
}

document.getElementById('button_calculate').addEventListener('click', calculateTip);
