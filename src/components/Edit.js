import { useRef } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { db } from '../firebase'
import { doc, updateDoc } from 'firebase/firestore'

export default function Edit() {
  const titleRef = useRef()
  const detailRef = useRef()
  const note = useLocation().state
  const navigte = useNavigate()

  async function onEdit(e) {
    e.preventDefault()

    const noteRef = doc(db, 'notes', note.id)
    await updateDoc(noteRef, {
      title: titleRef.current.value,
      detail: detailRef.current.value,
    })

    navigte('/')
  }

  function goBack(e) {
    e.preventDefault()
    navigte(-1)
  }

  return (
    <div className='container'>
      <h2>노트 수정</h2>
      <form>
        <div>
          <label>제목</label>
          <input
            type='text'
            placeholder='제목'
            ref={titleRef}
            defaultValue={note.title}
          />
        </div>
        <div>
          <label>내용</label>
          <textarea
            cols='30'
            rows='10'
            placeholder='내용'
            ref={detailRef}
            defaultValue={note.detail}
          ></textarea>
        </div>
        <div>
          <button onClick={goBack}>취소하기</button>
          <button onClick={onEdit}>작성하기</button>
        </div>
      </form>
    </div>
  )
}
