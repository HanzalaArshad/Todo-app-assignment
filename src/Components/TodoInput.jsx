import React from 'react'

const TodoInput = ({inputValue,setInputValue,handlesubmit}) => {
  return (
    <form>
    <div className="container mt-4">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="input-group">
            <input
              type="text"
              className="form-control"
              placeholder="Enter your Task"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              aria-label="Task Input"
            />
            <button
              className="btn btn-success"
              type="button"
              onClick={handlesubmit}
            >
              Add
            </button>
          </div>
        </div>
      </div>
    </div>
  </form>
)
}

export default TodoInput