function startApp() {
    // Your entire app should not necessarily be coded inside this 
    // single function (though there's no penalty for that), 
    // so create and use/call additional functions from here
  
    // pls remove the below and make some magic in here!
    console.log('make magic in here!');
  
let numberInput = document.querySelector("#numberInput");
let submitButton = document.querySelector("#submitButton");
let input_n = numberInput.value;
let reg = /(?:^(\+234|234|0)((90)([1-9])|((70)([1-9]))|((80)([2-9]))|((81)([0-9])))([0-9]{7})$)/;
let res = document.querySelector(".res");

submitButton.addEventListener("click",onClick);

function onClick(){
   //this helps us check that the input follows the guidelines for nigerian phone numbers
   let outputValue = reg.exec(numberInput.value);
   if (!outputValue){
    res.textContent =  `${numberInput.value} is not a valid number` 
   }
   else{
    res.textContent = `${numberInput.value} is a valid number`
   }
   numberInput.value = "";
}


    const header = document.querySelector('h2');
    if(header) {
      header.textContent = 'make some magic here!!';
    }
  };
  
  // ======= DO NOT EDIT ============== //
  export default startApp;
  // ======= EEND DO NOT EDIT ========= //