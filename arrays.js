var chocolateBars = [
  'snickers',
  'hundred grand',
  'kitkat',
  'skittles'
]

function addElementToBeginningOfArray(array, element){
  console.log(array);
  var arr2 = [element, ...array]
  return arr2

}

function destructivelyAddElementToBeginningOfArray(array, element) {
  //array
  //array.push(element)
  array.unshift(element)
  return array
}

function addElementToEndOfArray(array, element) {
  var arr2 = [...array, element]
  return arr2
}

function destructivelyAddElementToEndOfArray(array, element) {
  array.push(element)
  return array
}

function accessElementInArray(array, index) {
  var arr2 = [array]
  return arr2[index]
}
