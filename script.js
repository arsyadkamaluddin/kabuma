const nama = document.querySelectorAll(".nama img")
const quot = document.querySelector(".quot")

nama.forEach(function(e){
    e.addEventListener("mouseover",function(f){
        quot.style.animation = "myAnim 1.5s ease 0s 1 normal forwards;"
        quot.innerHTML=f.srcElement.nextElementSibling.innerHTML
        // quot.style.animation = ""
    })
})