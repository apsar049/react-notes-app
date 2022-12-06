import AddNote from './AddNote';
import Note from './Note';

const NotesList = ({ data, addNote, deleteNote }) => {
  return (
    <div className="notes-list">
      {data.map(data =>
        <Note
          id={data.id}
          text={data.text}
          date={data.date}
          deleteNote={deleteNote}
        />
      )}
      <AddNote addNote={addNote} />
    </div>
  );
};

export default NotesList;
