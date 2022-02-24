import React, {useState} from "react";

function Item({ name, category }) {
  const [isLiClass, setIsLiClass] = useState(false);
  const itemClass = isLiClass ? "in-cart": "";
  const [isButtonText, setIsButtonText] = useState(true);
  const buttonText = isButtonText ? "Add to Cart" : "Remove from Cart"

  function changeClass () {
    console.log(itemClass)
    setIsLiClass((itemClass) => !itemClass)
  }

  function changeButtonText () {
    console.log(buttonText)
    setIsButtonText((buttonText) => !buttonText)

  }
  
  return (
    <li className={itemClass}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button onClick={() => {
        changeClass();
        changeButtonText();
        }
      }
        className="add">{buttonText}
        </button>
    </li>
  );
}

export default Item;
