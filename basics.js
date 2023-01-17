// JavaScript basic terms/concepts

// Object: A JavaScript object is a data structure that stores a collection of properties (see line 35). Examples:

    // Variable:
    const car = 'Volkswagen'

    // Object (a variable with multiple key:value pairs):
    const carInfo = {
        make: "Volkswagen",
        model: "Polo",
        colour: "Black",
        seats: 5
    };

    // Array (variable that can hold more than one value):
    const carArray = ["Volkswagen", "BMW", "Porsche"]

    // Array of objects:
    const carsArray = [
        {
            make: "BMW",
            model: "4 Series",
            colour: "Grey",
            seats: 4
        },
        {
            make: "Porsche",
            model: "911",
            colour: "Silver",
            seats: 2
        }
    ];

// Property: A member of an object that associates a key with a value. Example: 
// The object carInfo above has four properties. The first property has "make" as the key and "Volkswagen" as the value.

// Method: a function which is a property of an object, an action that can be performed on objects. Two kinds: instance methods which are built-in tasks performed by an object instance,
// and static methods which are tasks that are called directly on an object constructor. Example using toUpperCase() method:

    const sentence = 'The quick brown fox jumps over the lazy dog.';

    console.log(sentence.toUpperCase());
    // Expected output: "THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG."
    // Use MDN docs for full list of methods.

    // this: in JS, the this keyword refers to an object. The object it refers to depends on how this is being invoked (used or called).
    // In an object method, this refers to the object.
    // Alone, this refers to the global object.
    // In a function, this refers to the global object.
    // In a function, in strict mode, this is undefined.
    // In an event, this refers to the element that received the event.
    // Methods like call(), apply(), and bind() can refer this to any object.

    // Example of adding a method to an object with this:

    const person = {
        firstName: "John",
        lastName: "Doe",
        id: 5566,
        fullName: function() {
          return this.firstName + " " + this.lastName;
        }
    };

    person.name = function () {
        return this.firstName + " " + this.lastName;
    };

// Functions: A block of code designed to perform a particular task. A JS function is executed when 'something' (e.g. a page load or an event listener) invokes it/calls it. Example:

const firstNum = prompt('First Number')
const secondNum = prompt('Second Number')

function multiply(number1, number2) {
  return number1 * number2;
}
document.getElementById("demo").innerHTML = multiply(firstNum, secondNum);

    // Function parameters: the names listed in brackets in the function definition after the name of the function. 
    // These are arguments which are the values passed to and recieved by the function. In the multiply function above, (number 1, number2) are the parameters.
    // When the function is called in the DOM selector, the firstNum and secondNum variables are passed to the function as parameters, so the function knows to use these as number1 and 
    // number2.

// Asynchronous code 
// Explain what a callback is
// Explain what a promise is
// Explain the circumstances under which promises are better than callbacks
// Explain what the .then() function does

