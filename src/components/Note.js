import React from 'react';

const Note = ({ id, text, date, deleteNote }) => {
  return (
    <div className="note">
      <h1>
        {text}
      </h1>
      <div>
        <h2>
          {date}
        </h2>
      </div>
      <button className="save" onClick={() => deleteNote(id)}>
        Delete
      </button>
    </div>
  );
};

export default Note;
