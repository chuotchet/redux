// @flow
import React from 'react'
import Todo from './Todo'

type TodoType = {
  id: number,
  completed: boolean,
  text: string,
  createdTime: string
}

type PropType = {
  todos: Array<TodoType>,
  toggleTodo: Function
}

const TodoList = ({ todos, toggleTodo }: PropType) => (
  <ul>
    {todos.map(todo =>
      <Todo
        key={todo.id}
        {...todo}
        onClick={() => toggleTodo(todo.id)}
      />
    )}
  </ul>
)

export default TodoList
