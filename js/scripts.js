document.querySelector(".containerMenuh").addEventListener("click",animatedMenu)

var line1 = document.querySelector(".barMenu1")
var line2 = document.querySelector(".barMenu2")
var line3 = document.querySelector(".barMenu3")


function animatedMenu(){
    line1.classList.toggle("activeBarMenu1")
    line2.classList.toggle("activeBarMenu2")
    line3.classList.toggle("activeBarMenu3")
}