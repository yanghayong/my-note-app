# 리엑트 노트 앱

### json server

npm i json-server  
npm i -g json-server
json-server --watch ./src/db/data.json --port 3001

### react-router-dom v6

npm i react-router-dom

### mement js

npm i momemt

### hooks

useState
useEffct
useRef

### GET

참고  
https://www.daleseo.com/js-window-fetch/

```
useEffect(() => {
    fetch('http://localhost:3001/notes?_sort=date&_order=desc')
      .then(res => res.json())
      .then(data => setNotes(data))
  }, [])
```

### POST

```
fetch('http://localhost:3001/notes', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        title: titleRef.current.value,
        detail: detailRef.current.value,
        date: moment().format('YYYY년 MMMM Do, h:mm:ss '),
      }),
    }).then(res => {
      if (res.ok) {
        navigate('/')
      }
    })
```

### DELETE

```
fetch(`http://localhost:3001/notes/${note.id}`, {
      method: 'DELETE',
    }).then(res => {
      if (res.ok) {
        setScreen(true)
      }
    })
```
