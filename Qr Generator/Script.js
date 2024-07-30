let QRText = document.getElementById("QR-text");
let QRImage = document.getElementById("QR-image");

function generateQR() {
  if (QRText.value.length > 0) {
    QRImage.src = "https://goqr.me/api/v1/generate?text=" + QRText.value;
    console.log(QRImage.src);
    document.getElementById("img-box").classList.add("active");
  } else {
    document.getElementById("img-box").classList.add("error");
    setTimeout(function() {
      document.getElementById("img-box").classList.remove("error");
    }, 1000);
  }
}

document.getElementById("generate").addEventListener("click", generateQR);
