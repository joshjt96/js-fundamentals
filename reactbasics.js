// React components are JavaScript functions that return markup:

function MyButton() {
    return (
      <button>I'm a button</button>
    );
  }

// Now that you’ve declared MyButton, you can nest it into another component:

export default function MyApp() {
    return (
      <div>
        <h1>Welcome to my app</h1>
        <MyButton />
      </div>
    );
  }

// Conditional rendering:
    // This will display the AdminPanel component if user is logged in. If they're not logged in, will display the LoginForm component.
    <div>
    {isLoggedIn ? (
        <AdminPanel />
    ) : (
        <LoginForm />
    )}
    </div>

    // This code in JS if..else statement:

        let content;
        if (isLoggedIn) {
            content = <AdminPanel />;
        } else {
            content = <LoginForm />
        };
        return (
            <div>
                {content}
            </div>
        )

        // Logical && syntax if you don't need else branch:
        <div>
            {isLoggedIn && <AdminPanel />}
        </div>

// Rendering lists
// JS features such as for loop and the array map() function are used to render lists of components.

const products1 = [
    { title: 'Cabbage', id: 1 },
    { title: 'Garlic', id: 2 },
    { title: 'Apple', id: 3 },
  ];

// Inside your component, use the map() function to transform an array of products into an array of <li> items:

const listItems = products1.map(product =>
    <li key={product.id}>
      {product.title}
    </li>
  );
  
  return (
    <ul>{listItems}</ul>
  );

// Notice how <li> has a key attribute. For each item in a list, you should pass a string or a number that uniquely identifies that item among its siblings. 
// Usually, a key should be coming from your data, such as a database ID. 
// React will rely on your keys to understand what happened if you later insert, delete, or reorder the items.
// This will render a list of the products, with the font being magenta for fruit and dark green for vegetables:

const products = [
    { title: 'Cabbage', isFruit: false, id: 1 },
    { title: 'Garlic', isFruit: false, id: 2 },
    { title: 'Apple', isFruit: true, id: 3 },
  ];
  
  export default function ShoppingList() {
    const listItems = products.map(product =>
      <li
        key={product.id}
        style={{
          color: product.isFruit ? 'magenta' : 'darkgreen'
        }}
      >
        {product.title}
      </li>
    );
  
    return (
      <ul>{listItems}</ul>
    );
  }

// Responding to events
// You can respond to events by declaring event handler functions inside your components:

function MyButton() {
    function handleClick() {
      alert('You clicked me!');
    }
  
    return (
      <button onClick={handleClick}>
        Click me
      </button>
    );
  }

    // Notice how onClick={handleClick} has no parentheses at the end! Do not call the event handler function: 
    // you only need to pass it down. React will call your event handler when the user clicks the button.

// Updating the screen
// When you want a component to 'remember' some information and need that information to be able to change, add state to the component.

import { useState } from 'react';
// Declare a state variable inside the component:
function MyButton() {
    const [count, setCount] = useState(0)
}

    // You get two things from useState: the current state (count), and the function that lets you update it (setCount). Naming convention is [something, setSomething]
    // The first time the button is displayed, count will be 0 because you passed 0 to useState(). 
    // When you want to change state, call setCount() and pass the new value to it. Clicking this button will increment the counter:

    function MyButton() {
        const [count, setCount] = useState(0);
      
        function handleClick() {
          setCount(count + 1);
        }
      
        return (
          <button onClick={handleClick}>
            Clicked {count} times
          </button>
        );
      }

    //   If you render the same component multiple times, each will get its own state. However, you'll often need components to share data and always update together.

// Hooks
// Functions starting with use are called Hooks. useState is a built-in Hook provided by React. 
// You can find other built-in Hooks in the React API reference: https://beta.reactjs.org/reference/react
// Hooks are more restrictive than regular functions. You can only call Hooks at the top level of your components (or other Hooks). 
// If you want to use useState in a condition or a loop, extract a new component and put it there.

// To make both MyButton components display the same count and update together, 
// you need to move the state from the individual buttons “upwards” to the closest component containing all of them.
// This will often be App.js.
// First, move the state up from MyButton into MyApp:

export default function MyApp() {
    const [count, setCount] = useState(0);
  
    function handleClick() {
      setCount(count + 1);
    }
  
    return (
      <div>
        <h1>Counters that update separately</h1>
        <MyButton />
        <MyButton />
      </div>
    );
  }

    // MyButton would be in a seperate file called MyButton.js  
  
  function MyButton() {
    // ... we're moving code from here (MyButton.js) to the App.js component ...
  }

    // Then, pass the state down from MyApp to each MyButton, together with the shared click handler. 
    // You can pass information to MyButton using the JSX curly braces, just like you previously did with built-in tags like <img>:

    export default function MyApp() {
        const [count, setCount] = useState(0);
      
        function handleClick() {
          setCount(count + 1);
        }
      
        return (
          <div>
            <h1>Counters that update together</h1>
            <MyButton count={count} onClick={handleClick} />
            <MyButton count={count} onClick={handleClick} />
          </div>
        );
    }

    // The information you pass down like this is called props. 
    // Now the MyApp component contains the count state and the handleClick event handler, and passes both of them down as props to each of the buttons.
    // Finally, change MyButton to read the props you have passed from its parent component:

    function MyButton({ count, onClick }) {
        return (
          <button onClick={onClick}>
            Clicked {count} times
          </button>
        );
      }

    //   When you click the button, the onClick handler fires. Each button’s onClick prop was set to the handleClick function inside MyApp, so the code inside of it runs. 
    // That code calls setCount(count + 1), incrementing the count state variable. The new count value is passed as a prop to each button, so they all show the new value.
    // This is called “lifting state up”. By moving state up, we’ve shared it between components.

