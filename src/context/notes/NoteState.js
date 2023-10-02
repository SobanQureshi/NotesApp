import React from "react";
import noteContext from "./noteContext";

const NoteState = (props) =>{
    const state = {
        "name":"Soban",
        "Class":'12'
    }
    return(
        <noteContext.Provider value={state}>
            {props.children}
        </noteContext.Provider>
    )
}

export default NoteState;