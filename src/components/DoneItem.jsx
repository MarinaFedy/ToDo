import React from "react";

const DoneItem = ({note}) => {
    
    return (
        <div key = {note.id}>
            <strong>{note.title}</strong>
            <div>
                {note.body}                        
            </div>
            <div>
                {note.deadline}
            </div>
        </div>
    )

}

export default DoneItem;