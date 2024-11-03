import React from 'react';
import { FaEllipsisV, FaTrash } from 'react-icons/fa';
import './ListCard.css';

// Компонент для отдельной карточки списка
function ListCard({ title, onDelete, onEdit }) {
  return (
    <div className="list-card">
      <h3 className="list-card-title">{title}</h3>
      <div className="card-buttons">
        <button className="more-options" onClick={onEdit} title="Edit">
          <FaEllipsisV />
        </button>
        <button className="delete-button" onClick={onDelete} title="Delete">
          <FaTrash />
        </button>
      </div>
    </div>
  );
}

export default ListCard;