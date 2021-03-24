

var costInput = document.getElementById('cost-input')
var productInput = document.getElementById('product-input')
var addProductBtb = document.getElementById('add-product')
var productList = document.getElementById('product-list')


var prod;
var cost;

var allProducts = [
]

var renderAllItem = function () {
  productList.innerText = '';


  allProducts.forEach(function (item) {
    var itemLi = document.createElement('li')
    itemLi.innerText = item
    productList.appendChild(itemLi)

  })
  productInput.value = '';
  costInput.value = '';
}

var handleButtonClick = () => {
  var inputValue = productInput.value
  var costValue = costInput.value
  allProducts.push({prod: inputValue, cost:costValue})
  renderAllItem(allProducts=[{prod: inputValue,cost:costValue}])
  // renderAllItem(prod,cost)
  console.log(allProducts)
  console.log(inputValue,costValue)
}



addProductBtb.addEventListener('click', handleButtonClick)

var finalResultBtn = document.getElementById('final-result')
var totalCost = document.getElementById('total-cost')

var numbers = allProducts


finalResultBtn.addEventListener('click', () => {
  totalCost.innerText = numbers.reduce((total, current) => total + current, 0)
})
