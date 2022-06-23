import React, { useState } from "react";
import TodoInput from "./components/TodoInput";
import TodoItem from "./components/TodoItem";

function App() {
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState([]);
  const [edit, setEdit] = useState(null);

  return (
    <div className="container mt-28">
      <div className="max-w-sm shadow-lg py-5 rounded-xl bg-slate-900 mx-auto md:max-w-md">
        <h1 className="text-3xl text-center mt-5 text-white font-bold md:text-4xl">
          React <span className="bg-gradient-to-r from-green-400 to-cyan-500 text-transparent bg-clip-text">Todo-List</span> App!
        </h1>
        <div className="w-full py-5">
          <div className="mx-auto mb-5 max-w-xl text-center text-white">
            <TodoInput input={input} setInput={setInput} todos={todos} setTodos={setTodos} edit={edit} setEdit={setEdit} />
          </div>
          <div className="w-full px-10">
            <TodoItem todos={todos} setTodos={setTodos} setEdit={setEdit} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
