Budget = 100
Product = 60
TotalProductsPurchased = 0
TotalMoneySpent = 0

document.getElementById("budgetButton2").style.color = "darkred"
document.getElementById("budgetButton3").style.color = "darkred"

function displayBudget() {
  document.getElementById("totalBudget").innerText = "Budget: " + Budget + "$"
}
displayBudget()

async function purchaseProduct(ProductCost, purchaseButton){
  Cost = Number(ProductCost)
  if (Cost <= Budget){
    Budget = Budget - Cost
    displayBudget()
    document.getElementById("displayMessage").style.color = "green"
    document.getElementById("displayMessage").innerText = "Product gekocht voor: " + Cost + "$!"
    TotalProductsPurchased = TotalProductsPurchased + 1
    TotalMoneySpent += Cost
    document.getElementById("productCounter").innerText = "U heeft " + TotalProductsPurchased + " producten gekocht die in totaal " + TotalMoneySpent + "$ kosten!"
    await new Promise(resolve => setTimeout(resolve, 2000))
    if (document.getElementById("displayMessage").innerText = "Product gekocht voor: " + Cost + "$!"){
      document.getElementById("displayMessage").innerText = ""
      console.log(document.getElementById("displayMessage").innerText)
    }
  }
  else {
    document.getElementById("displayMessage").style.color = "red"
    document.getElementById("displayMessage").innerText = "Helaas, te weinig geldt!"
    await new Promise(resolve => setTimeout(resolve, 2000))
    if (document.getElementById("displayMessage").innerText = "Helaas, te weinig geldt!"){
      document.getElementById("displayMessage").innerText = ""
  }
}
}

async function addingBudget(Amount, budgetButton){
  if (budgetButton.value != "Not unlocked") {
    Budget = Budget + Amount
    displayBudget()
    if (Budget > 250){
      document.getElementById("budgetButton3").style.color = "black"
      document.getElementById("budgetButton3").value = "Unlocked"
    }
    else if (Budget > 110){
      document.getElementById("budgetButton2").style.color = "black"
      document.getElementById("budgetButton2").value = "Unlocked"
    }
  }
  else {
    console.log("Not unlocked")
    document.getElementById("displayLocked").innerText = "U heeft meer budget nodig om deze knop te gebruiken."
    await new Promise(resolve => setTimeout(resolve, 4000))
    document.getElementById("displayLocked").innerText = ""
  }
} 
customProductCost = null
customProductInput = document.getElementById("customProductInput")

function customProduct(numberValue){
  if (numberValue == 1) {
    if (customProductCost) {
      console.log("Purchasing product 4")
      console.log(customProductCost)
      purchaseProduct(customProductCost, document.getElementById("product4"))
    }
    else if (customProductCost == null) {
      console.log("Making input field visible")
      customProductInput.style.visibility = "visible"
      console.log(customProductInput.style.visibility)
    }
    }
  else {
    console.log("Editing cost")
    if (customProductInput.value > 0){
      customProductCost = customProductInput.value
    }
    else {
      customProductCost = 1
    }
    document.getElementById("product4").innerText = "Eigen product (" + customProductCost + ")"
    customProductInput.style.visibility = "hidden"
    customProductInput.value = null
  }
}