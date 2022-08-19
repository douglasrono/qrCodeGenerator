var container = document.querySelector(".container");
var qrCodeBtn = document.querySelector(".qrbtn");
const qrCode = document.querySelector(".qrCode");
 
 qrCodeBtn.addEventListener('click', ()=>{
    qrCode.classList.add(".active");
    console.log("hello");
 });