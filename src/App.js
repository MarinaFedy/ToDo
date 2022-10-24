import React, { useState } from 'react';
import NotesList from './components/NotesList';
import './styles/index.css';
import NoteForm from './components/NoteForm';
import NotesFilter from './components/NotesFilter';
import MyModal from './components/UI/MyModal/MyModal';
import MyButton from './components/UI/button/MyButton';
import { useNotes } from './components/hooks/useNotes';
import DoneNotes from './components/DoneNotes';



function App() {

  const [notes, setNotes] = useState([]);
  const [doneNotes, setDoneNotes] = useState([]);
  const [filter, setFilter] = useState({sort: '', query: '', deadline: ''})
  const [modal, setModal] = useState(false)
  const sortedAndSearchedNotes = useNotes(notes, filter.sort, filter.query)

  const createNote =(newNote) => {
    setNotes([...notes, newNote])
    setModal(false)
  }

  const removeNote = (note) =>{
    //setNotes(notes.filter(n => n.id !== note.id))
    setDoneNotes([...doneNotes, note])
  }
  
  return (    
    <div className='App'>

      <MyButton style={{marginTop: 30}} onClick={() => {setModal(true)}}>
        Create note
      </MyButton>

      <hr style={{margin: "15px 0"}}></hr> 

      <MyModal visible={modal} setVisible={setModal}>
        <NoteForm create={createNote}/>
      </MyModal>           

      <NotesFilter filter={filter} setFilter={setFilter}/>        
      <hr style={{margin: "15px 0"}}></hr> 

      <div style={{display: 'flex', justifyContent: 'space-between'}}>
        <NotesList remove={removeNote} notes={sortedAndSearchedNotes} title="List notes"/>
        <DoneNotes notes={doneNotes}/>
      </div>

    </div>
  )
}

export default App;
