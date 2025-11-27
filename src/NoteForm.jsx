import React, { useState, useEffect } from 'react';

function NoteForm({ currentNote, onSubmit, onCancel }) {
  const [noteText, setNoteText] = useState('');

  useEffect(() => {
    setNoteText(currentNote.text || '');
  }, [currentNote]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (noteText.trim()) {
      onSubmit(noteText.trim());
      setNoteText('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="note-form">
      <input
        type="text"
        value={noteText}
        onChange={(e) => setNoteText(e.target.value)}
        placeholder="Введите заметку на сегодня..."
        autoFocus
      />
      <button type="submit">
        {currentNote.id ? 'Обновить' : 'Добавить'}
      </button>
      {currentNote.id && (
        <button type="button" onClick={onCancel} style={{ marginLeft: '10px' }}>
          Отмена
        </button>
      )}
    </form>
  );
}

export default NoteForm;