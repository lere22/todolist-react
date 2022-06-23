import React, { useEffect } from "react";
import { v4 as uuidv4 } from "uuid";

const TodoInput = ({ input, setInput, todos, setTodos, edit, setEdit }) => {
  const onChangeInput = (event) => {
    setInput(event.target.value);
  };

  const updateTodo = (title, id, completed) => {
    const newTodo = todos.map((todo) => (todo.id === id ? { title, id, completed } : todo));
    setTodos(newTodo);
    setEdit("");
  };

  useEffect(() => {
    if (edit) {
      setInput(edit.title);
    } else {
      setInput("");
    }
  }, [setInput, edit]);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!edit) {
      setTodos([...todos, { id: uuidv4(), title: input, completed: false }]);
      setInput("");
    } else {
      updateTodo(input, edit.id, edit.completed);
    }
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="w-full">
          <div className="w-full flex px-10 mt-5">
            <div className="w-full">
              <input
                type="text"
                placeholder="Add a task..."
                value={input}
                required
                onChange={onChangeInput}
                className="w-full rounded-l-lg rounded-r-none bg-slate-200 px-4 py-3 text-slate-800 focus:border-cyan-500 focus:outline-none focus:ring-2 focus:ring-cyan-500 placeholder:italic placeholder:text-slate-400 text-sm md:text-base md:py-2.5"
              />
            </div>
            <div>
              <button
                type="submit"
                className="w-full rounded-r-lg rounded-l-none bg-gradient-to-r from-blue-500 to-green-400 py-3 px-8 text-sm font-bold tracking-wide text-white transition duration-300 ease-in-out hover:from-yellow-500 hover:to-pink-500 focus:outline-none focus:ring focus:from-green-400 focus:to-blue-500 md:text-base md:py-2.5"
              >
                {edit ? "Update" : "Add"}
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default TodoInput;
