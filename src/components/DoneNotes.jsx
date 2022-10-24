import React from "react";
import DoneItem from "./DoneItem";


const DoneNotes = ({notes}) => {
      console.log(notes)  
    return(
        <div style={{border: '2px solid black'}}>
            
            <div style={{width:300}} >
                {notes.map((note) => {                                        
                    <DoneItem  note={note}/>                                                                                                                        
                })}
            </div>
            
        </div>
    )
}

export default DoneNotes;