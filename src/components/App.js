import React, {useState} from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";

function App() {
  const [isClass, setIsClass] = useState(false)
  const appClass = isClass ? "App dark" : "App light"
  // replace 'false' with a state variable that can be toggled between true and false
  // this will be used for the Dark Mode Toggle feature
  function handleClass () {
    console.log(appClass)
    setIsClass((appClass) => !appClass)
  }
  
  

  return (
    <div className={appClass}>  
      <header>
        <h2>Shopster</h2>
        <button onClick={handleClass}> {appClass} </button>
      </header>
      <ShoppingList items={itemData} />
    </div>
  );
}

export default App;
