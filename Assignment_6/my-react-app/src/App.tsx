import { useRef, useState } from 'react'
import appStyle from './app.module.css'

function App() {
  const [todoList, setTodoList] = useState<string[]>([])
  const inputRef = useRef<HTMLInputElement>(null)

  function Add() {
    if (inputRef.current) {
      setTodoList([...todoList, inputRef.current.value])
      inputRef.current.value = ""
    }
  }

  return (
    <div className={appStyle.container}>
      <h1>Todo List</h1>
      {
        todoList.map((todo, index) => 
          <div>
            <span className={appStyle.todo}>{todo}</span>
            <button onClick={() => setTodoList(todoList.filter((_, i) => i !== index))}>X</button>
          </div>
        )
      }
      <div className="input">
        <input type='text' ref={inputRef}></input>
        <button onClick={Add}>+</button>
      </div>
    </div>
  )
}

export default App
