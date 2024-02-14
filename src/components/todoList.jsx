'use client'
import { useSelector, useDispatch } from 'react-redux'

import {
  setNewTodo,
  addTodo,
  toggleDone,
  deleteTodo,
  filterDone,
  filterNotDone,
} from '@/lib/features/todos/todosSlice.jsx'
import TodoItem from './TodoItem'
import { Button } from './ui/button'
import { Input } from './ui/input'
const TodoList = () => {
  const dispatch = useDispatch()
  const newTodo = useSelector((state) => state.todoState.newTodo)
  const todos = useSelector((state) => state.todoState.todos)

  console.log(newTodo)
  console.log(todos)

  const toggleDoneDispatch = (id) => {
    dispatch(toggleDone(id))
  }

  const deleteTodoDispatch = (id) => {
    dispatch(deleteTodo(id))
  }

  const handleAddTodo = () => {
    // Assuming you have a way to generate unique IDs
    const id = new Date().getTime()

    dispatch(addTodo({ title: newTodo, id }))
  }
  const setNewTodoDispatch = (value) => {
    dispatch(setNewTodo(value))
  }
  return (
    <div>
      <Input
        className="bg-muted "
        type="text"
        value={newTodo}
        onChange={(e) => setNewTodoDispatch(e.target.value)}
      />
      <div>
        <Button onClick={handleAddTodo}>Add</Button>
        <Button onClick={() => dispatch(filterDone())}>Filter Done</Button>
        <Button onClick={() => dispatch(filterNotDone())}>
          Filter Not Done
        </Button>
      </div>
      <div className="flex flex-col-reverse gap-y-2 my-2">
        {todos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            toggleDone={() => toggleDoneDispatch(todo.id)}
            deleteTodo={() => deleteTodoDispatch(todo.id)}
          />
        ))}
      </div>
    </div>
  )
}

export default TodoList
