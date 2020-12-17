var numberList = document.getElementById('list-output');//prendo lista da HTML

for (x = 1; x <= 100; x++) {
  if (x % 3 === 0 && x % 5 !== 0) {
    numberList.innerHTML += '<li>Fizz</li>';//stampo Fizz al posto di numeri divisibili per 3 in HTML
  } else if (x % 3 !== 0 && x % 5 === 0) {
    numberList.innerHTML += '<li>Buzz</li>';//stampo Buzz al posto di numeri divisibili per 5 in HTML
  } else if (x % 3 === 0 && x % 5 === 0) {
    numberList.innerHTML += '<li>FizzBuzz</li>';//stampo FuzzBuzz al posto di numeri divisibili per 3 e per 5 in HTML
  } else {
    numberList.innerHTML += '<li>' + x + '</li>';//stampo numero normale se non ci sono condizioni precedenti soddisfatte
  }
}
