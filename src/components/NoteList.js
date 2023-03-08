import React from 'react'
import db from '../db/data.json'

export default function NoteList() {
  return (
    <ul className="list">
      {db.notes.map((note) => (
        <li className="note" key={note.id}>
          <h4 className="title">{note.title}</h4>
          <p>{note.detail}</p>
          <div className="bottom">
            <div className="date">{note.date}</div>
            <button>수정</button>
            <button>삭제</button>
          </div>
        </li>
      ))}
    </ul>
  )
}
