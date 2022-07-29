//Function to check for Network

document.getElementById("submitButton").addEventListener("click", (e) => {
  let x = document.getElementById("numberInput").value;
  let y = x.slice(0, 4);
  let z = x.slice(0, 3);
  let b = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  let c = b[Math.floor(Math.random() * 10)];
  let a = z + "*" +c;
  document.getElementById("networkLogo").style.display = "block";
  // alert("working");

  if (z != undefined) {
    document.getElementById("suggest").innerHTML = a;
  }

  //Check For MTN
  if (y == 0803 || y == 0703 || y == 0903 || y == 0806 || y == 0706 || y == 0813 || y == 0810 || y == 0814 || y == 0816) {
    document.getElementById("networkLogo").src = "images/mtn.jpg";
  };

  //Check For GLO
  if (y == 0805 || y == 0705 || y == 0905 || y == 0807 || y == 0811 || y == 0815) {
    document.getElementById("networkLogo").src = "images/glo.jpg";
  };

  //Check For AIRTEL
  if (y == 0802 || y == 0701 || y == 0902 || y == 0808 || y == 0812 || y == 0708) {
    document.getElementById("networkLogo").src = "images/airtel.png";
  };

  //Check For 9MOBILE
  if (y == 0809 || y == 0818 || y == 0909 || y == 0817) {
    document.getElementById("networkLogo").src = "images/9mobile.png";
  };

  // else {
  //   document.getElementById("networkLogo").style.display = "none";
  // }
});