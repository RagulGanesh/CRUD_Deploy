import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { Home } from "./components/Home";
import { Login } from "./components/Login";
import { Signup } from "./components/Signup";
import NoteState from "./context/notes/noteState";
import { Addnote } from "./components/Addnote";

function App() {
  return (
    <>    
    <NoteState>
    <Router>
      <Navbar/>
        <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route exact path="/addnotes" element={<Addnote/>}/>
          <Route exact path="/login" element={<Login/>}/>
          <Route exact path="/signup" element={<Signup/>}/>
        </Routes>
    </Router>
    </NoteState>
    
    </>
  );
}

export default App;
