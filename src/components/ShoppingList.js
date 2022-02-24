import React, {useState} from "react";
import Item from "./Item";

function ShoppingList({ items }) {
  // possibly update this const for useState
  const [selectedCategory, setSelectedCategory] = useState("All")

  function filterChange (event) {
    setSelectedCategory(event.target.value)
    console.log("Event target: ", event.target.value)
    console.log("Selected Category: ", selectedCategory)
  }

  const updatedItems = items.filter((item) => {
      if (selectedCategory === "All") {
        return true
      }
      else {
        return item.category === selectedCategory
    }
  })

  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select onChange={filterChange} name="filter">
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
        {updatedItems.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
