// Implement debouncing for network request
// On clicking book now store the selected movie in localstorage as key "movie"
// so that you can retrive it on checkout.html page

let walletAmount = JSON.parse(localStorage.getItem("amount")) || 0

let booking= JSON.parse(localStorage.getItem("movie")) || []




var id;
 async function searchMovies(){
     // //https://www.omdbapi.com/?apikey=6a41ddca&s=om_shanti_om
    try{
        let search = document.getElementById('search').value;

        let res = await fetch(`https://www.omdbapi.com/?apikey=6a41ddca&s=${search}`);
        let data = await res.json()
        console.log("data",data.Search)
        allMovies(data.Search)

        //AppendData(data.Search)
        return data.Search
    }
    catch(err){
        console.log("err",err)
    }
}

function AppendData(data){
   console.log("data12",data)
   
//    let div = document.createElement('div')
//    div.setAttribute= ("id","seachbar")

    data.forEach(function(elem){
        
        let suggest = document.getElementById('suggest')

        let title = document.createElement("p")
        
        title.innerText= elem.Title;
        console.log("p",title)

        suggest.append(title)

        
    })
}

async function main(){
    let data = await searchMovies()
    console.log("main ka data",data)

    if(data===undefined){
        return false;
    }

    AppendData(data)
}


function debounce(func,delay){
    if(id){
        clearInterval(id)
    }

    id= setTimeout(function(){
        func()
    },delay)
    
}





function allMovies(data){
   console.log("all",data)

   let main_movie = document.getElementById('movies')

    data.forEach(function(elem){
        
        let div = document.createElement('div')
        div.innerHTML= null

        let title = document.createElement("p")
        title.innerText= elem.Title;
        console.log("title",title)

        let image= document.createElement("img")
        image.src = elem.Poster;

        let bookbtn = document.createElement('button')
        bookbtn.innerText="Book Now"
        bookbtn.setAttribute("class","book_now")
        bookbtn.addEventListener("click",function(){
            // if(Number(walletAmount) < 0){
            //     alert("Insufficient Balance")
            // }
            // else{
            //     alert("Booking Successful")
            // }

             booking.push(elem)
             console.log("elem",elem)

             localStorage.setItem("movie",JSON.stringify(booking))
             window.location.href=".//checkout.html"
        })


        div.append(image,title,bookbtn)
        main_movie.append(div)

        
    })

}


// function bookMovie(el){
//     localStorage.setItem("movie",JSON.stringify(el))
// }



let paise = document.getElementById("navbar")
paise.innerText= Number(walletAmount)