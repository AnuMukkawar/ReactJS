import './App.css';
import Navbar from "./navbar.js";
import Card from "./card.js";
import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  const handleCart = () => {
    return setCount(count + 1);
  };

  const removeCart=()=>{
    return setCount(count - 1);
  };
  let arr=[{
    name:"Fancy Product",
    price: "$40.00-$80.00",
    buttonname: "View Options"
  },
  {
    name:"Special Item",
    price:"$18.00",
    buttonname:"Add to cart"
  },
  {
    name:"Sale Item",
    price:"$25.00",
    buttonname:"Add to cart"
  },
  {
    name:"Popular Item",
    price:"$40.00",
    buttonname:"Add to cart"
  },
  {
    name:"Sale Item",
    price:"$25.00",
    buttonname:"Add to cart"
  },
  {
    name:"Fancy Product",
    price: "$120.00-$280.00",
    buttonname: "View Options"
  },
  {
    name:"Special Item",
    price:"$18.00",
    buttonname:"Add to cart"
  },
  {
    name:"Popular Item",
    price:"$40.00",
    buttonname:"Add to cart"
  }
  ]
  let name= count>5 && count!==0 ? "Remove from cart" : "Add to cart"
  return (
    <div className="App">
      <Navbar count={count} />
      <div className='container'>
        {arr.map((value,index)=>{
            return <Card handleCart={handleCart} removeCart={removeCart} key={index} count={count} name={value.name} price={value.price} buttonname={name} />
        })}
      </div> 
    </div>
  );
}

export default App;
