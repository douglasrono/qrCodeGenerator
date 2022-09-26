
let qrBtn = document.querySelector("#qrBtn"),
    qrInput = document.querySelector("#qrInput"),
    qrImage = document.querySelector(".qr-image img");
 
qrBtn.addEventListener('click', () => {
   let qrValue = qrInput.value;
   if (!qrValue) return;
  qrImage.src = `https://api.qrserver.com/v1/create-qr-code/?size=250x250&data=${qrValue}`;

    
 });
