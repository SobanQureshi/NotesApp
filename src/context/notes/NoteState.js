import React,{useState} from "react";
import noteContext from "./noteContext";

const NoteState = (props) =>{
  const host = 'http://localhost:5000'
    const initialNotes = [
        {
          "_id": "65128bf080b8d3e4068c54",
          "user": "650be4d10907cdffdaf647",
          "title": "My title",
          "description": "Hello how are you",
          "tag": "general",
          "date": "2023-09-26T07:44:48.601Z",
          "__v": 0
        },
        {
          "_id": "651ba8598829d5a87f4b37",
          "user": "650be4d1d07cdffdaf647",
          "title": "Note",
          "description": "Third note",
          "tag": "general",
          "date": "2023-10-03T05:35:22.952Z",
          "__v": 0
        },
        {
          "_id": "651ba81a5929d587f4b37",
          "user": "650be4d1cd07cdffdaf647",
          "title": "Note",
          "description": "Third note",
          "tag": "general",
          "date": "2023-10-03T05:35:22.952Z",
          "__v": 0
        },
        {
          "_id": "651ba81a59885a87f4b37",
          "user": "650be4d109cd07cfdaf647",
          "title": "Note",
          "description": "Third note",
          "tag": "general",
          "date": "2023-10-03T05:35:22.952Z",
          "__v": 0
        },
        {
          "_id": "651ba81a5829d5a87f437",
          "user": "650be4d109cd07ffdaf647",
          "title": "Note",
          "description": "Third note",
          "tag": "general",
          "date": "2023-10-03T05:35:22.952Z",
          "__v": 0
        },
        {
          "_id": "651ba81a589d5a87f4b37",
          "user": "650be4d109cd07ffdaf647",
          "title": "Note",
          "description": "Third note",
          "tag": "general",
          "date": "2023-10-03T05:35:22.952Z",
          "__v": 0
        },
        {
          "_id": "651ba81a5988d87f4b37",
          "user": "650be4d109cd07cdffdaf647",
          "title": "Note",
          "description": "Third note",
          "tag": "general",
          "date": "2023-10-03T05:35:22.952Z",
          "__v": 0
        }
      ]
      const [notes, setNotes] = useState(initialNotes)
      //Get notes
      const getNotes = async()=>{
        const response = await fetch(`${host}/api/notes/fetchnotes`,{
          method:'GET',
          headers:{
            'Content-Type':'application/json',
            'auth-token':'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjUwYmU0ZDEwOWNkMDdjZGZmZGFmNjQ3In0sImlhdCI6MTY5NTYyMzAwNX0.8qbFsKj0t1-N7Ho0nBI-hkQsdXXXAvtxUXIUuz2BrGo'
          },
          // body:JSON.stringify({title,description,tag})
          
        })
        const json = await response.json()
        console.log(json);
        setNotes(json)
       
      }


      //Add note
      const addNote = async(title,description,tag)=>{
        const response = await fetch(`${host}/api/notes/addnotes`,{
          method:'POST',
          headers:{
            'Content-Type':'application/json',
            'auth-token':'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjUwYmU0ZDEwOWNkMDdjZGZmZGFmNjQ3In0sImlhdCI6MTY5NTYyMzAwNX0.8qbFsKj0t1-N7Ho0nBI-hkQsdXXXAvtxUXIUuz2BrGo'
          },
          body:JSON.stringify({title,description,tag})
          
        })
        const json = response.json()
        console.log(json)
        // console.log("Adding a new note");
       const note = {
          "_id": "651ba81a598829d587f37",
          "user": "650be4d109cd07cdffdaf647",
          "title": title,
          "description": description,
          "tag": tag,
          "date": "2023-10-03T05:35:22.952Z",
          "__v": 0
        }
        setNotes(notes.concat(note))
      }

      //Delete Note
      const deleteNote = async(id) =>{
        const response = await fetch(`${host}/api/notes/deletenotes/${id}`,{
          method:'DELETE',
          headers:{
            'Content-Type':'application/json',
            'auth-token':'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjUwYmU0ZDEwOWNkMDdjZGZmZGFmNjQ3In0sImlhdCI6MTY5NTYyMzAwNX0.8qbFsKj0t1-N7Ho0nBI-hkQsdXXXAvtxUXIUuz2BrGo'
          },
          // body:JSON.stringify(data)
          
          
        })
        const json = response.json()
        console.log(json);
        const newNotes = notes.filter((note)=>{return note._id!==id})
        setNotes(newNotes)
      }
      //Edit Note
      const editNote = async(id,title,description,tag)=>{
        
        const response = await fetch(`${host}/api/notes/updatenotes/${id}`,{
          method:'PUT',
          headers:{
            'Content-Type':'application/json',
            'auth-token':'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjUwYmU0ZDEwOWNkMDdjZGZmZGFmNjQ3In0sImlhdCI6MTY5NTYyMzAwNX0.8qbFsKj0t1-N7Ho0nBI-hkQsdXXXAvtxUXIUuz2BrGo'
          },
          body:JSON.stringify({id,title,description,tag})
          
        })
        const json = await response.json()
        console.log(json)
        const newNote = JSON.parse(JSON.stringify(notes))
        for (let index = 0; index < newNote.length; index++) {
          const element = notes[index];
          if (element._id === id) {
            newNote[index].title = title
            newNote[index].description= description
            newNote[index].tag=tag
            
            break;
          }
          
        }
        setNotes(newNote)
      
      }
    return(
        <noteContext.Provider value={{notes,addNote,deleteNote,editNote,getNotes}}>
            {props.children}
        </noteContext.Provider>
    )
}

export default NoteState;