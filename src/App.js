import React, { useState, useEffect } from 'react';
import DateDisplay from './DateDisplay';
import NoteForm from './NoteForm';
import NoteList from './NoteList';
import './App.css';

function App() {
  const [notes, setNotes] = useState([]);
  const [currentNote, setCurrentNote] = useState({ id: null, text: '' });

  useEffect(() => {
    const storedNotes = JSON.parse(localStorage.getItem('notes')) || [];
    setNotes(storedNotes);
  }, []);

  useEffect(() => {
    localStorage.setItem('notes', JSON.stringify(notes));
  }, [notes]);

  const addOrUpdateNote = (noteText) => {
    if (currentNote.id) {
      setNotes(notes.map(note => 
        note.id === currentNote.id ? { ...note, text: noteText } : note
      ));
      setCurrentNote({ id: null, text: '' });
    } else {
      const newNote = { id: Date.now(), text: noteText };
      setNotes([...notes, newNote]);
    }
  };

  const deleteNote = (id) => {
    setNotes(notes.filter(note => note.id !== id));
  };

  const editNote = (note) => {
    setCurrentNote(note);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Календарь дня</h1>
        <DateDisplay />
      </header>
      <main>
        <NoteForm 
          currentNote={currentNote} 
          onSubmit={addOrUpdateNote} 
          onCancel={() => setCurrentNote({ id: null, text: '' })} 
        />
        <NoteList notes={notes} onEdit={editNote} onDelete={deleteNote} />
      </main>
    </div>
  );
}

export default App;