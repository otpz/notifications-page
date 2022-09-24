const cardsDOM = document.querySelectorAll(".card");
const commentDOM = document.querySelectorAll(".card-comment")
const cardPointDOM = document.querySelectorAll(".card-point")
const numberDOM = document.querySelector(".section-header2")
const markDOM = document.querySelector(".section-mark-all")
let counter = 7
markDOM.addEventListener("click",clear)
function clear(){
    cardsDOM.forEach((item,index,array) => {
        item.classList.remove('card-bg')
    });
    cardPointDOM.forEach((item,index,array) => {
        item.classList.add('hidden')
    })
    numberDOM.innerHTML = 0
}
for (let i = 0; i < cardsDOM.length; i++) {
   cardsDOM[i].addEventListener("click", function() {
       cardPointDOM[i].classList.add('hidden')
       if (numberDOM.innerHTML > 0 && cardsDOM[i].classList.contains('card-bg')){
           counter--
           numberDOM.innerHTML = counter
           cardsDOM[i].classList.remove('card-bg')
       }
       
       if (commentDOM[i].classList.contains('hidden')){
           commentDOM[i].classList.remove('hidden')
       } else{
           commentDOM[i].classList.add('hidden')
       }
           
   });
}