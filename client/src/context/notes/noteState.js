import NoteContext from "./noteContext"
import { useState } from "react"
const NoteState = (props)=>{
  const host="http://localhost:5000"

    const [notes, setNotes] = useState([])

    const getAllNotes=async ()=>{
      const response = await fetch(`/api/books/fetchallnotes`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "auth-token" : localStorage.getItem('token')
        },
      });
      const json = await response.json();      
      setNotes(json);
    }
    //add notes
    const addNote=async (title,description)=>{
      const response = await fetch(`/api/books/addnote`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "auth-token" : localStorage.getItem('token')
        },
        body: JSON.stringify({title,author:description}),
      });
      alert('Book successfully added')
      return response.json();
    }

    //delete notes
    const deleteNote=async (id)=>{
      const response = await fetch(`/api/books/deletenote/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          "auth-token" : localStorage.getItem('token')
        },
        // body: JSON.stringify(data),
      });
      return response.json();
    }
    
    return (
        <NoteContext.Provider value={{notes,addNote,deleteNote, getAllNotes}}>
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState