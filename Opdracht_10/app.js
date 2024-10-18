Antwoord

function calculate(calculatorValue) {
  Number1 = Number(document.getElementById("input1").value)
  Number2 = Number(document.getElementById("input2").value)
  console.log(Number1, Number2, calculatorValue)
  if (calculatorValue == 1) {
    Antwoord = Number1 + Number2
  }
  else if (calculatorValue == 2){
    Antwoord = Number1 - Number2
  }
  else if (calculatorValue == 3){
    Antwoord = Number1 * Number2
  }
  else if (calculatorValue == 4) {
    Antwoord = Number1 / Number2
  }
  // Antwoord = Antwoord.toFixed(2) / Antwoord = Math.round(Antwoord)
  document.getElementById("Antwoord").innerText = "Het antwoord is: " + Antwoord
}