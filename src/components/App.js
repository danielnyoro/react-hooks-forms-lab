import React, { useState } from "react";
import ShoppingList from "./ShoppingList";
import ItemForm from "./ItemForm";
import itemData from "../data/items";
import Header from "./Header";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [items, setItems] = useState(itemData);

  function onDarkModeClick() {
    setIsDarkMode((isDarkMode) => !isDarkMode);
  }

  function handleItemFormSubmit(newItem) {
    setItems([...items, newItem]);
  }

  return (
    <div className={"App " + (isDarkMode ? "dark" : "light")}>
      <Header onDarkModeClick={onDarkModeClick} isDarkMode={isDarkMode} />
      <ItemForm onItemFormSubmit={handleItemFormSubmit} />
      <ShoppingList items={items} />
    </div>
  );
}

export default App;
