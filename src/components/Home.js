import React from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import noteContext from "../context/notes/noteContext";
// import NoteState from "../context/notes/NoteState";
export default function Home() {
  const name = useContext(noteContext)
  return (
    <div>
      <h1>This is {name.name}</h1>
    </div>
  );
}
