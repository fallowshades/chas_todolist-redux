'use client'
const TodoItem = ({ todo, toggleDone, deleteTodo }) => {
  return (
    <div>
      <p style={{ textDecoration: todo.done ? 'line-through' : 'none' }}>
        {todo.title}
      </p>
      <div></div>
      <button onClick={() => toggleDone(!todo.done)}>Toggle Done</button>
      <button onClick={deleteTodo}>Delete</button>
    </div>
  )
}

export default TodoItem
