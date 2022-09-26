
let qrBtn = document.querySelector("#qrBtn"),
    qrInputValue = document.querySelector("#qrInput").value,
    qrImage = document.querySelector(".qr-image img");
 
qrBtn.addEventListener('click', () => {
   if (qrInputValue ='') {
      return
   }
   else {
        qrBtn.innerText = "Generating..";
       qrImage.addEventListener('load', () => {
      qrBtn.innerText = "Generate QR code";
      qrImage.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${qrValue}`;
   
   })
}
    
 });
