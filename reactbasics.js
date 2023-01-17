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
    
