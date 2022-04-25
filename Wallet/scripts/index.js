// Store the wallet amount to your local storage with key "amount"

let walletAmount = JSON.parse(localStorage.getItem("amount")) || 0
function addToWallet(){
    let amount = document.getElementById('amount').value;
     
    if(Number(amount) > 0){
        walletAmount = walletAmount + Number(amount)
        console.log(walletAmount)
        localStorage.setItem("amount",JSON.stringify(Number(walletAmount)))
    }
}