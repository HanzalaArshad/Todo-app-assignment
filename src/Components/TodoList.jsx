import React from 'react'

const TodoList = ({data,onhandledelete}) => {
  return (
    <li

  
    className="list-group-item d-flex justify-content-between align-items-center shadow-sm mb-2 rounded-3"
    style={{ maxWidth: "900px", width: "100%" }} // Reduced width of the li
  >
    {data}
    <button
      className="btn btn-danger btn-sm"
      onClick={() => onhandledelete(data)} // Pass the current task
    >
      Delete
    </button>
  </li>

  )
}

export default TodoList