import data from './data.json' assert { type: 'json' };
const dataAnggota = data.data
const nama = document.querySelectorAll(".nama")
const quotes = document.querySelector(".quotes p")
for(let i=0;i<dataAnggota.length;i++){
    let f = dataAnggota[i]
    nama[i].innerHTML=`<p>${f.nama}</p>
    <img src="./img/${f.nama}.jpg" alt="">
    <blockquote>${f.quotes}</blockquote>`
}
nama.forEach(e=>{
    e.addEventListener("mouseover",f=>{
        quotes.innerHTML=f.srcElement.nextElementSibling.innerHTML
    })
})
