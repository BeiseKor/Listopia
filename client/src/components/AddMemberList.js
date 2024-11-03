import React, { useState } from 'react';

function MemberList() {
  // Начальные данные для участников
  const [members, setMembers] = useState([
    { id: 1, name: 'John Doe' },
    { id: 2, name: 'Jane Smith' },
    { id: 3, name: 'Chris Evans' },
  ]);

  // Функция для получения инициалов
  const getInitials = (name) => {
    return name
      .split(' ')
      .map((n) => n[0])
      .join('')
      .toUpperCase();
  };

  // Функция для добавления нового участника
  const addMember = () => {
    const newName = prompt('Введите имя нового участника:');
    if (newName) {
      setMembers([...members, { id: members.length + 1, name: newName }]);
    }
  };

  return (
    <div className="member-list">
      {members.map((member) => (
        <div key={member.id} className="member-circle">
          {getInitials(member.name)}
        </div>
      ))}
      <div className="member-circle add-member" onClick={addMember}>
        +
      </div>
    </div>
  );
}

export default MemberList;