import React, { useEffect, useState } from 'react';
import NotesList from './components/NotesList';
import { nanoid } from 'nanoid';
import Searchbar from './components/Searchbar';

const App = () => {
  const date = new Date().toLocaleDateString();
  const [data, setData] = useState([
    {
      id: nanoid(),
      text: 'hello this is a note',
      date: date
    },
    {
      id: nanoid(),
      text: 'hello this is a note',
      date: date
    },
    {
      id: nanoid(),
      text: 'hello this is a note',
      date: date
    },
    {
      id: nanoid(),
      text: 'hello this is a note',
      date: date
    },
    {
      id: nanoid(),
      text: 'hello this is a note',
      date: date
    },
    {
      id: nanoid(),
      text: 'hello this is a note',
      date: date
    }
  ]);
  const [searchText, setSearchText] = useState('');

  useEffect(
    () => {
      localStorage.setItem('react-notes-app-data', JSON.stringify(data));
    },
    [data]
  );

  useEffect(() => {
    const localdata = JSON.parse(localStorage.getItem('react-notes-app-data'));

    if (localdata) {
      setData(localdata);
    }
  }, []);

  function addNote(noteText) {
    const newNote = {
      id: nanoid(),
      text: noteText,
      date: new Date().toLocaleDateString()
    };

    const newData = [...data, newNote];

    setData(newData);
  }

  function deleteNote(id) {
    const newNote = data.filter(data => data.id !== id);
    setData(newNote);
  }

  function handleSearchNote(text) {
    // console.log(text);
    setSearchText(text);
  }

  return (
    <div>
      <Searchbar handleSearchNote={handleSearchNote} />
      <NotesList
        data={
          searchText
            ? data.filter(data => {
                data.text.toLowerCase().includes(searchText);
              })
            : data
        }
        addNote={addNote}
        deleteNote={deleteNote}
      />
    </div>
  );
};

export default App;
