
let container = document.querySelector(".container"),
   qrCodeBtn = document.querySelector(".qrbtn"),
   qrCode = document.querySelector(".qrCode"),
   qrGenerator = document.querySelector(".qrGenerator");
 var  qrImage = document.querySelector(".qr-image img");
 
qrCodeBtn.addEventListener('click', () => {
   qrGenerator.innerText = "Generating..";
   qrImage.addEventListener('load', () => {
      qrImage.classList.add(active);
      qrImage.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=qrValue`;
   
   })
    
 });
