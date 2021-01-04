import React, { useState, useEffect } from "react";
import { Form, FormControl, Button } from "react-bootstrap";
import "./App.css";
import Note from "./components/Note";
import { bake_cookie, read_cookie, delete_cookie } from "sfcookies";

const cookie_key = "NOTES";
function App() {
  const [text, setText] = useState("");
  const [notes, setNotes] = useState([]);
  const handleSubmit = (e) => {
    e.preventDefault();
    const newNotes = [...notes, { text }];
    setNotes(newNotes);
    setText("");
    bake_cookie(cookie_key, newNotes);
  };
  useEffect(() => {
    const savedNotes = read_cookie(cookie_key);
    console.log(savedNotes);
    setNotes(savedNotes);
  }, []);
  return (
    <div className="App">
      <h2>Note to self</h2>
      <Form inline onSubmit={handleSubmit}>
        <FormControl value={text} onChange={(e) => setText(e.target.value)} />
        <Button type="submit">Submit</Button>
      </Form>

      {notes.map((note, index) => {
        return <Note key={index} note={note} />;
      })}
    </div>
  );
}

export default App;
