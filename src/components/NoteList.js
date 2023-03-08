// import db from '../db/data.json'
import { useEffect, useState } from 'react'
import Note from './Note'

export default function NoteList() {
  const [notes, setNotes] = useState([])

  useEffect(() => {
    fetch('http://localhost:3001/notes')
      .then((res) => res.json())
      .then((data) => setNotes(data))
  }, [])

  return (
    <ul className="list">
      {notes.map((note) => (
        <Note note={note} key={note.id} />
      ))}
    </ul>
  )
}
