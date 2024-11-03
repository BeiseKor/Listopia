import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import ListCard from './components/ListCard';
import AddButton from './components/AddButton';
import ShoppingListDetail from './components/ShoppingListDetail';

function App() {
  const initialShoppingLists = [
    { name: 'Family', items: ['Doritos', 'Nuts', 'Haribo', 'Coca Cola'] },
    { name: 'Household chemicals', items: [] },
    { name: 'To-Do List', items: [] },
    { name: 'Apple Pie Recipe Ingredients', items: [] }
  ];

  const [shoppingLists, setShoppingLists] = useState(initialShoppingLists);

  // Функция для добавления нового списка с проверкой на дубликаты
  const addNewList = () => {
    const newListName = prompt('Введите название нового списка:');
    if (newListName) {
      if (!shoppingLists.some(list => list.name === newListName)) {
        setShoppingLists([...shoppingLists, { name: newListName, items: [] }]);
        alert(`Список "${newListName}" успешно добавлен.`);
      } else {
        alert('Список с таким названием уже существует.');
      }
    } else {
      alert('Название списка не может быть пустым.');
    }
  };

  return (
    <Router>
      <div className="app">
        <Sidebar />
        <div className="main-content">
          <Header />
          <Routes>
            {/* Главная страница со списками */}
            <Route 
              path="/" 
              element={
                <div className="shopping-lists">
                  {shoppingLists.map((list, index) => (
                    <ListCard key={index} title={list.name} linkTo={`/items/${list.name}`} />
                  ))}
                  <AddButton onClick={addNewList} label="+ New List" />
                </div>
              } 
            />
            {/* Динамическая страница списка */}
            {shoppingLists.map((list, index) => (
              <Route 
                key={index} 
                path={`/items/${list.name}`} 
                element={
                  <ShoppingListDetail 
                    list={list} 
                    onAddItem={(item) => {
                      setShoppingLists(shoppingLists.map(l =>
                        l.name === list.name ? { ...l, items: [...l.items, item] } : l
                      ));
                    }} 
                  />
                } 
              />
            ))}
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;