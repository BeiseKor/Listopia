import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaEllipsisV, FaPlus, FaTrash } from 'react-icons/fa';
import './ListManager.css';

function ListCard({ title, onDelete, onEdit }) {
  return (
    <div className="list-card">
      <Link to={`/list/${title}`}>
        <h3>{title}</h3>
      </Link>
      <div className="card-buttons">
        <button className="more-options" onClick={onEdit}>
          <FaEllipsisV />
        </button>
        <button className="delete-button" onClick={onDelete}>
          <FaTrash />
        </button>
      </div>
    </div>
  );
}

function ListManager() {
  const [lists, setLists] = useState([]);

  // Функция добавления нового списка с уникальным названием
  const addList = (title) => {
    if (!lists.includes(title)) {
      setLists([...lists, title]);
    }
  };

  // Функция добавления нового списка через ввод пользователем
  const addNewList = () => {
    const newListTitle = prompt("Введите название нового списка:");
    if (newListTitle) {
      addList(newListTitle);
    }
  };

  // Функция удаления списка
  const deleteList = (index) => {
    const updatedLists = lists.filter((_, i) => i !== index);
    setLists(updatedLists);
  };

  // Функция редактирования названия списка
  const editList = (index) => {
    const newListTitle = prompt("Введите новое название списка:", lists[index]);
    if (newListTitle) {
      const updatedLists = lists.map((list, i) => (i === index ? newListTitle : list));
      setLists(updatedLists);
    }
  };

  return (
    <div className="list-manager">
      <header className="header">
        <h1>SHOPPING LIST</h1>
      </header>

      {/* Заранее определенные кнопки списков */}
      <div className="predefined-lists">
        <button className="list-button" onClick={() => addList("Family")}>Family</button>
        <button className="list-button" onClick={() => addList("Household chemicals")}>Household chemicals</button>
        <button className="list-button" onClick={() => addList("To-Do List")}>To-Do List</button>
        <button className="list-button" onClick={() => addList("Apple pie Recipe Ingredients")}>Apple pie Recipe Ingredients</button>
      </div>

      {/* Контейнер для динамических карточек списков */}
      <div className="list-cards-container">
        {lists.map((title, index) => (
          <ListCard
            key={index}
            title={title}
            onDelete={() => deleteList(index)}
            onEdit={() => editList(index)}
          />
        ))}
      </div>

      {/* Кнопка для добавления нового списка */}
      <button className="add-list-button" onClick={addNewList}>
        <FaPlus /> Новый список
      </button>
    </div>
  );
}

export default ListManager;