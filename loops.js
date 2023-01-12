// for loop
for (let i = 0; i < 5; i++) {
    console.log('Hello world!', i);
};

for (let i = 10; i >= 1; i--) {
    if (i % 2 !== 0) console.log(i);
};

// Fizzbuzz
for (let i = 1; i < 31; i++) {
    if (i % 15 == 0) console.log('Fizzbuzz');
    else if (i % 3 == 0) console.log('Fizz');
    else if (i % 5 == 0) console.log('Buzz');
    else console.log(i);
}

// for
for (let i = 0; i < arr.length; i++) {
  // i is index, arr[i] is element
}


// for..in
for (let i in arr) {
  // i is index, arr[i] is element
}


// for..of
for (let elt of arr) {
  // index not available, elt is element
}


// forEach
arr.forEach((elt, i) => {
  // i is index, elt is element
});