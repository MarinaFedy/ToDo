import React from "react";
import NoteItem from "./NoteItem";
import { TransitionGroup, CSSTransition } from "react-transition-group";

const NotesList = ({notes, title, remove}) => {

    if (!notes.length){
        return <h1 style={{textAlign: 'center'}}>Notes not finded</h1>
    }

    return (
        <div>
            <h1 style={{textAlign: 'center'}}>{title}</h1>
            <div>
                <TransitionGroup>
                    {notes.map((note, index) =>
                        <CSSTransition
                        key={note.id}                    
                        timeout={500}
                        classNames="note"
                        >
                            <NoteItem remove={remove} number={index+1} note={note}/>
                        </CSSTransition>
                    )}
                </TransitionGroup>
            </div>
        </div>
    )
}

export default NotesList;