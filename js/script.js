for (var x = 1; x <= 100; x++) {
  if (x % 3 === 0 && x % 5 !== 0) { //x divisibile per 3 e non per 5
    console.log('Fizz');
  } else if (x % 5 === 0 && x % 3 !== 0) {//x divisibile per 5 e non per 3
    console.log('Buzz');
  } else if (x % 3 === 0 && x % 5 === 0) {//x divisibile sia per 3 che per 5
    console.log('FizzBuzz');
  } else {
    console.log(x);
  }
}
