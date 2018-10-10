// @flow
import React from 'react'

type props = {
  onClick: Function,
  completed: boolean,
  text: string
}

const Todo = ({ onClick, completed, text }: props) => (
  <li
    onClick={onClick}
    style={{
      textDecoration: completed ? 'line-through' : 'none'
    }}
  >
    {text}
  </li>
)

export default Todo
