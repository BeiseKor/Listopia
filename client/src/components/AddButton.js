import React from 'react';
import './AddButton.css';

function AddButton({ onClick, label }) {
  return (
    <button className="add-button" onClick={onClick}>
      {label}
    </button>
  );
}

export default AddButton;