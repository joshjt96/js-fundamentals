// program to generate fibonacci series up to n terms

// take input from the user
// const number = parseInt(prompt('Enter the number of terms: '));
// let n1 = 0, n2 = 1, nextTerm;

// console.log('Fibonacci Series:');

// for (let i = 1; i <= number; i++) {
//     console.log(n1);
//     nextTerm = n1 + n2;
//     n1 = n2;
//     n2 = nextTerm;
// };

const number = parseInt(prompt('Enter the number of terms: '));
let n1 = 0, n2 = 1, nextTerm;

console.log('Fibonacci Series:');

function fibs(num) {
for (let i = 1; i <= number; i++) {
    console.log(n1);
    nextTerm = n1 + n2;
    n1 = n2;
    n2 = nextTerm;
    };
};



// Multiplication assignment: *= multiplies a variable by the value of the right operand and assigns the result to the variable.
let a = 2;

console.log(a *= 3);

function multiply(arr, n) {
    let product = 1;
    for (let i = 0; i < n; i++) {
    product *= arr[i];
    } return product;
};

console.log(multiply());

// Classic example of recursion; factorial: 4! = 4 * 3 * 2 * 1 = 24
function factorial(n) {
    if (n == 1 || n == 0)
    return 1;
    else 
    return n * factorial(n-1)
};

console.log('Factorial:')
console.log(factorial(4));
// This returns 24. How does this work?
// factorial(4)
    // 4 * factorial(3)
        // 3 * factorial(2)
            // 2 * factorial(1)

