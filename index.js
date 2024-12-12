//go to the index.html and take the value of what you wanted to manipuled it with javascript by using 
// the variable const and give the name of the variabel before assign that variable a value
// documen.getElementById("put the html value id here or class value").or you can use decument.getElementClass(""). 

const buttonEl = document.getElementById("roll-button");
const diceEl = document.getElementById("dice");
const rollHistoryEl = document.getElementById("roll-history");
let historyList =  [];


// here is how we create a function for manipilate the different variable create that coming from html
// after create a funtion we call it now for print out the output on the browser 

function rollDice() {
  const rollResult = Math.floor(Math.random() * 6) + 1;
  const diceFace = getDiceFace(rollResult);
  diceEl.innerHTML = diceFace;
  historyList.push(rollResult);
  updateRollHistory();

}

function updateRollHistory(){
    rollHistoryEl.innerHTML = " ";
    for(let i = 0 ; i < historyList.length; i++){

        const ListItem = document.createElement("li")
    ListItem.innerHTML  = `Roll ${i + 1}: <span> ${getDiceFace(historyList[i])}</span>`;

//    appendchild is going to add listItem
rollHistoryEl.appendChild(ListItem)

    }

}

function getDiceFace(rollResult) {
  switch (rollResult) {
    case 1:
      return "&#9856;";
    case 2:
      return "&#9857;";
    case 3:
      return "&#9858;";
    case 4:
      return "&#9859;";
    case 5:
      return "&#9860;";
    case 6:
      return "&#9861;";
    default:
      return "";
  }
}

buttonEl.addEventListener("click", () => {
  diceEl.classList.add("roll-Animation");
  setTimeout(() => {
    diceEl.classList.remove("roll-Animation");
    rollDice();
  }, 1000);
});
