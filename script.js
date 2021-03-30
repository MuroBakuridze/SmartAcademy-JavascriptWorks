const inputCalc = document.querySelector('.account'),
      resultCalc = document.querySelector('.result');


function input(i) {
  inputCalc.value = inputCalc.value + i
}

function result() {
  if(eval(inputCalc.value) == undefined){
    resultCalc.value = '0'
    inputCalc.value = ''
  }if(eval(inputCalc.value) == Infinity){
    resultCalc.value = '0'
    inputCalc.value = 'You think I\'m Stupid? :P'
  }
  resultCalc.value = eval(inputCalc.value)
  inputCalc.value = eval(inputCalc.value)
}

function reset() {
  resultCalc.value = '0'
  inputCalc.value = ''
}
