import React, { useContext } from "react";
import noteContext from "../context/notes/noteContext";
export const NoteItem = (props) => {
  const context = useContext(noteContext);
  const {deleteNote} = context
  return (
    <>
    <div className="col-md-3">
      <div className="card my-3">
        <div className="card-body">
          <h5 className="card-title">Book Name : {props.note.title}</h5>
          <p className="card-text">Book Author : {props.note.author}</p>
          <i className="fa-solid fa-trash mx-2" onClick={()=>{deleteNote(props.note._id)}}></i>
        </div>
      </div>
      </div>
    </>
  );
};
