import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';

const initialItems = [
  { category: 'Snacks', items: [{ name: 'Doritos 3', checked: false }, { name: 'Nuts', checked: false }, { name: 'Haribo', checked: false }] },
  { category: 'Drinks', items: [{ name: 'Coca Cola', checked: false }, { name: 'Melk', checked: false }] },
  { category: 'Fruits', items: [{ name: 'Apple 4 kg', checked: false }, { name: 'Kiwi', checked: false }, { name: 'Orange', checked: false }, { name: 'Mango', checked: false }] },
  { category: 'Others', items: [{ name: 'Onion 3 kg', checked: true }, { name: 'Salmon', checked: true }, { name: 'Pepper', checked: true }] }
];

function ShoppingListDetail() {
  const { name } = useParams(); // Получаем название списка из параметров маршрута
  const [items, setItems] = useState(initialItems);

  const toggleCheck = (categoryIndex, itemIndex) => {
    const updatedItems = [...items];
    updatedItems[categoryIndex].items[itemIndex].checked = !updatedItems[categoryIndex].items[itemIndex].checked;
    setItems(updatedItems);
  };

  return (
    <div className="shopping-list-detail">
      <header className="header">
        <Link to="/" className="back-button">←</Link>
        <h1>{name}</h1>
      </header>

      {items.map((category, categoryIndex) => (
        <div key={category.category} className="category">
          <h2>{category.category}</h2>
          <div className="items">
            {category.items.map((item, itemIndex) => (
              <div key={item.name} className="item">
                <input
                  type="checkbox"
                  checked={item.checked}
                  onChange={() => toggleCheck(categoryIndex, itemIndex)}
                />
                <span className={item.checked ? 'checked' : ''}>{item.name}</span>
              </div>
            ))}
          </div>
        </div>
      ))}

      <button className="add-item-button">+ Add Item</button>
    </div>
  );
}

export default ShoppingListDetail;