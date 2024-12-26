import React, { useEffect, useState } from "react";
import TodoInput from "./TodoInput";
import TodoList from "./TodoList";

const Todo = () => {

  const todoKey="reacttodo";
  const [inputValue, setInputValue] = useState("");
  const [task, setTask] = useState(()=>{

    try {
      const Todos = localStorage.getItem(todoKey);
      // Ensure it returns an empty array if no tasks are stored
      return Todos ? JSON.parse(Todos) : [];
    } catch (error) {
      console.error("Error parsing JSON from localStorage:", error);
      // Clear invalid data from localStorage
      localStorage.removeItem(todoKey);
      return [];
    }
    
  });
  const [date, setDate] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      const datetime = new Date();
      const formatted = datetime.toLocaleDateString();
      const formattedtime = datetime.toLocaleTimeString();

      setDate(`${formatted} - ${formattedtime}`);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const handlesubmit = () => {
    if (!inputValue.trim()) return; // Prevent empty tasks
    const todomatch = task.find((currtask) => currtask === inputValue);
    if (todomatch) return;
    setTask((prev) => [...prev, inputValue]);
    setInputValue(""); // Clear input
  };

  localStorage.setItem(todoKey, JSON.stringify(task));


  const handleDelete = (value) => {
    const updatedTask = task.filter((currelem) => currelem !== value);
    setTask(updatedTask); // Update the state with the filtered tasks
  };



  const handleClear=()=>{
    setTask([])
  }
  return (
    <>
      <div className="container-fluid mt-5">
        <div className="container p-5">
          <div className="row">
            <div className="col-12">
              <h1 className="text-center fs-5 fs-bold" style={{ color: "white" }}>
                DATE AND TIME - {date}
              </h1>
              <h1 className="text-center" style={{ color: "white" }}>
                Your Task List
              </h1>
              <p className="text-center" style={{ color: "white" }}>Eat your Frog by Making Plans</p>
            </div>
          </div>
        </div>

        {/* Input Field Section */}

        <TodoInput inputValue={inputValue} setInputValue={setInputValue} handlesubmit={handlesubmit}/>
      </div>

      {/* Task List Section */}
      <section className="container-fluid mt-4">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-8">
              <ul className="list-group mt-3">
                {task.map((currelem, index) => (
                   <TodoList key={index} data={currelem} onhandledelete={handleDelete}/>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="conatainer-fluid">
        <div className="container d-flex justify-content-center align-items-center">
          <div className="row d-flex justify-content-center align-items-center">
            <div className="col-12">
              <button className="btn btn-danger text-white" onClick={handleClear}>Clear All</button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Todo;
