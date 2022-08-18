//Function to check for Network

document.getElementById("submitButton").addEventListener("click", (e) => {
  e.preventDefault();

  let myInput = document.getElementById("numberInput");
  let x = document.getElementById("numberInput").value;
  let y = x.slice(0, 4);


  if (!myInput.checkValidity()) {
    document.getElementById("detect").innerHTML = myInput.validationMessage;
  } else {
    //Check For MTN
    if (y == "0803" || y == "0703" || y == "0903" || y == "0806" || y == "0706" || y == "0813" || y == "0810" || y == "0814" || y == "0816") {
      document.getElementById("networkLogo").style.display = "block";
      document.getElementById("networkLogo").src = "images/mtn.jpg";
    };

    //Check For GLO
    if (y == "0805" || y == "0705" || y == "0905" || y == "0807" || y == "0811" || y == 0815) {
      document.getElementById("networkLogo").style.display = "block";
      document.getElementById("networkLogo").src = "images/glo.jpg";
    };

    //Check For AIRTEL
    if (y == "0802" || y == "0701" || y == "0902" || y == "0808" || y == "0812" || y == "0708") {
      document.getElementById("networkLogo").style.display = "block";
      document.getElementById("networkLogo").src = "images/airtel.png";
    };

    //Check For 9MOBILE
    if (y == "0809" || y == "0818" || y == "0909" || y == "0817") {
      document.getElementById("networkLogo").style.display = "block";
      document.getElementById("networkLogo").src = "images/9mobile.png";
    };
  }

});


/* FUNCTION TO AUTO - SUGGESTION */

// document.getElementById("numberInput").addEventListener("keypress", () => {
  // alert("okay")
  // let x = document.getElementById("numberInput").value;
  // let z = x.slice(0, 1);
  // let b = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
//   let c = b[Math.floor(Math.random() * 10)];
//   let d = b[Math.floor(Math.random() * 10)];
//   let e = b[Math.floor(Math.random() * 10)];
//   let f = b[Math.floor(Math.random() * 10)];
//   let g = b[Math.floor(Math.random() * 10)];
//   let h = b[Math.floor(Math.random() * 10)];
//   let i = b[Math.floor(Math.random() * 10)];
//   let j = b[Math.floor(Math.random() * 10)];
//   let k = b[Math.floor(Math.random() * 10)];
//   let l = b[Math.floor(Math.random() * 10)];
//   let a = z + "*" + c + d + e + f + g + h + i + j + k + l;

//   if (z != "undefined" && z != "") {
//     document.getElementById("suggest").innerHTML = a;

//     setTimeout(myShow, 2000)
//     setInterval(myBlank, 4000)

//     function myBlank() {
//       document.getElementById("suggest").style.display = "none";
//     }

//     function myShow() {
//       document.getElementById("suggest").style.display = "block";
//     }
//   }
// })