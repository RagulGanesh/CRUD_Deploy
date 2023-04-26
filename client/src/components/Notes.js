import React, { useContext, useEffect } from "react";
import noteContext from "../context/notes/noteContext";
import { NoteItem } from "./NoteItem";
import {useNavigate} from 'react-router-dom';
export const Notes = () => {
  let navigate = useNavigate();
  const context = useContext(noteContext);
  const { notes, getAllNotes } = context;


  useEffect(() => {
    if(localStorage.getItem('token')){
      getAllNotes();
    }
    else{
      navigate("/signup")
    }
    
  }, [notes]);


  return (
    <>
      <div className="container">
        <div className="row my-4">
          <h2>Your Books</h2>
          <div className="container">
            {notes.length === 0 && 'No books to display'}
          </div>
          {notes.map((note) => {
            return (
              <NoteItem key={note._id} note={note} />
            );
          })}
        </div>
      </div>
    </>
  );
};
