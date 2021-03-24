

var costInput = document.getElementById('cost-input')
var productInput = document.getElementById('product-input')
var addProductBtb = document.getElementById('add-product')
var productList = document.getElementById('product-list')



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
  allProducts.push(inputValue, costValue)
  renderAllItem()
}

addProductBtb.addEventListener('click', handleButtonClick)