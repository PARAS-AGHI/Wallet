// Each ticket will cost 100 Rupees
// If wallet amount is insufficient show alert "Insufficient Balance!";
// Else show "Booking successfull!" and adjust the wallet amount in real time
let walletAmount = JSON.parse(localStorage.getItem("amount")) || 0

let booking= JSON.parse(localStorage.getItem("movie")) || []

let Checkout= document.querySelector("h1")
Checkout.innerText = Number(walletAmount)

checkIt(booking)
function checkIt(data){
    let selected = document.getElementById('movie')
    data.forEach(function(elem){
        let div = document.createElement('div');

        let image= document.createElement("img")
        image.src= elem.Poster;

        let title = document.createElement("h2")
        title.innerText= elem.Title;

        div.append(image,title)
        selected.append(div)
    })
}



function sub(){

let x = Number(walletAmount) 
let seats = document.getElementById("number_of_seats").value

let total = 100*seats  

if(total>x){
    alert("Insufficient balance")
}

else{
    alert("Booking Successful")
}


}

