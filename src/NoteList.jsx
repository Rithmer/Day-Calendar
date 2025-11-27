import React from 'react';

function NoteList({ notes, onEdit, onDelete }) {
  return (
    <ul>
      {notes.map(note => (
        <li key={note.id}>
          {note.text}
          <button onClick={() => onEdit(note)}>Редактировать</button>
          <button onClick={() => onDelete(note.id)}>Удалить</button>
        </li>
      ))}
    </ul>
  );
}

export default NoteList;