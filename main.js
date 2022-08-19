
var container = document.querySelector(".container");
var qrCodeBtn = document.querySelector(".qrbtn");
const qrCode = document.querySelector(".qrCode");
 
 qrCodeBtn.addEventListener('click', ()=>{
    var qrApi = https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=qrValue;
    qrCode.classList.add(".active");
    console.log("hello");
 });
