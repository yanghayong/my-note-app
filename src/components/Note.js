import { MdMode, MdDelete } from 'react-icons/md'

export default function Note({ note }) {
  return (
    <li className="note">
      <h4 className="title">{note.title}</h4>
      <p>{note.detail}</p>
      <div className="bottom">
        <div className="date">{note.date}</div>
        <div className="btns">
          <MdMode />
          <MdDelete />
        </div>
      </div>
    </li>
  )
}
