import React, { useState } from "react";
import Item from "./Item";
import Filter from "./Filter";

function ShoppingList({ items }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchText, setSearchText] = useState("");

  function handleCategoryChange(category) {
    setSelectedCategory(category);
  }

  function handleSearchChange(search) {
    setSearchText(search);
  }

  const itemsToDisplay = items.filter((item) => {
    // Filter by category
    const categoryMatch =
      selectedCategory === "All" || item.category === selectedCategory;

    // Filter by search text (case insensitive)
    const searchMatch = item.name
      .toLowerCase()
      .includes(searchText.toLowerCase());

    // Item must match both filters
    return categoryMatch && searchMatch;
  });

  return (
    <div className="ShoppingList">
      <Filter
        onCategoryChange={handleCategoryChange}
        onSearchChange={handleSearchChange}
        search={searchText}
      />
      <ul className="Items">
        {itemsToDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
