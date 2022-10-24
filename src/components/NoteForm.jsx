import React, {useState} from "react";
import MyButton from './UI/button/MyButton';
import MyInput from './UI/inputs/MyInput';


const NoteForm = ({create}) =>{

      const [note, setNote] = useState({title: '', body:''})
    
      const addNewNote = (e) => {    
        e.preventDefault()
        const newNote = {
            ...note, id: Date.now()
        }
        create(newNote) 
        setNote({title: '', body:'', deadline: ''})  
      }

      const minDate = () =>{
        let dtToday = new Date();
    
        let month = dtToday.getMonth() + 1;
        let day = dtToday.getDate();
        let year = dtToday.getFullYear();
    
        if(month < 10)
            month = '0' + month.toString();
        if(day < 10)
            day = '0' + day.toString();
    
        let minDate = year + '-' + month + '-' + day;    
        return minDate
    }
    return(
        <form>

            <MyInput 
              value={note.title}
              onChange={e=>setNote({...note, title: e.target.value})}
              type='text'
              placeholder='Note title'          
            />

            <MyInput
              value={note.body}
              onChange={e=>setNote({...note, body: e.target.value})}
              type='text'
              placeholder='Note'
            />

            <MyInput
              value={note.deadline}
              onChange={e=>setNote({...note, deadline: e.target.value})}
              type='date'
              min={minDate()}
              placeholder='Deadline'
            />

            <MyButton onClick={addNewNote}>Create</MyButton>
            
      </form>
    )
}

export default NoteForm;