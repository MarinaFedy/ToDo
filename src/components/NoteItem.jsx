import React from "react";
import MyButton from './UI/button/MyButton';

const NoteItem = (props) =>{  
    
    return (
             
            <div className='note'>
                <div className='note__content'>
                    <strong>{props.number}.{props.note.title}</strong>
                    <div>
                        {props.note.body}                        
                    </div>
                    <div>
                        {props.note.deadline}
                    </div>
                </div>
                <div className='note__btns'>
                    <MyButton onClick={() => {
                        props.remove(props.note)                        
                    }}>
                        Done
                    </MyButton>
                </div>
            </div>        
    )

}

export default NoteItem;