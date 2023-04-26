import React, { useContext, useState } from "react";
import noteContext from "../context/notes/noteContext";


export const Addnote = () => {
    const context = useContext(noteContext);
    const { addNote } = context;
    const [title,setTitle]=useState("")
    const [description,setdescription]=useState("")

    const handleClick=(e)=>{
        e.preventDefault();
        addNote(title,description)
        setTitle("")
        setdescription("")
    }
  return (
    <>
    <div className="container">
          <h2>Add Books</h2>
          <form>
            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">
                Book Title
              </label>
              <input
                type="text"
                className="form-control"
                id="title" name="title"
                aria-describedby="emailHelp" required minLength="5" onChange={e=>{setTitle(e.target.value)}}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputPassword1" className="form-label">
                Author
              </label>
              <input
                type="text"
                id="description" name="description"
                className="form-control" required minLength="5" onChange={e=>{setdescription(e.target.value)}}
              />
            </div>
            <button type="submit" className="btn btn-primary" onClick={handleClick}>
              Add Book
            </button>
          </form>
        </div>
    </>
  )
}
